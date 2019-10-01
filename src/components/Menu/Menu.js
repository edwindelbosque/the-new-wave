import React from 'react';
import './Menu.scss'

const Menu = () => {
  return (
    <nav>
      <h1>What's New</h1>
      <div className="menu-buttons-section">
        <ul>
          <a href=""><li>Local News</li></a>
          <a href=""><li>Technology</li></a>
          <a href=""><li>Entertainment</li></a>
          <a href=""><li>Science</li></a>
          <a href=""><li>Health</li></a>
        </ul>
      </div>
    </nav>
  )
}

export default Menu;