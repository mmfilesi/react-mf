import './App.css';
import { BrowserRouter } from 'react-router';

import AppRoutes from './AppRoutes';
import Layout from './layout/Layout';

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
