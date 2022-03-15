import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navba from './components/Navba';
import Club from './Pages/Club';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import GDSC from './Society/GDSC';

import Landing from './Pages/Landing';

function App() {

  return (
    <BrowserRouter>
      <Navba />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} exact />
        </Routes>

        <Routes >
          <Route path="/" element={<Home />} exact />
      <Route path="/club/gdsc" element={<GDSC />} exact/>
          <Route path="/sign" element={<Signup />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/club" element={<Club />} exact />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
