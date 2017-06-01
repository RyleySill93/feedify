import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Index from './components/Index';

const RouterComponent = (props) => {
  return (
    <Router>
      <Scene
        hideNavBar={false}
        key="channelIndex"
        component={Index}
        title="Feed"
        />
      <Scene
        hideNavBar={false}
        key="articleIndex"
        component={Index}
        title="Channel"
        />
    </Router>
  );
};

export default RouterComponent;
