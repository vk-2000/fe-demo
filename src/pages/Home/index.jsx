import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GET_ALL_SESSIONS } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

const Home = () => {
    const [sessions, setSessions] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if(!token) {
            navigate('/login')
        }
        makeRequest(GET_ALL_SESSIONS, {
            headers: {
                authorization: token
            }
        }, navigate).then((res) => {
            setSessions(res)
        }).catch((err) => {
            if(err.response.status === 401) {
                navigate('/login')
            }
        })
    }, [])

  return (
    <div>
    {sessions.map((session) => {
        return (
            <div>
                <h1>{session.name}</h1>
                <p>{session.description}</p>
            </div>
        )
    })}
    </div>
  )
}

export default Home
