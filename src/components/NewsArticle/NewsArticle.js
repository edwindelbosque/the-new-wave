import React from 'react';
import './NewsArticle.scss';

const NewsArticle = ({ id, headline, image, description, url }) => {
  return (
    <article>
      <img alt={headline} src={image} />
      <h3><a href={url}>{headline}</a></h3>
      <p>{description}</p>
    </article>
  )
}

export default NewsArticle;