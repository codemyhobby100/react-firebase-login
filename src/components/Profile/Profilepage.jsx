import React from 'react';
import './Profilepage.css'
import {FaTwitter, FaInstagram, FaFacebookF, FaLinkedin} from "react-icons/fa"

const Profilepage = () => (

    <div className="header__wrapper">
      <header></header>
      <div className="cols__container">
        <div className="left__col">
          <div className="img__container">
            <img src="/profile/user.jpeg" alt="Anna Smith" />
            <span></span>
          </div>
          <h2>Anna Smith</h2>
          <p>UX/UI Designer</p>
          <p>anna@example.com</p>

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

export default Profilepage