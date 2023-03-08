import React, { useState } from 'react'
import makeRequest from '../../utils/makeRequest'
import {LOGIN} from '../../constants/apiEndPoints'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        makeRequest(LOGIN, {
            data: {
                username: username,
                password: password
            }
        }).then((res) => {
            localStorage.setItem('token', res.token);
            navigate('/home')
        }).catch((err) => {
            if (err.response.status === 401) {
                alert(err.response.data.message)
            }
            else{
              alert('Something went wrong')
            }
        })
    }
  return (
    <div>
      {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login
