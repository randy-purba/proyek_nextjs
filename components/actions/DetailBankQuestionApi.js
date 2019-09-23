import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../types'
import cookie from 'js-cookie'

const token = cookie.get('token')

const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getDetailBankQuestion = (id) => async (dispatch) => {
    const url = `${API_DUMMY_URL}/bankQuestionData?id=${params}`    
    const responses = await fetch(url)
    const data = await responses.json()
    console.dir(data)
    return dispatch({ type: actionTypes.LIST_BANK_QUESTION, payload: data })
}

const getTotalListBankQuestion = (data) => (dispatch) => {
    return dispatch({ type: actionTypes.TOTAL_BANK_QUESTION, payload: data })
}
