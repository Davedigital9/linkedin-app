import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're using the createRoot API
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Import the Provider from react-redux
import store from './store'; // Import the Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app wrapped in the Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrapping the app with the Redux Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
