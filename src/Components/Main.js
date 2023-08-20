import React, { useEffect, useState } from "react";
import CardData from "../Data/data";

export default function Main() {
  const tables = [
    "/IMG/Tables/table_blue.png",
    "/IMG/Tables/table_green.png",
    "/IMG/Tables/table_red.png",
  ];
  const [table, setTable] = useState(tables[0]);

  useEffect(() => {
    console.log(CardData);
  }, []);

  //   const shuffleCards = [...cardImages]
  //     .sort(() => Math.random() - 0.5)
  //     .map((card) => ({ ...card, id: Math.random() }));

  return (
    <div className="container">
      <h1 className="heading">Call Break</h1>
      <div className="table">
        <img className="table-img" src={table} alt="table" />
        <div className="player-1"></div>
        <div className="player-2"></div>
        <div className="player-3"></div>
        <div className="player-4"></div>
        <div className="you"></div>
      </div>

      <div className="cards">
        <div className="club">
          <h1>Club</h1>
          {CardData.map((data, index) => (
            <div key={index} className="imgs">
              {data.cards.map((card, index) => (
                <img key={index} src={card.img} alt="" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//for settings

/* <div className="buttons">
        <button className="btn" onClick={() => setTable(tables[0])}>
          Blue
        </button>
        <button className="btn" onClick={() => setTable(tables[1])}>
          Green
        </button>
        <button className="btn" onClick={() => setTable(tables[2])}>
          Red
        </button>
      </div> */
