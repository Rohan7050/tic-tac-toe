import react, { useState } from 'react';

export default function GameBoard({onSelectSqure, board}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // function handleSelectSquare(row, col) {
    //     setGameBoard(prevState => {
    //         const newState = [...prevState.map(ele => [...ele])]
    //         newState[row][col] = activePlayerSymbol;
    //         console.log(newState)
    //         return newState;
    //     })
    //     onSelectSqure();
    // }
    
    
    return (
        <ol id="game-board">
            {board.map((row, rIdx) => (
                <li key={rIdx}>
                    <ol>
                        {row.map((col, colIdx) => (
                            <li key={colIdx}>
                                <button disabled={board[rIdx][colIdx] != null} onClick={() => onSelectSqure(rIdx, colIdx)}>{col}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}