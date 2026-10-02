import React from 'react'


function Card({Candidate,selected,id,handleselected}) {
  return (
    <div
      className={`polling ${selected === id ? "selected" : ""}`}
      onClick={()=>handleselected(Candidate)}
    >
      <div className="poll-1">
        <p className="index">{Candidate.id}</p>
        <p className="class">{Candidate.className}</p>
      </div>
      <div className="symbols">
        <img src={Candidate.photo} className="img1" alt={Candidate.photo} />
        <img src={Candidate.symbol} alt={Candidate.symbol} />
      </div>
      <div className="names">
        <p>{Candidate.name}</p>
      </div>
          <div className={`ready ${selected===id?'selected':'notselected'}`}>
              {selected===id ? <button>Selected</button>: <button>Click to Select</button> }
       
      </div>
      
    </div>
  );
}

export default Card;
