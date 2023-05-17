import React from 'react';
import '../LoginPage/LoginPage.css';
import Grid from "@mui/material/Grid";
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';

export const LoginPage = () => {
    
        return (
            <div className="background-image">
                <Grid container>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4} className="grid1">
                        <div className="loginpage__main">
                            <div>
                                <div className="loginpage_submain">
                                    <img className="loginpage__logo" src={logo} width="100px" alt="logo"/>
                                    <div className="loginPage__signin">
                                        <input className="loginpage__text" type="text" placeholder="Phone number,email or username" />
                                        <input className="loginpage__text" type="password" placeholder="Password" />
                                        <button className="login__button">Sign In</button>
                                        <p className="signup">
                                        Don't have an account? <Link to="/register">Sign up</Link>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} className="grid2">
                    </Grid>
                </Grid>

            </div>
        );

}
