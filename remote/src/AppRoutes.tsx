import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router';

import useSkeleton from './core/hooks/use-skeleton';

const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const BazingaPage = React.lazy(() => import('./pages/bazinga/BazingaPage'));

export default function AppRoutes() {
  const routes = [
    {path: '/', element: <HomePage />},
    {path: '/bazinga', element: <BazingaPage />},
  ];

  return (
    <Suspense fallback={useSkeleton('')}>
      <Routes>
        { routes.map((route, key: number)=> {
          return <Route key={key} path={route.path} element={route.element} />
        }) }
      </Routes>
    </Suspense>
  );
}
