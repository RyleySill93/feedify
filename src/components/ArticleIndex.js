import React from 'react';
import { View, Text, ListView } from 'react-native';
import ArticleItem from './ArticleItem';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/ArticleActions';

class ArticleIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    this.createDataSource(this.props.articles);
  }

  componentDidMount() {
    this.props.fetchArticles(this.props.channel);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.articles);
  }

  createDataSource (articles) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(articles);
  }

  renderRow (article) {
    return <ArticleItem article={article} articles={this.props.articles} />;
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
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: (source) => dispatch(fetchArticles(source))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleIndex);
