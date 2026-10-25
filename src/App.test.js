import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </MemoryRouter>
  );

beforeAll(() => {
  window.matchMedia = window.matchMedia || (() => ({ matches: false }));
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  window.scrollTo = () => {};
});

test('renders the contact page with navbar', () => {
  renderAt('/contact');
  expect(screen.getAllByText(/muis/i).length).toBeGreaterThan(0);
  expect(document.querySelector('#contact')).toBeInTheDocument();
});

test('renders 404 page with navbar for unknown routes', () => {
  renderAt('/about');
  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  expect(document.querySelector('nav.main-navbar')).toBeInTheDocument();
});
