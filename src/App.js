import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Router from './Router';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ChannelIndex from './components/ChannelIndex';

class App extends React.Component {

  constructor () {
    super();
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
