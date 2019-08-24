import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { addModel } from './redux/actions/models';

class App extends Component {
	state = {
		value: '',
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
		event.preventDefault();
		console.log('update', event.target.value);
		this.setState({ value: event.target.value });
	};

	handleAddButton = () => {
		console.log('Button clicked', this.props);
		const modelToSend = this.state.data.find((model) => model.name === this.state.value);
		console.log(modelToSend);
		this.props.addModel(modelToSend);
	};

	render() {
		console.log('NEW STATE:', this.state.value);
		const { data } = this.state;
		return (
			<div className="App">
				<select value={this.state.value} onChange={this.updateSelection}>
					<option>{`>-- pick a model --<`}</option>
					{data.map((dataItem) => {
						{
							/* console.log(dataItem) */
						}
						return (
							<option key={dataItem.name} value={dataItem.name}>
								{`${dataItem.name} (${dataItem.year})`}
							</option>
						);
					})}
				</select>
				<button onClick={this.handleAddButton}>Add</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, { addModel })(App);
