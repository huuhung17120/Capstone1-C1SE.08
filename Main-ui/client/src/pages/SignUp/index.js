import { Checkbox } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import React, { useState } from "react";
import userApi from "../../api/user";

const SignUp = () => {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
    
    });
    const register = () => {
        userApi.register({
            username: state.username,
            email: state.email,
            password: state.password
           
        })
    }

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name);
        console.log(value);
        setState(prev => ({
            ...prev,
            [name]: value,

        }))
    }

    return (
        <Router>
            <div className="SignIn">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <div className="col-2-content">
                            <label className='col-2'>🐈SNPO</label><br />
                            <span>Chúng tôi gắn kết những người nuôi thú cưng <br />trên toàn quốc</span>
                        </div>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <label className="col-1" >Sign Up</label> <br />
                        <span className="title">UserName</span>
                        <input
                            type="text"
                            className="form-control"
                            id="text-field"
                            placeholder="UserName"
                            onChange={onChange}
                            value={state.username}
                            name="username"
                        />
                         <span className="title">Email</span>
                        <input
                            type="text"
                            className="form-control"
                            id="text-field"
                            placeholder="Email"
                            onChange={onChange}
                            value={state.email}
                            name="email"
                        />
                        <span className="title">Password</span>

                        <input
                          name="password"
                        value={state.password}
                            type="password"
                            className="form-control"
                            id="text-field"
                            placeholder="Password"
                            onChange={onChange}
                        />
                        {/* <span className="title">Gender</span>

                        <input
                            type="gender"
                            className="form-control"
                            id="text-field"
                            placeholder="Gender"
                            onChange={onChange}
                            value={state.gender}
                            name="gender"
                        /> */}
                        <label style={{ float: "left", marginTop: 10 }}>
                            <input
                                type="checkbox"
                            />
                            <label style={{ marginLeft: 10 }}>Tôi đồng ý với điều khoản</label>
                        </label>
                        <br />
                        <button style={{ marginTop: 6 }} type="submit" onClick={register} className="btn btn-success">CREATE ACCOUNT</button>
                        <br />
                    </div>
                </form >



            </div >
        </Router>



    );

}

export default SignUp;