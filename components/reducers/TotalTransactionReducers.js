import { actionTypes } from '../types'

const initialState = 0

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TOTAL_TRANSACTION:
			return Number(action.payload)
		default:
			return state
	}
}