import React from 'react';

import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import MainNav from './components/MainNav';

function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className='main-container'>
      
      <MainHeader />

      <div className='main'>
        <MainNav />
        <main className='main-page'>{children}</main>
      </div>

      <MainFooter />

    </div>
  );
}

export default Layout;
