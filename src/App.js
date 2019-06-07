import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quotes from "./Quotes";
import Lamp from "./Lamp";


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Simpsons Quotes</h1>
                </header>
                <hr/>
                <h2>Lamp Exercise</h2>
                <Lamp on />
                <Lamp />
                <hr/>
                <h2>Quotes Exercise</h2>
                <Quotes />
            </div>
        );
    }
}


export default App;
