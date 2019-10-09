import fetch from 'isomorphic-unfetch'
import cookie from 'js-cookie'
import { actionTypes } from '../../components/types'

const token = cookie.get('token')

// const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getListUser = (page, len, dateFrom, dateTo, sortBy, nameVal) => async (dispatch) => {
    const from = dateFrom ? `&created_date_gte=${dateFrom}` : ''
    const to = dateTo ? `&created_date_lte=${dateTo}` : ''
    const keywords = nameVal ? `name_like=${nameVal}&` : ''
    const params = `${keywords}_start=${page*len}&_limit=${len}${from}${to}&_sort=${sortBy}&_order=desc`
    const url = `${API_DUMMY_URL}/listUser?${params}`
    console.log(url)
    const responses = await fetch(url)

    // const access_token = JSON.parse(token).access_token 
    // const url = `${API_URL}/v1/penguna/userall`
    // const responses = await fetch(url, {
    //     method: 'GET',
    //     headers: { Authorization: 'Bearer ' + access_token }
    // })

    const data = await responses.json()
    return dispatch({ type: actionTypes.LIST_USER, payload: data })
}
