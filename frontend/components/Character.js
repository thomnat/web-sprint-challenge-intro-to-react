import React, { useState } from 'react'

function Character({ data }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeworld, setShowHomeworld] = useState(false);

  return (
    <div className="character-card" onClick={() => {
      setShowHomeworld(prevShowHomeworld => !prevShowHomeworld);
    }}>
      <h3 className="character-name">{data.name}</h3>
      {showHomeworld && (
        <p>
          Planet: <span className="character-planet">{data.planet.name}</span>
        </p>
      )}
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  );
 }

export default Character
