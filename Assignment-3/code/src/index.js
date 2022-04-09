import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// var today = new Date()
// var datereq = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear()
// var timeNow = today.getHours() + ':' + today.getMinutes()
// console.log(timeNow)
// console.log(datereq)




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 