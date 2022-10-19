import React, {useState} from 'react';
import './App.css';
import { shoutToEcho } from './components/shoutToEcho';

const App = () => {

  const [echo, setEcho] = useState('')
  const [shout, setShout] = useState('')

  const changeText = (event: any) => {
    
    const text: string = event.target.value
    setShout(text)
    const echoText: string = shoutToEcho(text)
    setEcho(echoText)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Echo Site.
        </h1>
      </header>
      <section>
        <h2>Shout Something:</h2>
        <input
          type="text"
          id="shout"
          name="shout"
          value={shout}
          onChange={changeText}
        />
      </section>
      <section className='echo'>
        {echo}
      </section>
    </div>
  );
}

export default App;
