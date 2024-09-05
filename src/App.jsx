import { useState } from "react"
import { Player } from "./components/player/Player"
import GameBoard from "./components/gameBoard/GameBoard"
import Logs from "./components/logs/Logs";
import { WINNING_COMBINATIONS } from "./winning";
import GameOver from "./components/gameOver/GameOver";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function deriveWinner(gameBoard) {
    let winner;
    for(const combo of WINNING_COMBINATIONS) {
        const firstSqSym = gameBoard[combo[0].row][combo[0].column];
        const SecSqSym = gameBoard[combo[1].row][combo[1].column];
        const thirdSqSym = gameBoard[combo[2].row][combo[2].column];
        if(firstSqSym && firstSqSym == SecSqSym && firstSqSym == thirdSqSym) {
            winner = firstSqSym;
        }
    }
    return winner;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...initialGameBoard.map(ele => [...ele])];

    for (let turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player
    }
    return gameBoard;
}

function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);
    
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard);
    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(row, col) {
        setActivePlayer((cur) => cur == 'X' ? 'O' : 'X');
        setGameTurns((prevTurm) => {
            let curPlayer = 'X';
            if (prevTurm.length > 0 && prevTurm[0].player == 'X') {
                curPlayer = 'O';
            }
            const updateArr = [{
                square: { row, col }, player: curPlayer
            }, ...prevTurm
            ]
            return updateArr;
        })
    }

    function restartMatch() {
        setGameTurns([]);
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player" >
                    <Player name={"Player 1"} symbol={"X"} isActive={activePlayer == 'X'} />
                    <Player name={"Player 2"} symbol={"O"} isActive={activePlayer == 'O'} />
                </ol>
                {(winner || hasDraw) && <GameOver restart={restartMatch} winner={winner}/>}
                <GameBoard board={gameBoard} turns={gameTurns} onSelectSqure={handleSelectSquare} />
            </div>
            <Logs turns={gameTurns} />
        </main>
    )
}

export default App
