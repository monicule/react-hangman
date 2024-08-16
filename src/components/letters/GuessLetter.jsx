import { randomWord } from "../words/RandomWord";

export function GuessLetter (params){
    return (
        <div className="guessLetterContainer">
            {randomWord.split('').map((item,index)=>
                <div key={index} className="guessLetter">
                    {params.data.includes(item.toUpperCase())?
                    item.toLocaleUpperCase():''}
                </div>)}
        </div>
    )

}