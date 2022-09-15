import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
    return (
        <div>
            <Stack direction="row" spacing={2} className="navbar" justifyContent="space-around" sx={{gap:{sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none'}} px="20px">
                <Link to="/" className="brand">
                    <img src={Logo} alt="Logo" width="48" height="48" />
                </Link>
                <Stack className="nav" direction="row" gap="40px" fontSize="24px" alignItems="flex-end" >
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <a href="#exercises" className="nav-link">Exercises</a>
                </Stack>
            </Stack>
        </div>
    )
}

export default Navbar
