import React from 'react';
import './NewsArticle.scss';

const NewsArticle = ({ headline, image, description, url }) => {

  return (
    <article>
      <img alt={headline} src={image} />
      <a href={url}>{headline}</a>
      <p>{description}</p>
    </article>
  )
}

export { NewsArticle };