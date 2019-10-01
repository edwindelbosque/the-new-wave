import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './components/App/App';

export * from './components/Menu/Menu';
export * from './components/SearchForm/SearchForm';
export * from './components/NewsContainer/NewsContainer';
export * from './components/NewsArticle/NewsArticle';

export * from './data/local';
export * from './data/entertainment';
export * from './data/health';
export * from './data/technology';
export * from './data/science';

ReactDOM.render(<App />, document.getElementById('root'));