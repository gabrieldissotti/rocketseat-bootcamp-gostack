import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';

import store from './store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
