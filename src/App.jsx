import hangman from './components/img/hangman.webp';
import {words} from './components/words.js';
import {Abc} from './components/Abc.jsx';
import { Statistic } from './components/Statistic.jsx';

function App() {
  const calc = Math.floor(Math.random() * words.length);
  
  return (
    <>
    <header>
        <h1>Hangman</h1>
        <p className='lives'>Lives: 6</p>
        <Statistic />
    </header>
    <main>
        <img src={hangman} alt="hangman" /> 
        <p className='word'>{words[calc].text}</p>
        <div className='keyboard'>
        <Abc/>
        </div>          
    </main>
    </>
  )
}

export default App