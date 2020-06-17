import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import * as Sentry from '@sentry/browser';


Sentry.init({dsn: "https://5bf051733d1742fd9095dc6da59e991e@o408693.ingest.sentry.io/5279832"});


ReactDOM.render(<App/>, document.getElementById("root"));
