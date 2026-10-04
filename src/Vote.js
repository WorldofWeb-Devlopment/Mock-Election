import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Vote({ Candidate, onVote, isSubmitting }) {
  return (
    <div className="vote-bar">
      <div className="vote-message">
        {isSubmitting ? (
          <span>Submitting vote...</span>
        ) : Candidate ? (
          <span>
            Selected:{Candidate.name}-{Candidate.className}
          </span>
        ) : (
          <span>Tap a candidate or Press the Vote button</span>
        )}
      </div>

      <button
        className={`vote-btn ${Candidate ? "selected" : ""}`}
        onClick={onVote}
        disabled={!Candidate || isSubmitting}
      >
        {isSubmitting ? "SUBMITTING..." : "VOTE"}
        <span>
          <FaArrowRight />
        </span>
      </button>
    </div>
  );
}

export default Vote;

// disabled={!selectedCandidate}
