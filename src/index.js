import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';

import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'

Bugsnag.start({
  apiKey: '47b364838a91676125a82ec2b60ecfaa',
  plugins: [new BugsnagPluginReact()]
})

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);

// ** SENTRY CONFIG **
// import { Router } from 'react-router-dom';
// import { createBrowserHistory } from 'history';

// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";

// const history = createBrowserHistory();

// Sentry.init({
//   dsn: "https://7322827349ba46a094353207b976886c@o1242693.ingest.sentry.io/6431844",
//   integrations: [
//     // BrowserTracing integration to add automatic instrumentation for monitoring
//     // the performance of browser applications.
//     new BrowserTracing({
//       tracingOrigins: ["localhost", "https://damp-savannah-47038.herokuapp.com/", /^\//],
//       routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
//     }),
//   ],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

// ReactDOM.render(<App />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();