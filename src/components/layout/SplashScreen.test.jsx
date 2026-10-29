import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import SplashScreen from "./SplashScreen";

describe("SplashScreen scroll lock", () => {
  beforeEach(() => {
    sessionStorage.clear();
    document.body.style.overflow = "";
    vi.useFakeTimers();
  });

  afterEach(() => {
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

    expect(document.body.style.overflow).toBe("");
    expect(screen.queryByText("Fullstack Web Developer")).not.toBeInTheDocument();
  });

  test("does not touch the scroll lock when the splash was already seen", () => {
    sessionStorage.setItem("splash-seen", "1");

    render(<SplashScreen />);

    expect(document.body.style.overflow).toBe("");
    expect(screen.queryByText("Fullstack Web Developer")).not.toBeInTheDocument();
  });
});
