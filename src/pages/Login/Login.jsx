import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://test-ecommerce-gamma.vercel.app/auth', {
                login: userName,
                password: password
            });
            if (response.data.token) {
                localStorage.setItem('auth-token', response.data.token);
                navigate('/');
            }
        } catch (error) {
            alert("Wrong login or password");
            console.log("Error: ", error);
        }
    };

    return (
        <div className='w-screen h-screen bg-teal-300 flex items-center justify-center'>
            <div className='bg-white p-6 mb-4 shadow-xl flex flex-col items-center justify-center'>
                <div>
                    <h1 className='text-3xl font-bold'>Login</h1>
                </div>
                <div className='mt-4 space-x-1'>
                    <label htmlFor="username">UserName</label>
                    <input
                        type="text"
                        id="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="border border-gray-400 p-1 outline-none"
                    />
                </div>
                <div className='mt-4 space-x-3'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-400 p-1 outline-none"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className='w-[100px] h-10 mt-4 bg-blue-500 text-white p-2 rounded-lg'
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
