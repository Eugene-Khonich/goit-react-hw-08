import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);
