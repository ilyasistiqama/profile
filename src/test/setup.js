import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Bersihkan DOM setelah setiap test
afterEach(() => cleanup());

// jsdom belum punya API browser berikut, jadi dibuat versi kosongnya
window.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
window.scrollTo = () => {};
