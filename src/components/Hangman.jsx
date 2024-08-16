import img from "/src/components/img/hangman.webp";
import img1 from "/src/components/img/hangman1.webp";
import img2 from "/src/components/img/hangman2.webp";
import img3 from "/src/components/img/hangman3.webp";
import img4 from "/src/components/img/hangman4.webp";
import img5 from "/src/components/img/hangman5.webp";
import img6 from "/src/components/img/hangmanfull.webp";


export function Hangman(params){
    const chooseImg = params.data === 6 
    ? img 
    : params.data === 5 
    ? img1 
    : params.data === 4 
    ? img2 
    : params.data === 3 
    ? img3 
    : params.data === 2 
    ? img4 
    : params.data === 1 
    ? img5 
    : params.data === 0 
    ? img6
    : img
    
    return (
        <div className='hangmanContainer'>
          <img src={chooseImg} alt="hangman"/>
        </div>
    );

}