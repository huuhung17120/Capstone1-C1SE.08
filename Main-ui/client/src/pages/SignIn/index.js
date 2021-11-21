import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink , Link} from 'react-router-dom';
import { useHistory } from 'react-router';
import userApi from "../../api/user";
import store from '../../redux/store'

import './index.css';
import { userSlice } from "../../redux/user";

const SignIn = () => {

    const [errorMessage, setErrorMessage]= useState(null);

    const history = useHistory()

    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const login = () => {
        userApi.login({
            email: state.email,
            password: state.password,
        }).then(res => {
            store.dispatch(userSlice.actions.setUserInfo(res.data))
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            history.push('/home')
        })
    }

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    const onSubmit=(e) =>{
        try{
            e.preventDefault()
        }
        catch(error){
            setErrorMessage()
        }
    } 
    return (
            <div className="SignIn">
            <form onSubmit={onSubmit}>
                <div className="content">
                        <div className="col-2-content">
                            <label className='col-2'>🐈SNPO</label><br />
                            <span>Chúng tôi gắn kết những người nuôi thú cưng <br />trên toàn quốc</span>
                        </div>
                    </div>
                    <div className="signinBx">
                    
                        <label className="col-1" >Đăng Nhập</label> <br />
                        {/* {errorMessage &&(
                            <div className="error-message">{errorMessage}</div>
                        )} */}
                        <span className="title">Email</span>
                        <input
                            value={state.email}
                            type="text"
                            className="form-control"
                            id="text-field"
                            placeholder="Email"
                            name="email"
                            onChange={onChange}
                        />
                        <span className="title">Password</span>
                        <span className="forgot"><Link to="/forgotpass">Forgot your password?</Link></span>
                        <input
                            value={state.password}
                            name="password"
                            type="password"
                            className="form-control"
                            id="text-field"
                            placeholder="Password"
                            onChange={onChange}
                        />
                        <button style={{ marginTop: 6 }} onClick={login} type="submit" className="btn btn-success">LOG IN</button>
                        <br />
                        <span className="title">Not a member?<NavLink to="/signup"> Create Account</NavLink></span>
                      
                    </div>
                    </form >
            </div >
    );

}

export default SignIn;