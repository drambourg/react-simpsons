import  React  from  'react';

const  DisplayCharacter= ({ character }) => {
    return (
        <div  className="DisplayCharacter">
            <img  src={character.image}  alt="picture"  />
            <ul>
                <li>Nom : {character.name}</li>
                <li>Gender : {character.gender}</li>
                <li>Espèce : {character.species}</li>
                <li>Status : {character.status}</li>
                <li>Type : {character.type}</li>
                <li>Habite sur : {character.location.name}</li>
            </ul>
        </div>
    );
};

export  default  DisplayCharacter;
