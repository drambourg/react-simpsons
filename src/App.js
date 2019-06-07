import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quotes from "./Quotes";
import Lamp from "./Lamp";
import NameForm from "./NameForm";
import DisplayCharacter from "./DisplayCharacter";
import GenerateCharacter from "./GenerateCharacter";

const  sampleCharacter = {
    gender:  'male',
    name: '',
    species: '',
    status: '',
    image: '',
    type:  '',
    location: {
        name:  ''
    }
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            working: props.working,
            character: sampleCharacter
        };
    }

    handleClick = () => {
        this.setState({ working: !this.state.working });
    };

    getCharacter() {
        let numCharacter = Math.floor(Math.random() * Math.floor(400));
        // Récupération de l'employé via fetch
        fetch("https://rickandmortyapi.com/api/character/" + numCharacter)
            .then(response  =>  response.json())
            .then(data  => {
                this.setState({
                    character:  data,
                });
            });
    }


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
                <h2>Fetch API</h2>
                <GenerateCharacter  selectCharacter={() =>  this.getCharacter()}  />
                <DisplayCharacter character={this.state.character} />
                <hr/>
                <hr/>
                <h2>Form Exercise</h2>
                <NameForm />
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
