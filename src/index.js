import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'
import Panel from './AdminPanel/Panel';
import './index.css'
import './script.js'
const root = ReactDOM.createRoot(document.getElementById('application'));
root.render(
  <>
    <Panel />
  </>
);
