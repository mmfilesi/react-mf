import { useEffect, useState } from 'react';

import useStore from '../../store/use-store';
import RemoteApp from 'mfFoo/App'

export default function RemoteContainerPage() {
  const [listenerCoconuts, setListenerCoconuts] = useState(0);
  const [unicorns, setUnicorn] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribeStore = useStore.subscribe(
      (state: any) => {
        setListenerCoconuts(state.coconuts)
      },
    )

    const handleUnicornEvent = (event: any) => {
      setUnicorn((prevUnicorns) => [...prevUnicorns, event.detail]);
    };
    window.addEventListener('unicorn', handleUnicornEvent);

    return () => {
      unsubscribeStore();
      window.removeEventListener('unicorn', handleUnicornEvent);
    }
  }, [])
 
  return (
    <div className='page'>
      <h2 className='page__main'>Remote Container</h2>

      <p>Store changed: { listenerCoconuts }</p>

      <p>
        Unicorns: { unicorns.length }
      </p>

      <RemoteApp />
    </div>
  );
}
