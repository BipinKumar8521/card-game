import React, { useEffect, useState } from "react";
import CardData from "../Data/data";
import "../CSS/Cards.css";

export default function Main() {
  const tables = [
    "/IMG/Tables/table_blue.png",
    "/IMG/Tables/table_green.png",
    "/IMG/Tables/table_red.png",
  ];

  const cardBackImg = "/IMG/individuals/card back/card_back.png";

  const [table, setTable] = useState(tables[1]);
  const [cardImages, setCardImages] = useState(CardData);
  const [cards, setCards] = useState([]);
  const [player1Cards, setPlayer1Cards] = useState([]);
  const [player2Cards, setPlayer2Cards] = useState([]);
  const [player3Cards, setPlayer3Cards] = useState([]);
  const [player4Cards, setPlayer4Cards] = useState([]);
  const [start, setStart] = useState(false);
  const [distributing, setDistributing] = useState(true);
  const [isYourTurn, setIsYourTurn] = useState(true);

  useEffect(() => {
    setCardImages(CardData);
    shuffleCards();
  }, []);

  useEffect(() => {
    setPlayer1Cards(cards.slice(0, 13));
    setPlayer2Cards(cards.slice(13, 26));
    setPlayer3Cards(cards.slice(26, 39));
    setPlayer4Cards(cards.slice(39, 52));
  }, [cards]);

  const shuffleCards = () => {
    const shuffleCards = [...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffleCards);
  };

  const movecard = (e) => {
    console.log(e.target);
    e.target.classList.add("move");
    setPlayer4Cards(
      player4Cards.filter(
        (card) => card.value !== e.target.value && card.name !== e.target.name
      )
    );
    setTimeout(() => {
      e.target.style.display = "none";
    }, 2000);
  };
  return (
    <div className="container">
      <h1 className="heading">Call Break</h1>
      <button onClick={shuffleCards}>Shuffle</button>
      <button
        onClick={() => {
          setStart(true);
          setTimeout(() => {
            setStart(false);
            setDistributing(false);
          }, 2000);
        }}
      >
        Start
      </button>
      <div className="table">
        <img className="table-img" src={table} alt="table" />
        <div
          className={`central-div scale-up-center ${
            !distributing ? "hide" : ""
          }`}
        >
          {cards &&
            cards.map((card, index) => (
              <>
                <img
                  className="card-img"
                  src={card.img}
                  alt={card.name}
                  key={card.id}
                  style={{ display: "none" }}
                />
                <img
                  style={
                    !start
                      ? {
                          zIndex: 10 + index,
                          top: -20 + index * 0.3,
                          left: -20 + index * 0.3,
                        }
                      : {}
                  }
                  src={cardBackImg}
                  alt=""
                  className={`card-img ${
                    start
                      ? index % 4 === 0
                        ? "right-animation"
                        : index % 4 === 1
                        ? "top-animation"
                        : index % 4 === 2
                        ? "left-animation"
                        : "bottom-animation"
                      : ""
                  }`}
                />
              </>
            ))}
        </div>
        <div className={`player-1 ${distributing ? "hide" : ""}`}>
          {player1Cards &&
            player1Cards.map((card) => (
              <>
                <img
                  className="player1-card-img"
                  src={card.img}
                  alt={card.name}
                  key={card.id}
                  style={{ display: "none" }}
                />
                <img src={cardBackImg} alt="" className="player1-card-img" />
              </>
            ))}
        </div>
        <div className={`player-2 ${distributing ? "hide" : ""}`}>
          {player2Cards &&
            player2Cards.map((card) => (
              <>
                <img
                  className="player2-card-img"
                  src={card.img}
                  alt={card.name}
                  key={card.id}
                  style={{ display: "none" }}
                />
                <img src={cardBackImg} alt="" className="player2-card-img" />
              </>
            ))}
        </div>
        <div className={`player-3 ${distributing ? "hide" : ""}`}>
          {player3Cards &&
            player3Cards.map((card) => (
              <>
                <img
                  className="player3-card-img"
                  src={card.img}
                  alt={card.name}
                  key={card.id}
                  style={{ display: "none" }}
                />
                <img src={cardBackImg} alt="" className="player2-card-img" />
              </>
            ))}
        </div>
        <div className={`player-4 ${distributing ? "hide" : ""}`}>
          {player4Cards &&
            player4Cards.map((card) => (
              <>
                <img
                  className="player4-card-img"
                  src={card.img}
                  alt={card.name}
                  key={card.id}
                  style={{ display: "none" }}
                />
                <img src={cardBackImg} alt="" className="player4-card-img" />
              </>
            ))}
        </div>
        <div className={`you ${distributing ? "hide" : ""}`}>
          {player4Cards &&
            player4Cards.map((card) => (
              <img
                className="you-card-img"
                src={card.img}
                alt={card.name}
                key={card.id}
                onClick={(e) => movecard(e)}
              />
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
