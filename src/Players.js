import React from 'react'


const Players = ({players, deletePlayer}) => {

    const playerList = players.length ? (
        players.map(player => {
            return (
            <div className="collection-item" key={player.id}>
                <span onClick={() => deletePlayer(player.id)}> {player.name} </span>

            </div>
            )
        })
    ) : (
        <p className="center"> No players </p>
    )

    return ( 
        <div className="players collection">
            {playerList}
        </div>
    )
}

export default Players;