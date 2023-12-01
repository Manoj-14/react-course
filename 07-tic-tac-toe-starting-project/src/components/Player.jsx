import { useState } from "react";

export default function Player({ name: initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let EditablePlayername = <span className="player-name">{playerName}</span>;

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    // setIsEditing(!isEditing);
  }

  function handleOnChange(event) {
    setPlayerName(event.target.value);
  }

  if (isEditing) {
    EditablePlayername = (
      <input
        type="name"
        required
        value={playerName}
        onChange={handleOnChange}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {EditablePlayername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
