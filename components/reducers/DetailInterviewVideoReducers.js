import { actionTypes } from '../types'

const initialState = null

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.DETAIL_INTERVIEW_VIDEO:
			return action.payload
		default:
			return state
	}
}