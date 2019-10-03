import { actionTypes } from '../types'

const initialState = null

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LIST_ANSWER_TYPE:
			return action.payload
		default:
			return state
	}
}