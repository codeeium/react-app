import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./performance/App_lazy.jsx";
import Listitem from "./Basic_Interview/Listitem.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
      <Listitem/>
  </React.StrictMode>
)
