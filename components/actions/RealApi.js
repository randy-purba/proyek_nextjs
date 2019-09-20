import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../types'
import cookie from 'js-cookie'

const token = cookie.get('token')
const API_URL = process.env.API_URL

export const getListBankQuestionRealApi = () => (dispatch) => {
    console.log("getListBankQuestionRealApi : ")
//     const url = `${API_URL}/api/v1/bca/video`
//     const res = await fetch(url, {
//         headers: { Authorization: 'Bearer ' + token }
//     })
//     const data = await res.json()
}