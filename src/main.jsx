import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import {getTheme, setTheme} from "./utils/theme.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/tokens.css";
import "./styles/themes.css";
import "./styles/globals.css";
import "./styles/glass.css";

setTheme(getTheme());

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={AppRouter}/>
  </StrictMode>,
)
