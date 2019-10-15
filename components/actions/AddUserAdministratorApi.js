import fetch from 'isomorphic-unfetch'
import cookie from 'js-cookie'
import { actionTypes } from '../../components/types'

const token = cookie.get('token')

const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const postAddUserAdministrator = (username, email, password) => async (dispatch) => {
    console.dir(username, email, password)
    const access_token = JSON.parse(token).access_token
    console.log('%c 🥡 access_token: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', access_token);
    // const params = `page=${page}&size=${len}&username=${nameVal}&shorting=${sortBy}&asc_dsc=asc`
    // const url = `${API_URL}/v1/user/log/getuser/page?${params}`
    // const responses = await fetch(url, {
    //     method: "GET",
    //     headers: { 
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + access_token
    //     }
    // })
    // const data = await responses.json()
    return dispatch({ type: actionTypes.ADD_USER_ADMINISTRATOR, payload: data.content })
}