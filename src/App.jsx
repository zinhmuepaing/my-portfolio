import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ThemeModeProvider } from "./context/ThemeModeProvider";
import Layout from "./Layout";
import Home from "./pages/Home";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeModeProvider>
      {/* Dark mode is retired — the experience toggle (standard ↔ brutalist)
          replaces it. next-themes is forced to light so the original glassy
          look never switches to its dark tokens. */}
      <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
        <QueryClientProvider client={queryClient}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </HashRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </ThemeModeProvider>
  );
}
