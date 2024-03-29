import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.scss';

const NewsContainer = ({ newsArticles }) => {
  return (
    newsArticles.map(article =>
      <NewsArticle
        key={article.id}
        id={article.id}
        headline={article.headline}
        image={article.img}
        description={article.description}
        url={article.url}
      />)
  );
};

export default NewsContainer;