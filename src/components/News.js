import React, { Component } from 'react';
import axios from 'axios';
import NewsItems from './NewsItems';

class News extends Component {
  // State initialization
  constructor(props) {
    super(props);
    this.state = {
      articles: [], // Holds the list of articles
      loading: true, // Loading indicator
    };
  }

  // Fetch news when the component is mounted
  componentDidMount() {
    const apiKey = ''; // Replace with your actual API key
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        this.setState({ articles: response.data.articles, loading: false });
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }

  render() {
    const { articles, loading } = this.state;

    return (
      <>
        <div className="container my-5">
          <h1 className="text-center mb-4">Top Headlines</h1>
          {loading ? (
            <h3 className="text-center">Loading...</h3>
          ) : (
            <div className="row">
              {articles.map((element, index) => (
                <div key={index} className="col-md-4 p-4">
                  <NewsItems
                    description={element.description || 'Not available'}
                    title={element.title || 'No title'}
                    imgUrl={element.urlToImage || 'https://via.placeholder.com/150'}
                    date={element.publishedAt || 'Unknown date'}
                    newsUrl={element.url}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default News;
