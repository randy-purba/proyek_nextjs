import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../types'

const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getListApplicant = (access_token, id_user_login, id_event, page, len, dateFrom, dateTo, sortBy, nameVal) => async (dispatch) => {
    console.dir(access_token)
    console.dir(id_event)
    console.log(id_user_login)
    const from = dateFrom ? `&date_gte=${dateFrom}` : ''
    const to = dateTo ? `&date_lte=${dateTo}` : ''
    const keywords = nameVal ? `name_like=${nameVal}&` : ''
    const params = `${keywords}_start=${page*len}&_limit=${len}${from}${to}&_sort=${sortBy}&_order=desc`
    const url = `${API_DUMMY_URL}/listUser?${params}`    
    const responses = await fetch(url)
    const headers = await responses.headers
    const total = await headers.get('x-total-count')
    dispatch(getTotalListApplicant(total))
    const data = await responses.json()
    return dispatch({ type: actionTypes.LIST_APPLICANT, payload: data })
}

const getTotalListApplicant = (data) => (dispatch) => {
    return dispatch({ type: actionTypes.TOTAL_LIST_APPLICANT, payload: data })
}
