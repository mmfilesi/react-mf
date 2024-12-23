
import React, { Suspense } from 'react';

const RemoteApp = React.lazy(() => import('mfFoo/App'));



function FooContainer() {

  return (
    <>
      <main>
        <h2>Foo Container</h2>

        <Suspense fallback={<div>Loading Microfrontend...</div>}>
          <RemoteApp />
        </Suspense>

      </main>
    </>
  )
}

export default FooContainer
