import { useState } from "react"
import { Player } from "./components/player/Player"
import GameBoard from "./components/gameBoard/GameBoard"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((cur) => cur == 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player" >
          <Player name={"Player 1"} symbol={"X"} isActive={activePlayer == 'X'}/>
          <Player name={"Player 2"} symbol={"O"} isActive={activePlayer == 'O'}/>
        </ol>
        <GameBoard activePlayerSymbol={activePlayer} onSelectSqure={handleSelectSquare}/>
      </div>
    </main>
  )
}

export default App
