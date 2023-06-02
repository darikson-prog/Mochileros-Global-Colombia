import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Articles from './Pages/Articles.jsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/articles",
      element: <Articles />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },

  ]);
  //comentario
const rootElement = document.getElementById('root');
createRoot(rootElement).render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,);

