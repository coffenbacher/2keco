import React from 'react'
import store from '../store'
import GameBar from './GameBar'

export default class Player extends React.Component {
    render() {
        return <div>
            <GameBar />
        </div>
    }
}