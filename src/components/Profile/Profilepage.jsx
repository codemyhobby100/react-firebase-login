import React from 'react';
import './Profilepage.css';
import {FaTwitter} from "react-icons/fa"

const Profilepage = () => (
    <div>
        <div>
            <div className="cols__container">
                <div className="left__col">
                    <div className="img__container">
                        <img src="img/user.jpeg" alt="Anna Smith" />
                        <span></span>
                    </div>
                    <h2>Anna Smith</h2>
                    <p>UX/UI Designer</p>
                    <p>anna@example.com</p>

                    <ul className="about">
                        <li>
                            <span>4,073</span>Followers
                        </li>
                        <li>
                            <span>322</span>Following
                        </li>
                        <li>
                            <span>200,543</span>Attraction
                        </li>
                    </ul>

                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aliquam erat volutpat. Morbi imperdiet, mauris ac auctor dictum,
                            nisl ligula egestas nulla.
                        </p>

                        <ul>
                            <li>
                                {/* <i className="fab fa-twitter"></i> */}
                                <FaTwitter />
                            </li>
                            <li>
                                {/* <i className="fab fa-pinterest"></i> */}
                            </li>
                            <li>
                                {/* <i className="fab fa-facebook"></i> */}
                            </li>
                            <li>
                                {/* <i className="fab fa-dribbble"></i> */}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right__col">
                    <nav>
                        <ul>
                            <li>
                                <a href="">photos</a>
                            </li>
                            <li>
                                <a href="">galleries</a>
                            </li>
                            <li>
                                <a href="">groups</a>
                            </li>
                            <li>
                                <a href="">about</a>
                            </li>
                        </ul>
                        <button>Follow</button>
                    </nav>

                    <div className="photos">
                        <img src="img/img_1.avif" alt="Photo" />
                        <img src="img/img_2.avif" alt="Photo" />
                        <img src="img/img_3.avif" alt="Photo" />
                        <img src="img/img_4.avif" alt="Photo" />
                        <img src="img/img_5.avif" alt="Photo" />
                        <img src="img/img_6.avif" alt="Photo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Profilepage