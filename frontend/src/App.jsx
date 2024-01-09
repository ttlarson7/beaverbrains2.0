import { useState } from 'react'
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Landing from './pages/Landing'
import Home from './pages/Home'
import './App.css'
import { SignOutButton, SignInButton, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react"
import Login from './pages/Login'


const ClerkRoutes = () => {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SingIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
  
}



function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
            path="/home"
            element={
              <>
                <SignedIn>
                  <Home />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
      </Routes>
    </>
  )
}

export default App
