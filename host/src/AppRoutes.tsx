import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const FooContainer = React.lazy(() => import('./pages/FooContainer'));

import useSkeleton from './core/hooks/use-skeleton';

export default function AppRoutes() {
  const routes = [
    {path: '/', element: <HomePage />},
    {path: '/foo-container', element: <FooContainer />},
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
