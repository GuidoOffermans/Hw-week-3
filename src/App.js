import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { addModel } from './redux/actions/models';
import ModelDetails from './components/ModelDetails/ModelDetails';

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
		this.setState({ value: event.target.value });
	};

	handleAddButton = () => {
		const modelToSend = this.state.data.find(
			(model) => model.name === this.state.value
		);
		this.props.addModel(modelToSend);
	};

	render() {
		const { data } = this.state;
		const { models } = this.props;
		return (
			<div className="App">
				{models.map((model) => (
					<ModelDetails key={model.name} model={model} />
				))}
				<select
					value={this.state.value}
					onChange={this.updateSelection}
				>
					<option>{`>-- pick a model --<`}</option>
					{data.map((dataItem) => (
						<option key={dataItem.name} value={dataItem.name}>
							{`${dataItem.name} (${dataItem.year})`}
						</option>
					))}
				</select>
				<button onClick={this.handleAddButton}>Add</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		models: state.models
	};
};

export default connect(mapStateToProps, { addModel })(App);
