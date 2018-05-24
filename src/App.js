import React, { Component,PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

const Temp = (props)=>{
  console.log('render Temp');
  return (<div>{props.val}</div>)
}
class App extends PureComponent {
 
  state ={
    val:1
  }

  componentDidMount() {
    setInterval(()=>{
      this.setState(()=>{
        return {val:1}
      })
    },2000)
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps',nextProps);
    console.log('nextState',nextState);
    return (this.state.val === nextState.val ? false:true)
  }*/
  
  render() {
    console.log('render App')
    return (
      <div className="App">
         <Temp val={this.state.val}/>
      </div>
    );
  }
}

export default App;
