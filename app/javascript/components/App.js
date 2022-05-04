import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from '../redux/configureStore';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

export default App;
