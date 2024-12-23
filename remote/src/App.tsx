import { BrowserRouter } from 'react-router';

import './App.css';

import Layout from './layout/Layout';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
