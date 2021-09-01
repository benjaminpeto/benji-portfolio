import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GA4React from "ga-4-react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop  />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

/* GOOGLE ANALITICS --> should not load with the beginning of a pageload, also preventing addblockers, and only loads once */
try {
  setTimeout(_ => {
    const ga4react = new GA4React(process.env.REACT_APP_TRACKING_ID);
    ga4react.initialize();
  }, 4000);
} catch (err) {}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
