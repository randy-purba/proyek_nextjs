import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { actionTypes } from '../../components/types'

const API_URL = process.env.API_URL
const CLIENT_ID = process.env.API_CLIENT_ID
const CLIENT_SECRET = process.env.API_CLIENT_SECRET

const token = cookie.get('token')

const getUserProfile = async (access_token) => {
    const url = `${API_URL}/v1/user/profile`
    const res = await fetch(url, {
        headers: { Authorization: 'Bearer ' + access_token }
    })
    const data = await res.json()
    return data.object
}

export const userLogin = async (token) =>  {
    const { access_token } = token
    // const access_token = JSON.parse(token).access_token
    const user = await getUserProfile(token.access_token)
    
	token.user = user
	cookie.set('token', token, { expires: 1 });
	Router.push('/dashboard');
}

export const userLogout = async () => {
	Router.push('/dashboard');
}
