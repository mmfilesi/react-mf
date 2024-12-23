import React from 'react';
import { NavLink } from 'react-router';

import './layout.css';

function Layout({ children }: { children: React.ReactNode }) {

  const links = [
    {route: '/', name: 'home'},
    {route: '/bazinga', name: 'bazinga'}
  ];

  return (
    <div className='main-container'>
      <h2>Foo header</h2>
      <nav className='main-sidebar'>
      { links.map((route, index)=> {
        return <div key={index}><NavLink
        to={route.route}
        className={({ isActive }) => isActive ? 'active' : ''}>
        {route.name}
      </NavLink></div>
      }) }
    </nav>
      <main className='main-page'>{children}</main>
      <footer>Foo footer</footer>
    </div>
  );
}

export default Layout;
