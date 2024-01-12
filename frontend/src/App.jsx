
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Landing from './pages/Landing'
import Home from './pages/Home'
import './App.css'
import { SignOutButton, SignInButton, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react"
import Login from './pages/Login'
import { useState, useContext, createContext } from 'react';


export const UserContext = createContext();


function App() {

  const [userid, setUserid] = useState(null);
  const [matches, setMatches] = useState(null);
  const [possibleMatches, setPossibleMatches] = useState(null);
  

  return (
    <UserContext.Provider value={[ userid, setUserid, matches, setMatches, possibleMatches, setPossibleMatches ]}>
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
      </UserContext.Provider>
  )
}

export default App
