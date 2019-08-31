import React, {Component} from 'react';
import Players from './Players'
import AddPlayer from './AddPlayer'


class App extends Component {

  state = {
    players: [
      {id : 1,  name: 'Artur Platek'},
      {id : 2,  name: 'Marcin Platek'}
    ]
  }

  deletePlayer = (id) => {
    //console.log(id);
    const players = this.state.players.filter( player => {
      return player.id !== id 
    });
    this.setState( {
      players
    })
  }

addPlayer = (player) => {
  player.id = Math.random();
  let players = [...this.state.players, player]
  this.setState( {
    players
  })

}

  render() {
    return (
      <div className="football-app container">
      <h1 className="center blue-text">Players</h1>
      <Players players={this.state.players} deletePlayer={this.deletePlayer}/>
      <AddPlayer addPlayer={this.addPlayer}/>
     </div>
    )
  }
}

export default App;
