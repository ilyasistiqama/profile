import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({ contributions: [] }) }));
});

afterEach(() => vi.unstubAllGlobals());

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
}

describe("routing", () => {
  test("home shows professional highlights and the contribution section without featured projects", async () => {
    renderAt("/");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Ilyas");
    expect(screen.queryByRole("heading", { name: "Featured projects" })).not.toBeInTheDocument();
    expect(screen.queryByRole("article")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "GitHub contributions" })).toBeInTheDocument();
    expect(screen.getByText("Projects as PIC")).toBeInTheDocument();
    expect(screen.queryByText("GPA / 4.00")).not.toBeInTheDocument();
    expect(screen.getByText(/I'm currently Staff IT/)).toBeInTheDocument();
    expect(await screen.findByText(/Contribution data is not available yet/)).toBeInTheDocument();
  });

  test("portfolio shows projects without featured badges", () => {
    renderAt("/portfolio");
    expect(screen.queryByText("Featured")).not.toBeInTheDocument();
    for (const name of [/SIMPe/, /SERGIO/, /Sistem Pakar/]) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    }
  });

  test("each page renders inside the layout with the navbar", () => {
    for (const path of ["/experience", "/portfolio", "/contact"]) {
      const { unmount } = renderAt(path);
      // Indeks karier memiliki landmark navigasi sendiri dengan label.
      expect(screen.getByRole("navigation", { name: "" })).toBeInTheDocument();
      unmount();
    }
  });

  test("unknown routes show the 404 page with the navbar", () => {
    renderAt("/about");
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
