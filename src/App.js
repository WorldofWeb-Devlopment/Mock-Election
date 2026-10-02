import React, { useState } from "react";
import "./App.css";
import CBSE from "./image/CBSE.png";
import Data from "./Data";
import Vote from "./Vote";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "./firebase";
import { doc, updateDoc, increment } from "firebase/firestore";

function App() {
  const [selected, setSelectd] = useState(null);
  // const[votes,setVotes] = useState({})
  const [hasVoted, setHasVoted] = useState(false);
     

  function handleselected(Candidate) {
    setSelectd(Candidate);
  }

  async function handlevote() {
    if (!selected) return;
    

   try {
     const voteRef = doc(db, "votes", "election");

     await updateDoc(voteRef, {
       [`candidates.candidate_${selected.id}.votes`]: increment(1),
     });

     console.log("Vote added:", selected.name);

     toast.success("🗳️ Vote submitted successfully!", {
       position: "bottom-center",
       autoClose: 1000,
       hideProgressBar: false,
       closeOnClick: false,
       pauseOnHover: true,
       draggable: true,
       theme: "light",
       transition: Bounce,
       onClose: () => setHasVoted(false),
     });

     setHasVoted(true);
   } catch (error) {
     console.error("Vote failed:", error);

     toast.error("❌ Vote submission failed");
   }
  }
  
  

  return (
    <div className="main">
      <section className="nav">
        <img src={CBSE} alt={CBSE} />
        <h1>
          DNU <strong> SMBM </strong> NATIONAL PUBLIC SCHOOL
        </h1>
      </section>
      <div className="classname">
        <h3>Primary Compartment</h3>
        <h2>Mock Election</h2>
      </div>
      <div className="card-container">
        <Data selected={selected} handleselected={handleselected} />
      </div>
      {!hasVoted && <Vote Candidate={selected} onVote={handlevote} />}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
