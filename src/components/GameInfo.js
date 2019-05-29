import React from "react";

// FIXME: change message and color based on `gameState`'s value

/*

const GameInfo = ({ gameState = null, currentPlayer = "unkown"}) => (
  <h3>It's your turn {currentPlayer}</h3>
);
*/

const GameInfo = ({ gameState = null, currentPlayer = "unkown"}) => {
  if (gameState)
    return <h3>{gameState}</h3>;
  return <h3>It's your turn {currentPlayer}</h3>;
}

export default GameInfo;
