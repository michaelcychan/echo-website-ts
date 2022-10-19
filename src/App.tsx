import React, {useState} from 'react';
import './App.css';

const App = () => {

  const [echo, setEcho] = useState('')
  const [shout, setShout] = useState('')

  const changeText = (event: any) => {
    
    const text: string = event.target.value
    setShout(text)
    const textArray: string[] = text.trim().split(' ')
    if (textArray.length > 2) {
      textArray[textArray.length - 1] += '...' 
      for (let i = 0; i < 2; ++i){
        textArray.push(textArray[textArray.length - 1])
      }
    }
    setEcho(textArray.join(' '))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Echo Site.
        </h1>
      </header>
      <section>
        <h2>Say Something:</h2>
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
