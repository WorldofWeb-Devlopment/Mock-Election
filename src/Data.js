import png from "./image/PNG.png";
import Globe from "./image/Globe.png";
import Compass from "./image/Compass.png";
import Emblem from "./image/Emblem.png";
import News from "./image/News.png";
import Book from "./image/Book.png";
import Card from "./Components/Card";


function Data({ selected, handleselected }) {
  const Candidate = [
    {
      id: 1,
      name: "Tamizhi",
      className: "V - A",
      photo: png,
      symbol: Globe,
    },
    {
      id: 2,
      name: "Syham Sunder",
      className: "V - B",
      photo: png,
      symbol: Book,
    },
    {
      id: 3,
      name: "Neha Shree",
      className: "V - C",
      photo: png,
      symbol: News,
    },
    {
      id: 4,
      name: "Rithish",
      className: "V - D",
      photo: png,
      symbol: Compass,
    },
    {
      id: 5,
      name: "Akshara",
      className: "V - E",
      photo: png,
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
