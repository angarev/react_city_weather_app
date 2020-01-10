import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import { bindActionCreators } from 'redux';
import { Form, Grid, Input, Icon } from 'semantic-ui-react';

class SearchBar extends Component {
	state = { term: '' };

	inputChange = e => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = e => {
		e.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	};

	render() {
		const { term } = this.state;
		return (
			<Grid>
				<Grid.Column>
					<Form onSubmit={this.onFormSubmit}>
						<Form.Field>
							<Input
								value={term}
								input={term}
								icon={
									<Icon
										name='search'
										inverted
										circular
										link
										onClick={this.onFormSubmit}
									/>
								}
								onChange={this.inputChange}
								placeholder='Get a five-day forecast in your favorite cities in USA.'
							/>
						</Form.Field>
					</Form>
				</Grid.Column>
			</Grid>
		);
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ fetchWeather }, dispatch);

export default connect(null, mapDispatchToProps)(SearchBar);
