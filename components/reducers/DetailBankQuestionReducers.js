import { actionTypes } from '../types'

const initialState = null

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.DETAIL_BANK_QUESTION:
			return action.payload
		default:
			return state
	}
}