import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login(){

    const [user, setUser ] = useState({
        username: '',
        password: '',
    });

    const history = useHistory();
    const loginURL = 'http://localhost:8000/api/authentication/login';

    const handleChange = event => {
        setUser({...user,
        [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`${loginURL}`, user)
        .then(response => {
            debugger
            console.log(response);
            localStorage.setItem('token', response.data.token)
            history.push('/diaryEntry')
        })
        .catch(error => {
            alert('Yeah dog, there has been a problem my friend. Sorry.')
        })
    }; 

    return(
        <div><h1>Login:</h1>
            <form onSubmit={event => handleSubmit(event)}>
                <label>Username:
                    <input 
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={event => handleChange(event)}
                    />
                </label>

                <label>Password:
                    <input
                    type="text"
                    name="password"
                    value={user.password}
                    onChange={event => handleChange(event)}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}