import React from 'react';
import './Menu.scss'

const Menu = ({ selectNews, categories }) => {

  const menuTabs = Object.keys(categories).splice(0, 5).map((key, index) => {
    return <li onClick={() => selectNews(categories[key])} key={index}>{key}</li>
  });

  return (
    <nav>
      <div className="fixed-nav">
        <h1>The New <span>wave </span></h1>
        <div className="menu-buttons-section">
          <ul>
            {menuTabs}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu;