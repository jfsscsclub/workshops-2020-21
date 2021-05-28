import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </StrictMode>,
    rootElement
);
