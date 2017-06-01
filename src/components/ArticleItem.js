import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const NO_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/' +
  'ac/No_image_available.svg/600px-No_image_available.svg.png';

class ArticleItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { article } = this.props;
    return (
      <View style={styles.itemStyle}>
        <Image
          style={styles.imageStyle}
          source={{uri: article.urlToImage || NO_IMAGE}}
        />
      <View style={styles.contentStyle}>
        <Text style={styles.titleStyle}>{article.title || ""}</Text>
        <Text style={styles.bodyStyle} numberOfLines={3}>
          {article.description || ""}
        </Text>
      </View>
      </View>
    );
  }
}

const styles = {
  itemStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    alignItems: 'center'
  },
  imageStyle: {
    height: 75,
    width: 75,
    borderRadius: 3
  },
  titleStyle: {
    fontSize: 15,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 100,
    fontWeight: '900',
    color: '#555459'
  },
  bodyStyle: {
    fontSize: 12,
    paddingLeft: 8,
    paddingRight: 100,
    color: 'rgba(0,0, 0,0.5)'
  },
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
};

export default ArticleItem;
