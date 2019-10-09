import { actionTypes } from '../types'

const initialState = 0

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TOTAL_LIST_INTERVIEW_VIDEO:
			return Number(action.payload)
		default:
			return state
	}
}