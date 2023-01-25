import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom"

import { StateContextProvider } from './context';
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

//Import CSS
import './assets/css/bootstrap.min.css';
import "./assets/css/owl.carousel.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/flaticon.css";
import "./assets/css/meanmenu.css";
import "./assets/css/slick.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./styles/style.css";

// Import JS
// import "./assets/js/vendor/jquery-1.12.4.min.js";
// import "./assets/js/owl.carousel.min.js";
// import "./assets/js/isotope.pkgd.min.js";
// import "./assets/js/one-page-nav-min.js";
// import "./assets/js/slick.min.js";
// import "./assets/js/jquery.meanmenu.min.js";
// import "./assets/js/ajax-form.js";
// // import "./assets/js/wow.min.js";
// import "./assets/js/jquery.scrollUp.min.js";
// import "./assets/js/imagesloaded.pkgd.min.js";
// import "./assets/js/jquery.magnific-popup.min.js";
// import "./assets/js/plugins.js";
// import "./assets/js/main.js";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
