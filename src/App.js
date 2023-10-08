import React from 'react';
import Home from './Components/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Artist from './Components/Artist/Artist';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/Notfound/Notfound';

let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'artist', element: <Artist /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Notfound /> }
    ]
  }
])

export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}
