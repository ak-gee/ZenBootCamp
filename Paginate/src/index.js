import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app.js';
import {Appticket,Pagination_App} from './appticket.js';
import {Pagination} from './components/pagination.js';
import './style.css';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Appticket/>
    {/* <Pagination_App/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

