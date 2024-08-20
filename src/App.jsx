import { useEffect, useState } from 'react';
import hangman from './components/img/hangman.webp';
import {words} from './components/words/words.js';
import {Abc} from './components/Abc.jsx';
import { Letters } from './components/letters/Letters.jsx';

function App() {
  let calc = Math.floor(Math.random() * words.length);
  const startWord = words[calc].text;
  const word = '_  '.repeat(words[calc].text.length);
   
  window.addEventListener('keyup', (e) => {
    console.log(e.key);
  });


  return (
    <>
    <header>
        <h1>Hangman</h1>
        <p className='lives'>Lives: 6</p>
        <div className="count">
            <p className="sum">Win sum: 0</p>
            <p className="sum">Lose sum: 0</p>
        </div>  
        </header>
    <main>
        <img src={hangman} alt="hangman" /> 
        <Abc word={word} startWord={startWord}/>
        <div className='keyboard'>
        </div>
        <button>Play Again</button>    
    </main>
    </>
  )
}

export default App