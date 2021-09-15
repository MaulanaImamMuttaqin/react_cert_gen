import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight, faBars, faChevronCircleLeft, faCloudUploadAlt, faCogs, faHome, faPlus, faQuestionCircle, faSignOutAlt, faTrash, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight, faArrowLeft, faBars, faUser, faHome, faPlus, faTrash, faUsers, faSignOutAlt, faCogs, faChevronCircleLeft, faQuestionCircle, faCloudUploadAlt)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>

  </React.StrictMode>,
  document.getElementById("root")
);


