import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';

class App extends Component {
	render() {
		return (
			<Container>
				<Header
					as='h1'
					content='Search weather'
					textAlign='center'
					style={{ marginTop: '3rem' }}
				/>
				<SearchBar />
				<WeatherList />
			</Container>
		);
	}
}

export default App;
