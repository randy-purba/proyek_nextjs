import fetch from 'isomorphic-unfetch'
import cookie from 'js-cookie'
import { actionTypes } from '../../components/types'

const token = cookie.get('token')

const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getListUser = (access_token, page, len, nameVal, sortBy, dateFrom, dateTo, ) => async (dispatch) => {
    
    const params = `page=${page}&size=${len}&username=${nameVal}&shorting=${sortBy}&asc_dsc=asc`
    const url = `${API_URL}/v1/user/log/getuser/page?${params}`
    const responses = await fetch(url, {
        method: "GET",
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        }
    })
    const data = await responses.json()
    dispatch(getTotalListAdministrator(data.totalElements))
    return dispatch({ type: actionTypes.LIST_USER, payload: data.content })
}

const getTotalListAdministrator = (data) => (dispatch) => {
    return dispatch({ type: actionTypes.TOTAL_LIST_USER_ADMINISTRATOR, payload: data })
}