import { FETCH_WEATHER } from '../actions/types.js';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_WEATHER:
			return [action.payload.data, ...state];
		default:
			return state;
	}
};
