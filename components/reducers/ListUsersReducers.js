import { actionTypes } from '../types'

const initialState = null

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LIST_USER:
			return action.payload
		default:
			return state
	}
}