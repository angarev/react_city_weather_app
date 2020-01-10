import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={12}
				style={{ width: '16%', height: '40%' }}
				initialCenter={this.props.coord}
			/>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ''
})(GoogleMap);
