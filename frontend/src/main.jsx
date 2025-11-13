import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.jsx';
import './App.css';
import Store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={Store}>
      <App />
    </Provider>
  
);
