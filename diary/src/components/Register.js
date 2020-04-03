import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function Register() {

  const [user, setUser] = useState({ username: "", password: "" });

  const history = useHistory();
  const registerURL = "http://localhost:8000/api/authentication/register";

  const handleChange = event => {
      setUser({...user, 
    [event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
      event.preventDefault();
      axios.post(`${registerURL}`, user)
      .then(response => {
          history.push('/login')
      })
      .catch(error => {
          console.log(error);
          alert('Yeah dog, there is an error. Hard Luck.')
      })
    };

  return (
    <div>
      <h1>Registration:</h1>
      <form onSubmit={event => handleSubmit(event)}>

        <label>
          Username:
          <input 
          type="text"
          name="username"
          value={user.username}
          onChange={event => handleChange(event)}
          />
        </label>

        <label>
          Password:
          <input 
             type="text"
             name="password"
             value={user.password}
             onChange={event => handleChange(event)}
          />
        </label>

        <button>Register</button>
      </form>
    </div>
  );
}
