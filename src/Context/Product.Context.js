import React, { createContext, useContext, useState } from "react";

const cardContext = createContext({
  addCard: [],
  setAddCard:() => {},
  placed:[],
  setPlaced:() => {},
});

export const useCard = () => useContext(cardContext);

export default function CardContextProvider({ children }) {
  const [addCard, setAddCard] = useState([]);
  const [placed, setPlaced] = useState([]);

  const value = {
    addCard,
    setAddCard,
    placed,
    setPlaced,
  };

  return <cardContext.Provider value={value}>{children}</cardContext.Provider>;
}
