import {hangman} from './components/img/hangman.webp';
import {words} from './components/words.js';
import {Abc} from './components/Abc.jsx'

function App() {
  
  return (
    <>
    <div className='main'>
        <h1>Hangman</h1>
        <p>Guess the word!</p>
        <div className='play'>
          <img src={hangman} alt="" /> 
          <p className='word'>{words[calc].text}</p>
          <div className='keyboard'>
            <Abc/>
          </div>
        </div>
        </div>
</>
  )
}

export default App