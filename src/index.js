import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import App from '../src/App.js';

import Root from '../src/component/Root.js';
import Projects from '../src/component/Projects.js';
import NavBar from '../src/component/NavBar.js';
import Illustration from '../src/component/Illustration.js';
import BackgroundDesign from '../src/component/BackgroundDesign.js';
import About from '../src/component/About.js';
import Home from '../src/component/Home.js';


/*

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

*/
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";

const router = createBrowserRouter(
 [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "illustration",
        element: <Illustration/>,
      },
      {
        path: "backgroundDesign",
        element: <BackgroundDesign/>
      },
      {
        path: "projects",
        element: <Projects />
      },
    ],
  },
], { basename: "/JamesReacts2" });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
