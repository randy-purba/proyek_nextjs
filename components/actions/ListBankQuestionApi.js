import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../types'
import cookie from 'js-cookie'


const token = cookie.get('token')

const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getListBankQuestion = (page, len, dateFrom, dateTo, sortBy, nameVal) => async (dispatch) => {
    const from = dateFrom ? `&date_gte=${dateFrom}` : ''
    const to = dateTo ? `&date_lte=${dateTo}` : ''
    const keywords = nameVal ? `name_like=${nameVal}&` : ''
    const params = `${keywords}_start=${page*len}&_limit=${len}${from}${to}&_sort=${sortBy}&_order=desc`
    const url = `${API_DUMMY_URL}/bankQuestionData?${params}`    
    const responses = await fetch(url)
    const headers = await responses.headers
    const total = await headers.get('x-total-count')
    dispatch(getTotalListBankQuestion(total))
    const data = await responses.json()
    return dispatch({ type: actionTypes.LIST_BANK_QUESTION, payload: data })
}

const getTotalListBankQuestion = (data) => (dispatch) => {
    return dispatch({ type: actionTypes.TOTAL_BANK_QUESTION, payload: data })
}
