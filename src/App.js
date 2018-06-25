import React, {Component} from 'react';
import Input from './components/Input';
import Buttons from './components/Buttons';
import style from './App.css';
import {isOperator, parseExpression, isGroupOperator, entryHandler} from './utils/calculator';

class App extends Component {
  state = {
    input: '',
  };

  onInputButtonClick = entity => {
    this.setState (prevState => {
      return {
        input: entryHandler(prevState.input, entity)
      };
    });
  };

  evaluateHandler = () => {
    this.setState (prevState => {
      var res;
      try {
        res = parseExpression (prevState.input);
      } catch (e) {
        res = 'ERROR';
      }
      return {
        input: res.toString(),
      };
    });
  };

  clearHandler = ()=>{
    this.setState({input: ""});
  }

  backspaceHandler = ()=>{
    this.setState((prevState)=>{
      var prevInput = prevState.input;
      if(prevInput.length == 0)
        return prevState;
      return {input: prevInput.slice(0, prevInput.length-1)};
    })
  }

	onEntry = (event)=>{
		this.setState({input: event.target.value})
	}

  render () {
    return (
      <div className={style.App}>
        <Input
          value={this.state.input}
          onChange={this.onEntry}/>
        <Buttons
          onInputClick={this.onInputButtonClick}
          evaluateHandler={this.evaluateHandler}
          clearHandler={this.clearHandler}
          backspaceHandler={this.backspaceHandler}/>
      </div>
    );
  }
}

export default App;
