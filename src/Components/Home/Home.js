import React from 'react';
import NavBar from '../NavBar/NavBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dashboard from '../../images/data.png';
import Code from '../../images/code.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Home = () => {
    
        return (
            <div>
                <NavBar />
                <Typography>
                    <Grid container >
                        <Grid item={6} style={{ "paddingRight": "50px" }}>
                            <Card sx={{ maxWidth: 345 }} style={{ "marginTop": "20px" }}>
                                <CardMedia
                                    component="img"
                                    alt="image"
                                    height="140"
                                    image={Dashboard}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        COVID-19 Dashboards
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Interactive board designed to display Romania pandemic data.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item={6}>
                            <Card sx={{ maxWidth: 345 }} style={{ "marginTop": "20px" }}>
                                <CardMedia
                                    component="img"
                                    alt="image"
                                    height="140"
                                    image={Code}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        COVID-19 Dashboards
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        The Data Engine provides
                                        access to many cleansed data sources collected into one place.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>

                </Typography>
            </div>
        );
    
}

