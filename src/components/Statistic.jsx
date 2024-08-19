export default function Statistic(){  

  const score1 = localStorage.getItem("loseData");
  const lose = JSON.parse(score1);

  const score2 = localStorage.getItem("winData");
  const win = JSON.parse(score2);
    
  return (
        <>
        <div className="count">
            <p className="sum">Win sum: {win}</p>
            <p className="sum">Lose sum: {lose}</p>
        </div>     
        </>
    );
}