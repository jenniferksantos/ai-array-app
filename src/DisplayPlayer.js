// DisplayPlayer.js
import React from 'react';
import { useState } from 'react';    
import arrPlayers from './players'; // Importing the players array from players.js

function DisplayPlayer({ playerId, onBackToList }) {
  const player = arrPlayers.find((player) => player.id === playerId);
          
const [selectedPlayerId, setSelectedPlayerId] = useState(null);

const handleMoreClick = (playerId) => {
        setSelectedPlayerId(playerId);
};

  {if (player){
    return (
                <section >
                    <h2>{player.firstname} {player.lastname} ({player.age})</h2>
                    <p><b>Club</b>: {player.club}</p>
                    <p><b>Nationality</b>: {player.nationality}</p>
                    <p><b>Trophies</b>: {player.trophies}</p>
                    <p><b>Bio</b>: {player.bio}</p>
                   
                </section>
            );
        }
        else{
            return(
                <section>
                    <p>Player not found</p>
                </section>
            )
        }
    }
}

export default DisplayPlayer;
