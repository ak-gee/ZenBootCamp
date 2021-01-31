import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app.js'
import {Appticket} from './appticket.js'
import './style.css';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Appticket/>
  </React.StrictMode>,
  document.getElementById('root')
);

