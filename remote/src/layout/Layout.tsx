import React from 'react';
import { NavLink } from 'react-router';

import './layout.css';

function Layout({ children }: { children: React.ReactNode }) {

  const links = [
    {route: 'remote01', name: 'home'},
    {route: 'remote01/bazinga', name: 'bazinga'}
  ];

  return (
    <>
      <h3 className='remote-header'>Remote header</h3>
      <nav className='remote-main-nav'>
      { links.map((route, index)=> {
        return <div key={index}><NavLink
        to={route.route}
        className={({ isActive }) => isActive ? 'active' : ''}>
        {route.name}
      </NavLink></div>
      }) }
    </nav>
      <main>{children}</main>

    </>
  );
}

export default Layout;
