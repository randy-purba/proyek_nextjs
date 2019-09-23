import fetch from 'isomorphic-unfetch'
import cookie from 'js-cookie'
import { actionTypes } from '../../components/types'

const token = cookie.get('token')

export const getListUser = () => async (dispatch) => {
    const access_token = JSON.parse(token).access_token 
    const url = `${process.env.API_URL}/v1/penguna/userall`
    const responses = await fetch(url, {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + access_token }
    })
    const data = await responses.json()
    return dispatch({ type: actionTypes.LIST_USER, payload: data.data })
}
