import React, { Component } from 'react';
import './App.css';

import Select from './components/Select/Select'

class App extends Component {

  updateSelection = (event) => {
    event.preventDefault()
    // console.log('update', event.target.value)
    // this.setState({selectValue: event.target.value})
  }

	render() {
    
		return (
			<div className="App">
				<Select updateSelection={() => this.updateSelection}/>
			</div>
		);
	}
}

export default App;
