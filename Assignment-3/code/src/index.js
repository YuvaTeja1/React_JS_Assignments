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

const data={
  Name:'Kyama YuvaTeja',
  EmployeeID: '2RUPL3033YUVATEJAKYAMA',
  Time:'09:30',
  date:'06-04-2022',
  Email:'xxx.yy@email.nl',
  Phone:'+91-9652114008',
  Status:'In Progress',
  Door:'Mark',
  Img:'https://www.w3schools.com/howto/img_avatar.png',
  time2:'17:00',
};


ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 