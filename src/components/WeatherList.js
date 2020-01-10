import './WeatherList.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from './GoogleMap';

class WeatherList extends Component {
	renderWheater(cityData) {
		const id = cityData.city.id;
		// const name = cityData.city.name;
		console.log(cityData);

		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const coord = {
			lat: cityData.city.coord.lat,
			lng: cityData.city.coord.lon
		};

		console.log(coord);

		return (
			<tr key={id}>
				<td>
					<GoogleMap coord={coord} />
				</td>
				<td>
					<Chart data={temps} color='red' units='K' />
				</td>
				<td>
					<Chart data={pressure} color='#456678' units='hPA' />
				</td>
				<td>
					<Chart data={humidity} color='#45dd78' units='%' />
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className='ui celled table'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPA)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(cityData => this.renderWheater(cityData))}
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = ({ weather }) => {
	return {
		weather
	};
};

export default connect(mapStateToProps)(WeatherList);
