import react from 'react';

export default function Logs({turns}) {

    return (
        <ol id='log'>
            {turns.map((info) => {
                return <li key={`${info.square.row} ${info.square.col}`}>{"player " + info.player + " " + info.square.row + ", " + info.square.col}</li>
            })}
        </ol>
    )
} 