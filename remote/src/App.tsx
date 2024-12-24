/*  */ import { BrowserRouter } from 'react-router';


   

import './App.css';

import Layout from './layout/Layout';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className='main-foo'>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
