import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1",
      gameOver: null
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    var cells = state.cells;
    if ((cells[0] && cells[0] === cells[1] && cells[0] === cells[2])
      || (cells[3] && cells[3] === cells[4] && cells[3] === cells[5])
      || (cells[6] && cells[6] === cells[7] && cells[6] === cells[8])
      || (cells[0] && cells[0] === cells[3] && cells[0] === cells[6])
      || (cells[1] && cells[1] === cells[4] && cells[1] === cells[7])
      || (cells[2] && cells[2] === cells[5] && cells[2] === cells[8])
      || (cells[0] && cells[0] === cells[4] && cells[0] === cells[8])
      || (cells[2] && cells[2] === cells[4] && cells[2] === cells[6]))
      {
        state.gameOver = (state.currentPlayer === "player 1" ? "player 2" : "player 1") + " wins!";
        return state;
      }
    if ( cells.filter(c => c).length === 9)
      state.gameOver = "It's a draw!";
    return state;
  }

  swapPlayer = () => {
    if (this.state.currentPlayer === "player 1")
      this.setState({ currentPlayer: "player 2"});
    else
      this.setState({ currentPlayer: "player 1"});
  }

  changeCell = (cellIndex) => {
      if (this.state.gameOver || this.state.cells[cellIndex])
        return;
      var newCells = this.state.cells;
      if (this.state.currentPlayer === "player 1")
        newCells[cellIndex] = "X";
      else
        newCells[cellIndex] = "O";
      this.setState({ cells: newCells });
      this.swapPlayer();
  }

  render() {
    return (
      <div
        style={gameLayoutStyle}
      >
        <GameInfo gameState={this.state.gameOver} currentPlayer={this.state.currentPlayer}/>
        <Board cells={this.state.cells} changeFunc={ (cellIndex) => this.changeCell(cellIndex)}/>
      </div>
    );
  }
}

export default GameLayout;
