import React, { useState } from 'react'
import '../Login.css'
import desk from '../images/desk.jpeg'
import mobi from '../images/mobi.jpeg'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function Signup() {

    const [phoneNo, setPhoneNo] = useState("+91")
    const handlePhoneNo = (e) => {
        setPhoneNo(e.target.value)
    }

    const screenWidth = window.screen.width;
    console.log(screenWidth);
    const styleImg = screenWidth > 670 ? {
        backgroundImage: `url(${desk})`,
    } : {
        backgroundImage: `url(${mobi})`,
    }
    return (
        <div className="display">
            <div className="container">
                <div className="left">
                    <div className="left_cont">
                        <div className="head">Order today from India's largest and most rapidly growing ecommerce website .</div>
                        <div className="info_cont">
                            {/* <div className="info">
                               Order now and get upto 50% off on every product.
                            </div>
                            <div className="info">
                                Get amazing offers and cashback for referring others.
                            </div> */}
                        </div>
                    </div>
                    <div className="toggle_button">
                        <div id="t1"></div>
                        <div id="t2"></div>
                    </div>
                </div>
                <div className="right"
                    style={styleImg}
                >
                    <div className="center">
                        <div className="center_cont">
                            <div className="center_head">
                                Good to see you!
                            </div>
                            <div className="center_info">Already a member 😎 <span><Link to="/">SignIn now</Link></span>...</div>
                            <span className="cenetr_label">First Name<input type="text" className="center_input" /></span>
                            <span className="cenetr_label">Last Name<input type="email" className="center_input" /></span>
                            <span className="cenetr_label">Email<input type="email" className="center_input" /></span>
                            <span className="cenetr_label">Address<input type="email" className="center_input" /></span>
                            <span className="cenetr_label">Mobile no.<input type="text" onChange={handlePhoneNo} value={phoneNo} className="center_input" /></span>
                
                            <button className="center_button">Sign Up</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup;
