import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { firebase } from '@firebase/app'

var firebaseConfig = {
  apiKey: "AIzaSyAdNhjNoOxQG_FV8YnlILg_SzVG937I1N0",
  authDomain: "testproject-86624.firebaseapp.com",
  projectId: "testproject-86624",
  storageBucket: "testproject-86624.appspot.com",
  messagingSenderId: "496155334012",
  appId: "1:496155334012:web:c4aa97f4d1df0e481a00f9",
  measurementId: "G-B06HEFJXHY"
};

firebase.initializeApp(firebaseConfig);
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
