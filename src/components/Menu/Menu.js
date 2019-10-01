import React from 'react';
import './Menu.scss'

const Menu = ({ selectNews, state }) => {

  return (
    <nav>
      <div className="fixed-nav">
        <h1>What's <span>New</span></h1>
        <div className="menu-buttons-section">
          <ul>
            <li onClick={() => selectNews(state.local)}>Local News</li>
            <li onClick={() => selectNews(state.technology)}>Technology</li>
            <li onClick={() => selectNews(state.entertainment)}>Entertainment</li>
            <li onClick={() => selectNews(state.science)}>Science</li>
            <li onClick={() => selectNews(state.health)} > Health</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu;