import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../types'
import cookie from 'js-cookie'

const token = cookie.get('token')

const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getDetailUserAdministrator = (id) => async (dispatch) => {
    const params = `id=${id}`
    const url = `${API_DUMMY_URL}/listUser?${params}`  
    const responses = await fetch(url)
    const data = await responses.json()
    return dispatch({ type: actionTypes.DETAIL_USER_ADMINISTRATOR, payload: data[0] })
}