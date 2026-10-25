import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import App from "./App";

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
  test("home page shows the hero", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Ilyas");
  });

  test("each page renders inside the layout with the navbar", () => {
    for (const path of ["/experience", "/portfolio", "/contact"]) {
      const { unmount } = renderAt(path);
      expect(screen.getByRole("navigation")).toBeInTheDocument();
      unmount();
    }
  });

  test("unknown routes show the 404 page with the navbar", () => {
    renderAt("/about");
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
