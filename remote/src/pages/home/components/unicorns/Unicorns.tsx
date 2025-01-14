export default function Unicorns() {

  const sendUnicorn = () => {
    const event = new CustomEvent('unicorn', {
      detail: { name: `Unicorn-${Date.now()}` },
    });
    window.dispatchEvent(event);
  }
 
  return (    
    <div>
      <button className='main-button' onClick={sendUnicorn}>Send unicorn</button>

    </div>
  );
}