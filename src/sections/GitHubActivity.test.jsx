import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { LanguageProvider } from "../context/LanguageProvider";
import GitHubActivity from "./GitHubActivity";

const days = [
  { date: "2026-10-31", count: 0, level: 0 },
  { date: "2026-11-01", count: 3, level: 2 },
  { date: "2026-11-02", count: 5, level: 4 },
];

function renderActivity() {
  return render(<LanguageProvider><GitHubActivity /></LanguageProvider>);
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  vi.stubGlobal("fetch", vi.fn());
});

afterEach(() => vi.unstubAllGlobals());

test("shows the last-year heatmap, sums displayed days, and places dates by weekday", async () => {
  fetch.mockResolvedValue({ ok: true, json: async () => ({ total: { lastYear: 999 }, contributions: days }) });
  renderActivity();
  const chart = await screen.findByRole("img", { name: "8 contributions in the last year" });
  expect(chart.querySelectorAll("rect")).toHaveLength(3);
  const cells = chart.querySelectorAll("rect");
  expect(cells[0]).toHaveAttribute("y", "120"); // Saturday
  expect(cells[1]).toHaveAttribute("y", "24"); // Sunday starts the next column
  expect(cells[1]).toHaveAttribute("x", "52");
  expect(cells[2]).toHaveTextContent("5 contributions");
  expect(fetch).toHaveBeenCalledWith(expect.stringContaining("?y=last"), expect.any(Object));
});

test("keeps a profile link available when the API is rate limited", async () => {
  fetch.mockResolvedValue({ ok: false, status: 403 });
  renderActivity();
  expect(await screen.findByText(/The calendar is temporarily unavailable/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /View GitHub profile/ })).toHaveAttribute("href", "https://github.com/ilyasistiqama");
});

test("shows the empty state in the selected language", async () => {
  localStorage.setItem("lang", "id");
  fetch.mockResolvedValue({ ok: true, json: async () => ({ contributions: [] }) });
  renderActivity();
  expect(await screen.findByText(/Data kontribusi belum tersedia/)).toBeInTheDocument();
});

test("reuses the successful calendar when revisiting the page", async () => {
  fetch.mockResolvedValue({ ok: true, json: async () => ({ contributions: days }) });
  const first = renderActivity();
  await screen.findByRole("img", { name: "8 contributions in the last year" });
  first.unmount();
  renderActivity();
  await screen.findByRole("img", { name: "8 contributions in the last year" });
  expect(fetch).toHaveBeenCalledTimes(1);
});

test("rejects malformed contribution data instead of displaying a misleading chart", async () => {
  fetch.mockResolvedValue({ ok: true, json: async () => ({ contributions: [{ date: "2026-02-30", count: -2, level: 9 }] }) });
  renderActivity();
  expect(await screen.findByText(/The calendar is temporarily unavailable/)).toBeInTheDocument();
  expect(screen.queryByRole("img")).not.toBeInTheDocument();
});

test("an all-zero year remains a valid contribution calendar", async () => {
  fetch.mockResolvedValue({ ok: true, json: async () => ({ contributions: days.map((day) => ({ ...day, count: 0, level: 0 })) }) });
  renderActivity();
  expect(await screen.findByRole("img", { name: "0 contributions in the last year" })).toBeInTheDocument();
});
