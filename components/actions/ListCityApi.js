import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../types'

// const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getListCities = () => async (dispatch) => {
    const url = `${API_DUMMY_URL}/listKota`
    const responses = await fetch(url)
    const data = await responses.json()
    return dispatch({ type: actionTypes.LIST_CITY, payload: data })
}