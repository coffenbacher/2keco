import React from 'react'
import store from '../store'

export default class Header extends React.Component {
    render() {
        return <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="">
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/c/cf/Aoe_fuchs.png'} className="App-logo" alt="logo"/>
                    </a>
                    <a className="navbar-brand" href="#">
                        <span style={{fontVariant:'small-caps'}}>Elite Eco</span>
                    </a>
                    <form className="navbar-form navbar-left">
                        <button type="button" className='btn btn-primary' onClick={() => store.startGame()}>Start</button>&nbsp;
                        <button type="button" className='btn btn-danger'>Restart</button>
                    </form>
                </div>
            </div>
        </nav>
    }
}