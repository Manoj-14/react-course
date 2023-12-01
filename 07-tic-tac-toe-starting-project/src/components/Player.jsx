import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  let playername = <span className="player-name">{name}</span>;

  function handleClick() {
    setIsEditing((editing) => !editing);
    // setIsEditing(!isEditing);
  }

  if (isEditing) {
    playername = <input type="name" required value={name} />;
  }
  return (
    <li>
      <span className="player">
        {playername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
