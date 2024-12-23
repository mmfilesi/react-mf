import './App.css';
import { BrowserRouter } from 'react-router';

import AppRoutes from './AppRoutes';

function App() {

  return (
    <>
      <main>
        <h2>Host app</h2>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>

      </main>
    </>
  )
}

export default App
