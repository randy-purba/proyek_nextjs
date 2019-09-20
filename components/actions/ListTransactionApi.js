import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../types'

// const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getListTransaction = (page, len, dateFrom, dateTo, sortBy, nameVal) => async (dispatch) => {
    const from = dateFrom ? `&date_gte=${dateFrom}` : ''
    const to = dateTo ? `&date_lte=${dateTo}` : ''
    const keywords = nameVal ? `name_like=${nameVal}&` : ''
    const params = `${keywords}_start=${page*len}&_limit=${len}${from}${to}&_sort=${sortBy}&_order=desc`
    const url = `${API_DUMMY_URL}/listTransaction?${params}`
    const responses = await fetch(url)
    const headers = await responses.headers
    const total = await headers.get('x-total-count')
    dispatch(getTotalTransaction(total))
    const data = await responses.json()
    return dispatch({ type: actionTypes.LIST_TRANSACTION, payload: data })
}

export const getAllExportedTransaction = async (dateFrom, dateTo, sortBy, nameVal) => {
    const keywords = nameVal ? `name_like=${nameVal}&` : ''
    const params = `${keywords}date_gte=${dateFrom}&date_lte=${dateTo}&_sort=${sortBy}&_order=desc`
    const url = `${API_DUMMY_URL}/listTransaction?${params}`
    const responses = await fetch(url)
    const data = await responses.json()
    return data
}

const getTotalTransaction = (data) => (dispatch) => {
    return dispatch({ type: actionTypes.TOTAL_TRANSACTION, payload: data })
}