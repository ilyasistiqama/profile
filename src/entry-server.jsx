import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import App from "./App";
export { getPageSeo, SEO_ROUTES, serializeStructuredData } from "./utils/seo";

export function renderPage(path) {
  return renderToString(
    <StaticRouter location={path}>
      <ThemeProvider><LanguageProvider><App /></LanguageProvider></ThemeProvider>
    </StaticRouter>,
  );
}
