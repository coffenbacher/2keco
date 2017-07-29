import React, {Component} from 'react';
import { observer } from 'mobx-react'
import Header from './components/Header'
import Player from './components/Player'

//styles
import './App.scss';
import store from './store'

@observer
class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <div className='row'>
          <div className='col-lg-12'>
            <Player />
          </div>
        </div>
      </div>
    )
  }
}

export default App;