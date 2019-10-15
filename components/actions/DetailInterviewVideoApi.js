import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../types'
import cookie from 'js-cookie'
import axios from 'axios'
import oauth from 'axios-oauth-client'

const token = cookie.get('token')

const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getDetailInterviewVideo = (id) => async (dispatch) => {
    // const params = `id=${id}`
    const url = `${API_DUMMY_URL}/listQuestionVideo?id=${id}`
    const responses = await fetch(url)
    const data = await responses.json()
    return dispatch({ type: actionTypes.DETAIL_INTERVIEW_VIDEO, payload: data[0] })

    // const params = `page=1&size=10`
    // const url = `${API_URL}/tesaku/1`
    // const responses = await fetch(url, {
    //     method: "GET",
    //     headers: { 
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + access_token
    //     },
    // })
    // const data = await responses.json()
    // return data.object
    
}