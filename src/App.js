import React from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      etat:false
    }
    setInterval(
      () => { this.state.etat && 
        this.setState({ time: this.state.time + 1000 })
      },
      1000
    )  
  }

  start = () =>{
    this.setState({etat: !this.state.etat})
      
  }
  reset = () =>{
    this.setState({time:0,etat:false})
  }

  render() { 
    let seconds = Math.floor((this.state.time / 1000) % 60)
    let minutes = Math.floor((this.state.time / (1000 * 60)) % 60)
    let hours= Math.floor((this.state.time / (1000 * 60 * 60)) % 24)
 
    return (
      <div className="chrono">
        {hours.toString().padStart(2,"0") + ":" + minutes.toString().padStart(2,"0") + ":" + seconds.toString().padStart(2,"0") }
        <div>
    <button className="myButton" onClick={this.start}>{this.state.etat ?"pause":"start"}</button>
        <button className="myButton" onClick={this.reset}>reset</button>
        </div>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
     <Timer />
    </div>
  );
}

export default App;
