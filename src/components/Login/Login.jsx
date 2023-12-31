/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState, Component } from 'react';
import './Login.css';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import {BiSolidLockAlt} from 'react-icons/bi';
// import {FaUser} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc';
import { auth, db, provider } from "../../firebase"
import { doc, setDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import profilepage from '../Profile/Profilepage';

const login = () => {

    const [email, setEmail] = useState('');
    const [paassword, setPassword] = useState('');
    const navigate = useNavigate()
    // const [name, setName] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, paassword)
        .then((userCredential) => {
            console.log("success")
            navigate('/profilepage')
        }).catch((error) => {
            console.log(error.message);
        })
    }

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, paassword)
        .then((userCredential) => {
            console.log(userCredential)
            navigate('/profilepage')
        }).catch((error) => {
            console.log(error);
        })
    }
    
    const handleClick = (e)=>{
        e.preventDefault();
        signInWithPopup(auth,provider).then((data) => {
            const credential = GoogleAuthProvider.credentialFromResult(data);
            // The signed-in user info.
            const user = data.user  

            if (user) {
                const userRef = doc(db, 'users', user.uid);
                await setDoc(userRef, {
                  email: user.email,
                });
              }
            console.log(credential) 
            console.log(user) 
            navigate('/profilepage')
           
        })
    }

  return (
    <div className="wrapper">
        <div className="contact-container">
            <input type="checkbox" id="flip" />
            <div className="cover">
            <div className="front">
                <img src="/login/frontImg.jpg" alt="" />
                <div className="text">
                <span className="text-1">Every new friend is a new adventure</span>
                <span className="text-2">Let's get connected</span>
                </div>
            </div>
            <div className="back">
                <img className="backImg" src="/login/backImg.jpg" alt="" />
                <div className="text">
                <span className="text-1">Complete miles of journey with one step</span>
                <span className="text-2">Let's get started</span>
                </div>
            </div>
            </div>
            <div className="forms">
            <div className="form-content">
                <div className="login-form">
                <div className="contact-title">Login</div>
                <form onSubmit={signIn}>
                    <div className="input-boxes">
                    <div className="input-box">
                        {/* <i className="fas fa-envelope"></i> */}
                        <BsFillEnvelopeFill className='login-icon'/>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-box">
                        {/* <i className="fas fa-lock"></i> */}
                        <BiSolidLockAlt className='login-icon'/>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            value={paassword} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="text">
                        <a href="#" className='link'>Forgot password?</a>
                        {/* <p className='point' onClick={handleSignIn}>google signin</p> */}
                    </div>
                    <div className="google-btn">                  
                        <button onClick={handleClick} className='google-signin'> 
                            <FcGoogle className='g-icon'/> Google Signin
                        </button> 
                    </div>
                    <div className="button input-box">
                        <button onClick={signUp} type="submit" className='btn' value="Submit">SUBMIT</button>
                    </div>
                    <div className="text sign-up-text">
                        Don't have an account? <label className='link' htmlFor="flip">Sign up now</label>
                    </div>
                    </div>
                </form>
                </div>
                <div className="signup-form">
                <div className="contact-title">Signup</div>
                <form onSubmit={signUp}>
                    <div className="input-boxes">
                    <div className="input-box">
                        <BsFillEnvelopeFill className='login-icon'/>
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className="input-box">
                        <BiSolidLockAlt className='login-icon'/>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            value={paassword}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <div className="button input-box">
                        <button onClick={signUp} type="submit" className='btn' value="Submit">SUBMIT</button>
                    </div>
                    <div className="text sign-up-text">
                        Already have an account? <label htmlFor="flip">Login now</label>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>
    
  )
}

export default login