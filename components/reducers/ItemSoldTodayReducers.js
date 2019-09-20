import { actionTypes } from '../types'

const initialState = null

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ITEMS_SOLD_TODAY:
			return action.payload
		default:
			return state
	}
}