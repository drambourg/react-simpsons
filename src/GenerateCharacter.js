import React from "react";

const GenerateCharacter = ({ selectCharacter }) => {
    return (
        <div className="GenerateCharacter">
            <button onClick={selectCharacter}>Cherche un personnage de Rick & Morty</button>
        </div>
    );
};

export default GenerateCharacter;
