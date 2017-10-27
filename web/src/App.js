// @flow
import React, {Component} from 'react';
import wineGlasses from './Cheers.jpg';
import './App.css';

class App extends Component<*> {
    render() {
        return (
            <div className="App">
                <img src={wineGlasses} className="wine-glasses" alt="logo" width={"30%"}/>
                <h1 className="App-title">Cheers!</h1>
            </div>
        );
    }
}

export default App;
