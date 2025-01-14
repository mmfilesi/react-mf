import Coconuts from './components/coconuts/Coconuts';
import Unicorns from './components/unicorns/Unicorns';

export default function HomePage() {

  return (
    <>
      <section className='remote-section'>
        <h2 className='page__subheader'>Store with zustand</h2>
        <Coconuts />
      </section>

      <section className='remote-section'>
        <h2 className='page__subheader'>Events</h2>
        <Unicorns />
      </section>
    
    </>
  );
}
