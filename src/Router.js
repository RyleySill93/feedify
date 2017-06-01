import React from 'react';
import { Navigator } from 'react-native';
import { connect} from 'react-redux';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import ChannelIndex from './components/ChannelIndex';
import ArticleIndex from './components/ArticleIndex';

const RouterComponent = (props) => {
  return (
    <Router>
      <Scene key="main">
        <Scene
          hideNavBar={false}
          key="channelIndex"
          component={ChannelIndex}
          title="Feed"
          />
        <Scene
          hideNavBar={false}
          key="articleIndex"
          component={ArticleIndex}
          title="Channel"
          />
      </Scene>
    </Router>
  );
};

const mapStateToProps = state => ({
  currentArticle: state.currentArticle
});

export default connect(mapStateToProps, null)(RouterComponent);
