import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../../components/types'

// const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getListBanner = () => async (dispatch) => {
    const url = `${API_DUMMY_URL}/banners`
    const responses = await fetch(url)
    const data = await responses.json()
    return dispatch({ type: actionTypes.LIST_BANNER, payload: data })
}