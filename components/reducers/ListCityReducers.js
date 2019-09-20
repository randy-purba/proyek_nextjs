import { actionTypes } from '../types'

const initialState = null

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LIST_CITY:
			return Object.assign([], state, action.payload)
		default:
			return state
	}
}