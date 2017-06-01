import React from 'react';
import { View, Text, ListView } from 'react-native';
import ListItem from './ListItem';
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
    this.props.fetchArticles();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.articles.length !== nextProps.articles.length) {
      this.createDataSource(nextProps.articles);
    }
  }

  createDataSource (articles) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(articles);
  }

  renderRow (article) {
    return <ListItem article={article} articles={this.props.articles} />;
  }

  render() {
    return (
      <View>
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

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleIndex);
