import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ChannelItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onPress() {
    const { channel, article } = this.props;
    Actions.articleIndex({ channel: channel.id });
  }

  render() {
    const { channel } = this.props;

    return (
      <TouchableOpacity onPress={this.onPress.bind(this)}>
        <View style={styles.itemStyle}>
          <Text style={styles.titleStyle}>{channel.name || ""}</Text>
          <Text style={styles.bodyStyle} numberOfLines={3}>
            {channel.description || ""}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  itemStyle: {
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    display: 'flex',
    justifyContent: 'center'
  },
  titleStyle: {
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    fontWeight: '900',
    color: '#555459'
  },
  bodyStyle: {
    fontSize: 12,
    paddingLeft: 15,
    paddingRight: 15,
    color: 'rgba(0,0, 0,0.5)',
  }
};

export default ChannelItem;
