import fetch from 'isomorphic-unfetch'
import { actionTypes } from '../types'
import cookie from 'js-cookie'

const token = cookie.get('token')

const API_URL = process.env.API_URL
const API_DUMMY_URL = process.env.API_DUMMY_URL

export const getListInterviewVideo = (page, len, dateFrom, dateTo, sortBy, nameVal) => async (dispatch) => {
    try {
        // const access_token = JSON.parse(token).access_token
        const from = dateFrom ? `&date_gte=${dateFrom}` : ''
        const to = dateTo ? `&date_lte=${dateTo}` : ''
        const keywords = nameVal ? `title_like=${nameVal}&` : ''
        const params = `${keywords}_start=${page*len}&_limit=${len}${from}${to}&_sort=${sortBy}&_order=desc`
        const url = `${API_DUMMY_URL}/listQuestionVideo?${params}`    
        const responses = await fetch(url)
        const headers = await responses.headers
        const total = await headers.get('x-total-count')
        dispatch(getTotalListInterviewVideo(total))
        const data = await responses.json()
        return dispatch({ type: actionTypes.LIST_INTERVIEW_VIDEO, payload: data })
        // const access_token = JSON.parse(token).access_token
        // const params = `page=${page}&size=${len}`
        // const url = `${API_URL}/v1/video/get/video/page?${params}`
        // const responses = await fetch(url, {
        //     method: "GET",
        //     headers: { 
        //         Authorization: 'Bearer ' + access_token
        //     },
        //     credentials:"include"
        // })
        // const data = await responses.json()
        // return data.object
    } catch (err) {
        console.log("Error : " + err)
    }
}

const getTotalListInterviewVideo = (data) => (dispatch) => {
    return dispatch({ type: actionTypes.TOTAL_LIST_INTERVIEW_VIDEO, payload: data })
}
