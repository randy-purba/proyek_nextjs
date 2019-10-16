import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../types'

const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getListEvent = (access_token, page, len, dateFrom, dateTo, sortBy, nameVal) => async (dispatch) => {
    console.log(access_token)
    const from = dateFrom ? `&date_gte=${dateFrom}` : ''
    const to = dateTo ? `&date_lte=${dateTo}` : ''
    const keywords = nameVal ? `name_like=${nameVal}&` : ''
    const params = `${keywords}_start=${page*len}&_limit=${len}${from}${to}&_sort=${sortBy}&_order=desc`
    const url = `${API_DUMMY_URL}/listEvent?${params}`    
    const responses = await fetch(url)
    const headers = await responses.headers
    const total = await headers.get('x-total-count')
    dispatch(getTotalListEvent(total))
    const data = await responses.json()
    console.dir(data)
    return dispatch({ type: actionTypes.LIST_EVENT, payload: data })
}

const getTotalListEvent = (data) => (dispatch) => {
    return dispatch({ type: actionTypes.TOTAL_LIST_EVENT, payload: data })
}
