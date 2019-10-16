import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import cookie from 'js-cookie'

const API_URL = process.env.API_URL

const getUserProfile = async (access_token, username) => {
    const url = `${API_URL}/v1/user/log/getuser/${username}`
    const res = await fetch(url, {
        headers: { Authorization: 'Bearer ' + access_token }
    })
    const data = await res.json()
    if(data.status == 200 ) {
        return data.data
    } else {
        return data.error
    }
}

export const userLogin = async (token, username) =>  {
    const { access_token, expires_in } = token
    const user = await getUserProfile(access_token, username)
    token.user = user
    
	cookie.set('token', token, { expires: expires_in })
	Router.push('/dashboard');
}

export const userLogout = async () => {
	Router.push('/dashboard');
}
