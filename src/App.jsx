import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Foot from './components/Foot';
import Navbar from './components/Navbar';
import Club from './Pages/Club';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import GDSC from './Society/GDSC';

import Landing from './Pages/Landing';

import { ThemeProvider } from '@mui/material/styles'
import { PrimaryTheme } from './themes/PrimaryTheme'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={PrimaryTheme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/club/gdsc" element={<GDSC />} exact />
          <Route path="/sign" element={<Signup />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/club" element={<Club />} exact />
        </Routes>
        <Foot />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
