import React from 'react';
import './Menu.scss'

const Menu = ({ selectNews, state }) => {
  const { local, technology, entertainment, science, health } = state;

  return (
    <nav>
      <div className="fixed-nav">
        <h1>The New <span>wave </span></h1>
        <div className="menu-buttons-section">
          <ul>
            <li onClick={() => selectNews(local)}>Local News</li>
            <li onClick={() => selectNews(technology)}>Technology</li>
            <li onClick={() => selectNews(entertainment)}>Entertainment</li>
            <li onClick={() => selectNews(science)}>Science</li>
            <li onClick={() => selectNews(health)} > Health</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export { Menu };