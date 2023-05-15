import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Grid from '@mui/material/Grid';
import '../Contact/Contact.css';
import Covid_vaccine from '../../images/covid_vaccine.jpg';
import Covid_background from '../../images/001c0614-1600.png';
const styles = {
    paperContainer: {
        backgroundImage: `url(${Covid_background})`,
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
};
export const Contact=()=>{
    
        return (
            <div style={styles.paperContainer}>
                <NavBar />
                <Grid container >
                    <Grid item xs={6}>

                        <div className="contactpage_main">
                            <div className="contactpage__contactus">
                                <div class="contact_us">Contact us</div>
                                <input className="contactpage__text" type="text" placeholder="First Name" />
                                <input className="contactpage__text" type="text" placeholder="Last Name" />
                                <input className="contactpage__text" type="text" placeholder="Email" />
                                <input className="contactpage_message" type="text" />
                                <button className="contactpage__button">Send</button>
                            </div>
                        </div>


                    </Grid>
                    <Grid item xs={6}>
                        {/* <img src={Covid_vaccine} width="600px" style={{ "paddingTop": "70px" }} /> */}
                    </Grid>

                </Grid>

            </div>
        );
    
}