import { Component } from 'react';
import './App.css';
import './Pokecard.css';
import Pokegame from './pokegame';
class App extends Component {
  render() {
    return (
      <div className="App" >
       <Pokegame />
        </div>
    )
  }
}

export default App;
