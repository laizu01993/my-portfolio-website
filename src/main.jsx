import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './pages/Home/Home';

// Root component to manage dark mode
const Root = () => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });


  // Add/remove 'dark' class on <html>
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      ></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
