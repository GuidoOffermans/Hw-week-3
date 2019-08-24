import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    selectValue: '',
		data: [
			{
				name: 'Ivel Z3',
				manufacturer: 'Ivasim',
				year: 1969,
				origin: 'Croatia'
			},
			{
				name: 'Bally Astrocade',
				manufacturer: 'Bally Consumer Products',
				year: 1977,
				origin: 'USA'
			},
			{
				name: 'Sord M200 Smart Home Computer',
				manufacturer: 'Sord Computer Corporation',
				year: 1971,
				origin: 'Japan'
			},
			{
				name: 'Commodore 64',
				manufacturer: 'Commodore',
				year: 1982,
				origin: 'USA'
			}
		]
  };

  updateSelection = (event) => {
    event.preventDefault()
    // console.log('update', event.target.value)
    this.setState({selectValue: event.target.value})
  }

	render() {
    console.log("NEW STATE:", this.state.selectValue)
    const { data } = this.state
		return (
			<div className="App">
				 <select onChange={this.updateSelection}>
          <option>{`>-- pick a model --<`}</option>
          {data.map(dataItem => 
            <option 
              key={dataItem.name} 
              value={dataItem.name}>{`${dataItem.name} (${dataItem.year})`}
            </option>)}
				</select>
			</div>
		);
	}
}

export default App;
