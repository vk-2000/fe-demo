export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
export const AUTH_URL = process.env.REACT_APP_AUTH_URL

export const LOGIN = {
    url: `${AUTH_URL}/auth/login`,
    method: 'POST',
}
export const GET_ALL_SESSIONS = {
    url: `${BACKEND_URL}/sessions`,
    method: 'GET',
}