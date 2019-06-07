import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quotes from "./Quotes";
import Lamp from "./Lamp";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            working: props.working
        };
    }

    handleClick = () => {
        this.setState({ working: !this.state.working });
    };

    render() {
        const working = this.state.working ? 'working' : 'sleep';
        return (
            <div className="App">
                <header className="App-header">
                    <div   className="App-logo">
                    <img src={logo}  className={working} alt="logo" />
                    </div>
                    <h1 className="App-title">Simpsons Quotes</h1>
                    <button onClick={this.handleClick} className={working}>{working.toUpperCase()}</button>
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
