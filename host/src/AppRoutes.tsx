import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router';

const HomePage = React.lazy(() => import('./pages/Home/HomePage'));
const UkaLelePage = React.lazy(() => import('./pages/UkaLele/UkaLelePage'));
const RemoteContainerPage = React.lazy(() => import('./pages/Remote/RemoteContainerPage'));


import useSkeleton from './core/hooks/use-skeleton';

export default function AppRoutes() {
  const routes = [
    {path: '/', element: <HomePage />},
    {path: 'remote01/*', element: <RemoteContainerPage />},
    {path: '/uka-lele', element: <UkaLelePage />},
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
