import { useState } from "react";

export function Statistic(){  
    
    const [winCount, setWinCount] = useState(0);
    const [loseCount, setLoseCount] = useState(0);
    const [livesLeft, setLivesLeft] = useState(6);

    //function updateWinCount {
        //setWinCount( prev => prev + 1);

    const [abc, changeAbcState] = useState([
        { text: 'Q', state: '' }, { text: 'W', state: '' }, { text: 'E', state: '' }, { text: 'R', state: '' },
        { text: 'T', state: '' }, { text: 'Y', state: '' }, { text: 'U', state: '' }, { text: 'I', state: '' },
        { text: 'O', state: '' }, { text: 'P', state: '' }, { text: 'A', state: '' }, { text: 'S', state: '' },
        { text: 'D', state: '' }, { text: 'F', state: '' }, { text: 'G', state: '' }, { text: 'H', state: '' },
        { text: 'J', state: '' }, { text: 'K', state: '' }, { text: 'L', state: '' }, { text: 'Z', state: '' },
        { text: 'X', state: '' }, { text: 'C', state: '' }, { text: 'V', state: '' }, { text: 'B', state: '' },
        { text: 'N', state: '' }, { text: 'M', state: '' },])
    

    return (
        <>
        <div className="count">
            <p className="sum">Win sum: 0</p>
            <p className="sum">Lose sum: 0</p>
        </div>     
        </>
    );
}