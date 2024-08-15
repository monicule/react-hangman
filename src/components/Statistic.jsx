import { useState } from "react";

export function Statistic(){  
    
    const [winCount, setWinCount] = useState(0);

    //function updateWinCount {
        //setWinCount( prev => prev + 1);
    

    return (
        <>
        <div className="count">
            <p className="sum">Win sum: 0</p>
            <p className="sum">Lose sum: 0</p>
        </div>     
        </>
    );
}