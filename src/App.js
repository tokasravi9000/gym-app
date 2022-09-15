import './App.css';
import React from 'react'
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
      
    </>
  );
}

export default App;
