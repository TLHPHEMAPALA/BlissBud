import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import DashboardImage from './../../Assests/Dashboard.png';
import { auth } from '../../config/firebase';
import Dashboard from '../Dashboard/Dashboard'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Password } from '@mui/icons-material';

export default function Login() {

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const login=async()=>{
        await signInWithEmailAndPassword(auth, email, password).then(res=>{
            console.log('login')
        }).catch(error=>{
            console.log(error)
        })
    }

    
    return (
        <div className='flex items-center justify-center'>
            <div className='px-8 py-8 bg-white border-2 rounded-3xl'>
                <h1 className='mb-3 text-5xl font-semibold'>BlissBud</h1>
                <p className='mb-6 text-lg font-medium text-gray-500'>Welcome back! Please enter your details.</p>
                <div>
                    <label className='mb-2 text-lg font-medium'>User Email</label>
                    <input
                        type='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        className='w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
                        placeholder='Enter Your User Name'
                    />
                </div>
                <div className="mt-4">
                    <label className='mb-2 text-lg font-medium'>Enter Password</label>
                    <input
                        onChange={(e)=>setPassword(e.target.value)}
                        className='w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
                        placeholder='Enter Your Password'
                        type="password"
                    />
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <div>
                        <input
                            type="checkbox"
                            id='checkbox_remember' />
                        <label className="ml-2 font-medium text-violet-500" htmlFor="checkbox_remember">Remember Password</label>
                    </div>
                    <button className='text-base font-medium text-violet-500'>Forgot password</button>
                </div>
                <div className='mt-8 flex justify-center'>
                    <Link to="/dashboard">
                        <button onClick={()=>{login()}} className='bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-700 hover:to-indigo-700 text-white text-lg font-medium px-6 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            Login
                        </button>
                    </Link>
                </div>
                <div className='flex items-center justify-center mt-4'>
                    <p className='mr-2 text-base font-medium'>Don't you have an account?</p>
                   
                    <Link to="/signup">
                        <button className='text-base font-medium'>Sign Up</button>
                    </Link>
                </div>
            </div>
            <div className="hidden md:w-1/2 md:block"> 
                <img src={DashboardImage} alt="Dashboard" /> 
            </div>
        </div>
    );
}
