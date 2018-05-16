import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
        };
    }

    dec = () => {
        setTimeout(() => {
            this.setState({
                counter: this.state.counter - 1,
            });
            this.setState({
                counter: this.state.counter - 1,
            });
        }, 1000);
    }

    inc = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    render() {
        console.log("render");

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <button onClick={this.dec}>Dec</button>
                <span>{this.state.counter}</span>
                <button onClick={this.inc}>Inc</button>
            </div>
        );
    }
}

export default App;
