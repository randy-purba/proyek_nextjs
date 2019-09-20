import { actionTypes } from '../types'

const initialState = null

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PIE_DOUBLE_CHART:
			return action.payload
		default:
			return state
	}
}