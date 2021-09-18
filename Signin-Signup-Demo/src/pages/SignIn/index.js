import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ForgotPass from "../ForgotPass";
import SignUp from "../SignUp";

import './index.css';

const SignIn = () => {
    return (
        <Router>
            <div className="SignIn">
                <form >
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <div className="col-2-content">
                            <label className='col-2'>🐈SNPO</label><br />
                            <span>Chúng tôi gắn kết những người nuôi thú cưng <br />trên toàn quốc</span>
                        </div>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <label className="col-1" >Sign in here</label> <br />
                        <span className="title">UserName</span>
                        <input
                            type="text"
                            className="form-control"
                            id="text-field"
                            placeholder="..."
                        />
                        <span className="title">Password</span>
                        <span className="forgot"><Link to="/forgotpass">Forgot your password?</Link></span>
                        <input
                            type="password"
                            className="form-control"
                            id="text-field"
                            placeholder="..."
                        />
                        <button style={{ marginTop: 6 }} type="submit" className="btn btn-success">LOG IN</button>
                        <br />
                        <span className="title">Not a member?<Link to="/signup"> Create Account</Link></span>
                    </div>
                </form >
                


            </div >
        </Router>



    );

}

export default SignIn;