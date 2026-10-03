
import Globe from "./image/Globe.png";
import Compass from "./image/Compass.png";
import Emblem from "./image/Emblem.png";
import News from "./image/News.png";
import Book from "./image/Book.png";
import Card from "./Components/Card";
import img1 from "./image/optimized/172620.jpg";
import img2 from "./image/optimized/172679.jpg";
import img3 from "./image/optimized/172829.jpg";
import img4 from "./image/optimized/172833.jpg";
import img5 from "./image/optimized/173671.jpg";


function Data({ selected, handleselected }) {
  const Candidate = [
    {
      id: 1,
      name: "TAMIZHNI V",
      className: "V - A",
      photo: img3,
      symbol: Globe,
    },
    {
      id: 2,
      name: "SHYAAM K R",
      className: "V - B",
      photo: img1,
      symbol: Book,
    },
    {
      id: 3,
      name: "NEHASHRI S",
      className: "V - C",
      photo: img4,
      symbol: News,
    },
    {
      id: 4,
      name: "RITHISH S",
      className: "V - D",
      photo: img2,
      symbol: Compass,
    },
    {
      id: 5,
      name: "AKSHARA M",
      className: "V - E",
      photo: img5,
      symbol: Emblem,
    },
  ];

  return (
    <>
      {Candidate.map((Candidate) => (
        <Card
          key={Candidate.id}
          Candidate={Candidate}
          id={Candidate.id}
          selected={selected?.id}
          handleselected={handleselected}
        />
      ))}
    </>
  );
}
export default Data;
