

//packages
import { Link } from 'react-router-dom';

//icons
import { FaRegEye,FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

//action
import { ShowModalFun } from '../../features/variableSlice';

//hook
import { useAppDispatch } from '../../app/hook';

//css
import "../../css/Register.css";
import { FormEvent, useState } from 'react';

import { api } from '../../utili/axiosConfig';


const Register = () => {

    const dispatch = useAppDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setphone] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistration = async (e : FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.post("/users/register-process", { name, email, phone, password });
            alert(res.data.message);
        } catch (error: any) {
            console.log(
                error.response.data
            );

        }
    }

    
    return (
        <>
            <div id="register">
                <div className="register-content">
               
                <form onSubmit={handleRegistration} className="register-form" >

                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input-field "
                            id="exampleInputName"
                            placeholder="Enter your Name"
                            autoComplete="none"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field "
                            id="exampleInputEmail1"
                            placeholder="Enter your email"
                            autoComplete="none"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Phone Number</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                            className="input-field "
                            id="exampleInputPhone"
                            placeholder="Enter your Phone"
                            autoComplete="none"
                            required
                        />
                    </div>



                    <div className="form-group" id="password">
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                            id="exampleInputPassword1"
                            placeholder="Enter your password"
                            autoComplete="none"
                            required
                        />
                        <button type="button" className="hide-show-password"  ><FaRegEye /> </button>
                    </div>


                    <button type="submit" className="sign-up-btn">
                        Create Account
                    </button>

                    <div className="or">
                        <div className="line"></div>
                       <div className="text"><span>or</span></div>
                    </div>
 
                    <div className="facebook-signin-option">
                        <div className="facebook-signin-icon">
                            <FaFacebook className="facebook-icon" />
                        </div>
                        <span>Sign in with Facebook</span>
                    </div>

                    <div className="google-signin-option">
                        <div className="google-signin-icon">
                            <FcGoogle className="google-icon" />
                        </div>
                        <span className="google-signup-title">Sign in with Google</span>
                    </div>

                    <p className="mt-4 fw-semibold">
                        have an account?&nbsp;
                        <Link to="/fashion-shop/" onClick={()=>dispatch(ShowModalFun())} >Login</Link>
                    </p>
                </form>
                </div>


            </div>
        </>

    )
}

export default Register