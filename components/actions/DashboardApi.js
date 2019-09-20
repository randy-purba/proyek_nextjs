import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../types'

// const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getPointCollectionToday = () => async (dispatch) => {
    const url = `${API_DUMMY_URL}/pointCollectionToday`
    const responses = await fetch(url)
    const data = await responses.json()
    return dispatch({ type: actionTypes.POINTS_COLLECTED_TODAY, payload: data })
}

export const getTotalSalesToday = () => async(dispatch) => {
    const url = `${API_DUMMY_URL}/totalSalesToday`
    const responses = await fetch(url)
    const data = await responses.json()
    return dispatch({ type: actionTypes.TOTAL_SALES_TODAY, payload: data })
}

export const getItemsSoldToday = () => async(dispatch) => {
    const url = `${API_DUMMY_URL}/itemSoldToday`
    const responses = await fetch(url)
    const data = await responses.json()
    return dispatch({ type: actionTypes.ITEMS_SOLD_TODAY, payload: data});
}