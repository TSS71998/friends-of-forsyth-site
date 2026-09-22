import { Suspense } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import routes from '~pages';
import RootLayout from "./pages/layout";
import { ThemeProvider } from "./context/ThemeProvider";

function AppRoutes() {
  const elements = useRoutes([
    {
      path: '/',
      element: <RootLayout />,
      children: routes,
    },
  ]);
  return elements;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="h-screen flex items-center justify-center"> Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}