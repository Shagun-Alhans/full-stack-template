import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import configureStore from '../src/client/redux/store';
import Home from './client/components/Home';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
        <div className="App">
        <Home />
        </div>
    </Provider>
  );
}

export default App;
