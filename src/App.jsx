import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Recipe, Recipes } from "./pages";
import { MainLayout } from "./layout/MainLayout";
import { Panel } from "./pages/Panel";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/recipes", element: <Recipes /> },
        { path: "/recipe/:id", element: <Recipe /> },
        { path: "/panel", element: <Panel /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
