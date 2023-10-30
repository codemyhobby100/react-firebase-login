import React, { useEffect, useState } from 'react';
import './Profilepage.css'
import {FaTwitter, FaInstagram, FaFacebookF, FaLinkedin} from "react-icons/fa"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Profilepage = ({user}) => {

    const auth = getAuth();
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            console.log('User signed out');
            navigate('/')
          })
          .catch((error) => {
            // An error happened.
            console.error('Sign-out error', error);
          });
      };

      
      const [userData, setUserData] = useState(null);

      useEffect(() => {
        const fetchUserData = async () => {
          const userRef = doc(db, 'users', user.uid);
          const userSnapshot = await getDoc(userRef);
          if (userSnapshot.exists()) {
            setUserData(userSnapshot.data());
          }
        };
    
        fetchUserData();
      }, [user.uid]);

    return(
    <div className="header__wrapper">
      <header></header>
      <div className="cols__container">
        <div className="left__col">
          <div className="img__container">
            <img src="/profile/user.jpeg" alt="Anna Smith" />
            <span></span>
          </div>
          <h2>Sam</h2>

          {userData && (
        <div>
          <p>Email: {userData.email}</p>
        </div>
        )}
          <p>anna@example.com</p>

          <button className='log-out-btn' onClick={handleSignOut}>Logout</button>

          <ul className="about">
            <li><span>4,073</span>Followers</li>
            <li><span>322</span>Following</li>
            <li><span>200,543</span>Attraction</li>
          </ul>

          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
              erat volutpat. Morbi imperdiet, mauris ac auctor dictum, nisl
              ligula egestas nulla.
            </p>

            <ul>
                <li>
                    <FaTwitter />
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaFacebookF/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
          </div>
        </div>
        <div className="right__col">
          <div className="photos">
            <img src="/profile/img_1.avif" alt="" />
            <img src="/profile/img_2.avif" alt="" />
            <img src="/profile/img_3.avif" alt="" />
            <img src="/profile/img_4.avif" alt="" />
            <img src="/profile/img_5.avif" alt="" />
            <img src="/profile/img_6.avif" alt="" />
          </div>
        </div>
      </div>
    </div>
)
}

export default Profilepage