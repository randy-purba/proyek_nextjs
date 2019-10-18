import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../types'
import cookie from 'js-cookie'

const token = cookie.get('token')

const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getDetailEvent = (id) => async (dispatch) => {
    console.log(id)
    const url = `${API_DUMMY_URL}/listEvent?id=${id}`    
    const responses = await fetch(url)
    const data = await responses.json()
    console.dir(data)
    return dispatch({ type: actionTypes.DETAIL_EVENT, payload: data[0] })
}