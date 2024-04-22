import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

import HeaderComponent from "./headerRoot/header";
import BodyComponent from "./bodyRoot/body";
import FooterComponent from "./footerRoot/footer";

const [headerRoot, bodyRoot, footerRoot] = [
  document.getElementById("header-root"),
  document.getElementById("body-root"),
  document.getElementById("footer-root"),
];

ReactDOM.createRoot(headerRoot).render(
  <React.StrictMode>
    <HeaderComponent />
  </React.StrictMode>
);

ReactDOM.createRoot(bodyRoot).render(
  <React.StrictMode>
    <BodyComponent />
  </React.StrictMode>
);

ReactDOM.createRoot(footerRoot).render(
  <React.StrictMode>
    <FooterComponent />
  </React.StrictMode>
);

// const onlyRoot = document.getElementById("root");

// ReactDOM.createRoot(onlyRoot).render(
//   <React.StrictMode>
//     <HeaderComponent />
//     <BodyComponent />
//     <FooterComponent />
//   </React.StrictMode>
// );
