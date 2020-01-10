import { FETCH_WEATHER } from './types';
import openWeather from '../apis/openWeather';

const API_KEY = 'YOUR_API_KEY';

export const fetchWeather = city => async dispatch => {
	const response = await openWeather.get(
		`/forecast?q=${city},us&appid=${API_KEY}`
	);
	dispatch({ type: FETCH_WEATHER, payload: response });
};
