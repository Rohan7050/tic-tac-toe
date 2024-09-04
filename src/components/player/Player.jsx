import react, {useState} from "react";

export function Player(props) {
    const [isEdit, setIsEdit] = useState(false);
    function clickHandler() {
        setIsEdit(!isEdit);
    }
    
    const [playerName, setPlayerName] = useState(props.name);
    function changeHandler(event) {
        setPlayerName(event.target.value);
    }
    
    return (
        <li className={props.isActive ? 'active' : ''}>
            <span className="player">
                {isEdit && <input placeholder="Enter Name" value={playerName} onChange={changeHandler}></input>}
                {!isEdit && <span className="Player-name">{playerName}</span>}
                <span className="Player-symbol"> {props.symbol}</span>
            </span>
            <button onClick={clickHandler}>{isEdit ? "Save" : "Edit"}</button>
        </li>
    )
}