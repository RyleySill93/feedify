import React from 'react';
import { View, Text, ListView } from 'react-native';
import ListItem from './ListItem';
import ArticleItem from './ArticleItem';
import { connect } from 'react-redux';
import { fetchChannels } from '../actions/ChannelActions';
import { fetchArticles } from '../actions/ArticleActions';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    const { channel, channels } = this.props;
    if (channel) {
      this.createDataSource(this.props.articles);
    } else {
      this.createDataSource(this.props.channels);
    }
  }

  componentDidMount() {
    const { channel, channels } = this.props;
    if (channel) {
      this.props.fetchArticles(this.props.channel);
    } else {
      this.props.fetchChannels();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { channel, channels } = this.props;
    if (channel) {
      this.createDataSource(nextProps.articles);
    } else {
      this.createDataSource(nextProps.channels);
    }
  }

  createDataSource (channels) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(channels);
  }

  renderRow (item) {
    const { channel, channels } = this.props;
    if (channel) {
      return <ArticleItem article={item} articles={this.props.articles} />;
    } else {
      return <ListItem channel={item} channels={this.props.channels} />;
    }

  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <ListView
          style={{marginBottom: 48}}
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    paddingTop: 65
  }
};

const mapStateToProps = state => ({
  channels: state.channels,
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchArticles: (source) => dispatch(fetchArticles(source))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
