import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Router from './Router';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Root from './components/Root';

class App extends React.Component {

  constructor () {
    super();
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Router />
          <Root store={store}/>
        </View>
      </Provider>
    );
  }
}
