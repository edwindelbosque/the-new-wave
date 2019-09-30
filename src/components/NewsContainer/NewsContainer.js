import React from 'react';
import './NewsContainer.scss';
import NewsArticle from '../NewsArticle/NewsArticle';

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


// Create a NewsContainer component, which will act as a container that 
// renders each of our news articles. For now, the news articles being 
// displayed will be “Local News”. Figure out how to pass information 
// from App.js to NewsContainer.js!

// Then create a NewsArticle component. Each NewsArticle card will display: 
// the image, the headline, the description, and the url (see the screenshot 
//   above for an idea).

// In your NewsContainer component, create NewsArticle cards that have the 
// information each needs to display properly.