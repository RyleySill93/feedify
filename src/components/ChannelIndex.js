import React from 'react';
import { View, Text, ListView } from 'react-native';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { fetchChannels } from '../actions/ChannelActions';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    this.createDataSource(this.props.channels);
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.channels.length !== nextProps.channels.length) {
      this.createDataSource(nextProps.channels);
    }
  }

  createDataSource (channels) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(channels);
  }

  renderRow (channel) {
    return <ListItem channel={channel} channels={this.props.channels} />;
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
  channels: state.channels
});

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
