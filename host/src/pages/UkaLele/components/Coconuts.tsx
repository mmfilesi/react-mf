import useStore from '../../../store/use-store';

import './Coconuts.css';

export default function Coconuts() {
  const coconuts = useStore((state: any) => state.coconuts);
  const addCoconut = useStore((state: any) => state.addCoconut);
  const removeCoconut = useStore((state: any) => state.removeCoconut);
 
  return (    
    <div>
      <p className='coconuts-title'>Coconuts: {coconuts}</p>

      <div className='coconuts-actions'>
        <button className='main-button' onClick={addCoconut}>Add Coconut</button>
        <button className='main-button' onClick={removeCoconut}>Remove Coconut</button>
      </div>
    </div>
  );
}

