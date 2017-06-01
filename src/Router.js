import React from 'react';
import { Navigator } from 'react-native';
import { connect} from 'react-redux';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import ChannelIndex from './components/ChannelIndex';
import ArticleIndex from './components/ArticleIndex';

const RouterComponent = (props) => {
  return (
    <Router>
      <Scene
        hideNavBar={false}
        key="channelIndex"
        component={ChannelIndex}
        title="Feed"
        />
      <Scene
        hideNavBar={false}
        key="articleIndex"
        component={ChannelIndex}
        title="Channel"
        />
    </Router>
  );
};

export default connect(null, null)(RouterComponent);
