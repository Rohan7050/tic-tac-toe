function GameOver({winner, restart}) {
    console.log('Game Over component')
    return ( 
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It's a Draw!</p>}
            <p>
                <button onClick={restart}>Rematch!</button>
            </p>
        </div>
     );
}

export default GameOver;