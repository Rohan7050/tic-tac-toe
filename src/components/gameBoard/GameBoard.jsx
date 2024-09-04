import react, { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({onSelectSqure, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleSelectSquare(row, col) {
        setGameBoard(prevState => {
            const newState = [...prevState.map(ele => [...ele])]
            newState[row][col] = activePlayerSymbol;
            console.log(newState)
            return newState;
        })
        onSelectSqure();
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rIdx) => (
                <li key={rIdx}>
                    <ol>
                        {row.map((col, colIdx) => (
                            <li key={colIdx}>
                                <button disabled={gameBoard[rIdx][colIdx] != null} onClick={() => handleSelectSquare(rIdx, colIdx)}>{col}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}