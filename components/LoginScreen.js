import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalStoreContext } from '../store'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';



const LoginScreen = () => {
    const { store } = useContext(GlobalStoreContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log("username: " + formData.get("username") + " and password: " + formData.get('password'));
        store.setUsername(formData.get("username"));
        store.setPassword(formData.get("password"));
        // ? do you want to actually authenticate the form data (username, password)
        // global store reducer to detect being logged in
        store.setIsLoggedIn(true);
        // Navigate to dashboard page
        navigate('/Dashboard')
    }
    
    return (
    <Grid container component="main" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{display: 'flex', alignItems: 'center'}}>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'transparent' }}>
                        <img
                            src="https://logodownload.org/wp-content/uploads/2018/04/att-logo-1.png"
                            alt="AT&T Logo"
                            style={{ width: '50px', height: '50px' }}
                        />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username/ATTUID"
                            name="username"
                            autoComplete="current-username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
export default LoginScreen;