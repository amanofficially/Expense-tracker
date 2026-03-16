import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"  // loads Tailwind CSS directives

// Entry point: mounts the React app into <div id="root"> in index.html
// StrictMode helps catch bugs by double-invoking some functions in development
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

