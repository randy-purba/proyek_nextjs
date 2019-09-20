import { actionTypes } from '../types'

const initialState = null

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TOTAL_SALES_TODAY:
			return action.payload
		default:
			return state
	}
}