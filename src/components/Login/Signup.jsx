import React from 'react'
import './Login.css';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import {BiSolidLockAlt} from 'react-icons/bi';
// import {FaUser} from 'react-icons/fa'
import { auth, provider } from "../../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import profilepage from '../Profile/Profilepage';
import Login from '../Login/Login'


const Signup = () => {

    const [email, setEmail] = useState('');
    const [paassword, setPassword] = useState('');
    const navigate = useNavigate()
    // const [name, setName] = useState('');

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
                            Already have an account? <label htmlFor="flip"> <Link to="/login">Login now</Link> </label>
                        </div>
                        </div>
                    </form>

                    <Switch>
                        <Route path="/Login" component={Login} />
                    </Switch>

                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Signup