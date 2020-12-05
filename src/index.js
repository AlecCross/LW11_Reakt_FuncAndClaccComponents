import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Импорт по умолчанию
import App from './App';
//import {} from './App';
import {GetRecipe} from './App3';
import {FavBand} from './App3';
import reportWebVitals from './reportWebVitals';


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
