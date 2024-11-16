import React, { useState } from 'react'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
//import api from '../api'
import axios from 'axios'
const Login = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const onfinish = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://backend-data-pearl.vercel.app/api/users/login', values)
            console.log(response.data)

            if (response.data.success) {                
                navigate('/');
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="ln-page">
            <div className="container">
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <form onSubmit={onfinish}>
                    <div className="inputs">
                        <div className="input">
                            <img src={email_icon} alt="Email Icon" />
                            <input type="email" name="email" placeholder="Email Id" onChange={handleInput} />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="Password Icon" />
                            <input type="password" name="password" placeholder="Password" onChange={handleInput} />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login