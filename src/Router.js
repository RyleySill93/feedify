import React from 'react';
import { Navigator } from 'react-native';
import { connect} from 'react-redux';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Splash from './components/Splash';
import ChannelIndex from './components/ChannelIndex';
import ArticleShow from './components/ArticleShow';

const RouterComponent = (props) => {
  return (
    <Router>
      <Scene key="main">
        <Scene
          hideNavBar={false}
          key="articleFeed"
          component={ChannelIndex}
          title="Feed"
          />
        <Scene
          hideNavBar={false}
          key="articleShow"
          component={ArticleShow}
          title="Article"
          />
      </Scene>
    </Router>
  );
};

const mapStateToProps = state => ({
  currentArticle: state.currentArticle
});

export default connect(mapStateToProps, null)(RouterComponent);
