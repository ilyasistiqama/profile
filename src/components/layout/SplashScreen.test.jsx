import { act, fireEvent, render, screen } from "@testing-library/react";
import { StrictMode } from "react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import SplashScreen from "./SplashScreen";

const originalFonts = Object.getOwnPropertyDescriptor(document, "fonts");

describe("SplashScreen scroll lock", () => {
  beforeEach(() => {
    sessionStorage.clear();
    document.body.style.overflow = "";
    vi.useFakeTimers();
  });

  afterEach(() => {
    if (originalFonts) Object.defineProperty(document, "fonts", originalFonts);
    else delete document.fonts;
    vi.useRealTimers();
    document.body.style.overflow = "";
  });

  test("releases the scroll lock after the splash finishes", () => {
    render(<SplashScreen />);

    expect(document.body.style.overflow).toBe("hidden");
    expect(screen.getByText("Fullstack Web Developer")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2400);
    });

    expect(document.body.style.overflow).toBe("hidden");
    expect(screen.getByText("Fullstack Web Developer")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(600);
    });

    expect(screen.getByText("Fullstack Web Developer")).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1100));

    expect(document.body.style.overflow).toBe("");
    expect(screen.queryByText("Fullstack Web Developer")).not.toBeInTheDocument();
  });

  test("shows again on reload even if the previous session flag exists", () => {
    sessionStorage.setItem("splash-seen-v2", "1");

    const { unmount } = render(<SplashScreen />);

    expect(document.body.style.overflow).toBe("hidden");
    expect(screen.getByText("Fullstack Web Developer")).toBeInTheDocument();
    unmount();

    expect(document.body.style.overflow).toBe("");
    render(<SplashScreen />);
    expect(screen.getByText("Fullstack Web Developer")).toBeInTheDocument();
  });

  test("keeps the content mounted until exit and completes under StrictMode", () => {
    // Pernah melihat desain lama tidak boleh menyembunyikan versi baru.
    sessionStorage.setItem("splash-seen", "1");
    render(<StrictMode><SplashScreen /></StrictMode>);
    const splash = document.querySelector(".portfolio-splash");

    expect(screen.getByText("Ilyas Istiqama")).toHaveTextContent("Ilyas Istiqama.");
    expect(splash.parentElement).toBe(document.body);
    expect(splash).toHaveStyle({ opacity: "1", position: "fixed" });

    act(() => vi.advanceTimersByTime(2999));
    expect(splash).toHaveStyle({ opacity: "1" });
    expect(document.body.style.overflow).toBe("hidden");

    act(() => vi.advanceTimersByTime(1));
    expect(splash).toHaveStyle({ opacity: "0" });

    act(() => vi.advanceTimersByTime(999));
    expect(splash).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(101));
    expect(splash).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
  });

  test("waits for the overlay fade to finish before removing it", () => {
    render(<SplashScreen />);
    const splash = document.querySelector(".portfolio-splash");
    act(() => vi.advanceTimersByTime(3000));

    const endEvent = () => Object.assign(new Event("transitionend", { bubbles: true }), { propertyName: "opacity" });
    fireEvent(splash.querySelector(".portfolio-splash__content"), endEvent());
    expect(splash).toBeInTheDocument();
    fireEvent(splash, endEvent());
    expect(splash).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
  });

  test("reveals text only after both Google Fonts have loaded", async () => {
    let finishLoading;
    const loading = new Promise((resolve) => { finishLoading = resolve; });
    Object.defineProperty(document, "fonts", { configurable: true, value: { load: vi.fn(() => loading) } });
    render(<SplashScreen />);
    const splash = document.querySelector(".portfolio-splash");
    expect(splash).toHaveAttribute("data-stage", "prepare");
    expect(screen.getByText("Ilyas Istiqama")).toHaveStyle({ visibility: "hidden" });
    expect(splash.querySelector(".portfolio-splash__logo")).toBeVisible();

    await act(async () => finishLoading([{}]));
    expect(splash).toHaveAttribute("data-font", "web");
    expect(splash).toHaveAttribute("data-stage", "show");
    expect(screen.getByText("Ilyas Istiqama")).toHaveStyle({ visibility: "visible" });
  });

  test("keeps the fallback font when Google Fonts finish after the timeout", async () => {
    let finishLoading;
    const loading = new Promise((resolve) => { finishLoading = resolve; });
    Object.defineProperty(document, "fonts", { configurable: true, value: { load: vi.fn(() => loading) } });
    render(<SplashScreen />);
    const splash = document.querySelector(".portfolio-splash");
    act(() => vi.advanceTimersByTime(1500));
    expect(splash).toHaveAttribute("data-font", "fallback");
    expect(splash).toHaveAttribute("data-stage", "show");

    await act(async () => finishLoading([{}]));
    expect(splash).toHaveAttribute("data-font", "fallback");
    expect(splash.style.getPropertyValue("--splash-font-sans")).toBe("system-ui, sans-serif");
  });
});
