import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Vote({ id, Candidate, onVote }) {
  return (
    <div className="vote-bar">
      <div className="vote-message">
        {Candidate ? (
          <span>
            Selected:{Candidate.name}-{Candidate.className}
          </span>
        ) : (
          <span>Tap a candidate or Press the Vote button</span>
        )}
      </div>

      <button className={`vote-btn ${Candidate ? "selected" : ""}`} onClick={onVote}>
        VOTE
        <span>
          <FaArrowRight />
        </span>
      </button>
    </div>
  );
}

export default Vote;

// disabled={!selectedCandidate}
