import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Handle login form submission
    };

    const signUpClicked = () => {
        navigate("/signup");
    }

    return (
        <div id={styles.loginBody}>
            <div className={styles.greenLayer1}>
                <div id={styles.loginFormDiv}>
                    <p>Welcome back! Please login to your account</p>
                    <form onSubmit={handleSubmit} className="col-6">
                        <div className='form-floating mt-3 col-12 mx-2'>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            className="form-control"
                            />
                            <label htmlFor="email" >Email</label>
                        </div>

                        <div className='form-floating mt-4 col-12 mx-2'>
                            <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="form-control"
                            required
                            placeholder="password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className='d-flex mx-2 mt-5 justify-content-between'>
                            <button className='col-6' id={styles.loginBtn} type="submit">Login</button>
                            <button className={["col-6", styles.signUpBtn].join(" ")} onClick={signUpClicked} >Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
