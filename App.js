import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './src/reducers';
import Main from './src/components/Main';

let store = createStore(todoApp);

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;