import React, { useState, useEffect } from 'react';
import './Game.scss';
import { Board, Header, History, Moves } from '../';

export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [hasWinner, setHasWinner] = useState(false);
  const [winner, setWinner] = useState('');
  const [winningPosition, setWinningPosition] = useState([]);
  const [endgame, setEndgame] = useState(false);

  useEffect(() => {
    if (!hasWinner) checkForWinner(returnLastTurnSquares());
  })

  useEffect(() => {
    handleEndgame();
    // eslint-disable-next-line
  }, [history, hasWinner])

  const returnLastTurnSquares = () => history[history.length - 1];

  const markBoard = (index) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const lastTurnSquares = [...newHistory[newHistory.length - 1]];

    if (!!lastTurnSquares[index] || !!hasWinner) return;
    
    lastTurnSquares[index] = xIsNext ? 'X' : 'O';
    const combined = [...newHistory, lastTurnSquares];

    setHistory(combined);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  }

  const checkForWinner = (squares) => {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setHasWinner(true);
        setWinner(squares[a]);
        setWinningPosition(winningPositions[i]);        
      };
    }
    return null;
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  const handleNewGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
    setHasWinner(false);
    setWinner('');
    setWinningPosition([]);
    setEndgame(false);
  }

  const handleEndgame = () => {
    const boardIsFull = returnLastTurnSquares().every(square => !!square);
    const gameTied = !endgame && boardIsFull;
    console.log('entrou no handleEndgame')
    setEndgame(gameTied || hasWinner);
  }

  function handleStatus() {
    if (!!winner) return `Player ${winner} wins!`;
    if (endgame) return "Endgame!";
    return `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div id="game">

      <Header 
        title="React Hooks Tic Tac Toe"
        hasWinner={hasWinner}
        endgame={endgame}
        handleNewGame={() => handleNewGame()}
      />

      <div className="container">

        <Board 
          squares={history[stepNumber]}
          onClick={(index) => markBoard(index)}
          winningPosition={winningPosition}
          endgame={endgame && !hasWinner}
        />

        <History 
          status={handleStatus()}
          hasWinner={hasWinner}
        >
          {history.map((move, moveIndex) => (
            <Moves
              key={moveIndex}
              index={moveIndex}
              onClick={(moveIndex) => jumpTo(moveIndex)}
            />
          ))}
        </History>
        
      </div>

    </div>
  );
}
