import { actionTypes } from '../types'

const initialState = null

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LINE_CHART:
			return Object.assign([], state, action.payload)
		default:
			return state
	}
}