import { actionTypes } from '../types'

const initialState = null

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.POINTS_COLLECTED_TODAY:
			return action.payload
		default:
			return state
	}
}