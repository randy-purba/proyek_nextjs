import fetch from 'isomorphic-unfetch'
import cookie from 'js-cookie'
import { actionTypes } from '../../components/types'

const token = cookie.get('token')

const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getListUser = (page, len, nameVal, sortBy, dateFrom, dateTo, ) => async (dispatch) => {
    const access_token = JSON.parse(token).access_token
    if(typeof token !== 'undefined'){
        const access_token = JSON.parse(token).access_token
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

    // console.dir(access_token)
    // console.log("out of conditional : " + API_URL)
    // console.log("API_URL : " + API_URL)

    // const from = dateFrom ? `&created_date_gte=${dateFrom}` : ''
    // const to = dateTo ? `&created_date_lte=${dateTo}` : ''
    // const keywords = nameVal ? `name_like=${nameVal}&` : ''
    // const params = `${keywords}_start=${page*len}&_limit=${len}${from}${to}&_sort=${sortBy}&_order=desc`
    // const url = `${API_DUMMY_URL}/listUser?${params}`
    // const responses = await fetch(url)
    // // const url = `${API_URL}/v1/penguna/userall`
    // // const responses = await fetch(url, {
    // //     method: 'GET',
    // //     headers: { Authorization: 'Bearer ' + access_token }
    // // })

    // const data = await responses.json()
    // return dispatch({ type: actionTypes.LIST_USER, payload: data })
}

const getTotalListAdministrator = (data) => (dispatch) => {
    return dispatch({ type: actionTypes.TOTAL_LIST_USER_ADMINISTRATOR, payload: data })
}