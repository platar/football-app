import React, {Component} from 'react';
import Players from './Players'
import AddPlayer from './AddPlayer'
import Navbar from './components/NavBar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


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

  // render() {
  //   return (
  //     <div className="football-app container">
  //     <h1 className="center blue-text">Players</h1>
  //     <Players players={this.state.players} deletePlayer={this.deletePlayer}/>
  //     <AddPlayer addPlayer={this.addPlayer}/>
  //    </div>
  //   )
  // }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
     </div>

     </BrowserRouter>
    )
  }


}

export default App;
