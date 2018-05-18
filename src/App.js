import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = {
      running : false,
      lapse : 0
    };
  }
  handleClick(){
    this.setState(
      state => {
        if(this.state.running){
          clearInterval(this.timer);
        }
        else{
          const start= Date.now() - this.state.lapse;
          this.timer= setInterval( ()=>{this.setState({lapse: Date.now()-start})});
        }
        return {running : !this.state.running};
      }
    );
  }
  handleClear(){
    clearInterval(this.timer);
    this.setState({
      running:false,
      lapse :0
    });
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Event demo</h1>
        </header>
        <div className="App-intro">
          <p>{this.state.lapse}ms</p>
          <button onClick = {this.handleClick}>{this.state.running? "Stop" : "Start"}</button>
          <button onClick ={this.handleClear}>Clear</button>
        </div>
      </div>
    );
  }
}

export default App;
