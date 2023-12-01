import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  let playername = <span className="player-name">{name}</span>;

  function handleClick(setEditing) {
    setIsEditing(setEditing);
  }

  if (isEditing) {
    playername = <input type="name" required />;
  }
  return (
    <li>
      <span className="player">
        {playername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleClick(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
