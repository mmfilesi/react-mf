import { NavLink } from 'react-router';

import './MainNav.css';

function MainNav() {

  const links = [
    {route: '/', name: 'home'},
    {route: '/uka-lele', name: 'host: uka lele'},
    {route: '/remote01', name: 'remote01'},
  ];  

  return (
    <nav className='main-sidebar'>
      { links.map((route, index)=> {
        return <div key={index}><NavLink
        to={route.route}
        className={({ isActive }) => isActive ? 'active' : ''}>
        {route.name}
      </NavLink></div>
      }) }
    </nav>
  );
}

export default MainNav;
