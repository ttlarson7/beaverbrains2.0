import { Link } from "react-router-dom"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { FaHome } from "react-icons/fa"
import { useState } from "react"

export default function LandingNav({ page }) {

  if (page === 1) {
    return (
      <div className="sticky top-0 z-50">
    <div className="flex w-full h-16 bg-primary glass items-center justify-between">
      <button className="btn btn-active btn-ghost ml-5 text-tertiary">Beaver Brains</button>
      <SignedIn>
        <div>
          <Link to="/home" className="btn btn-active btn-secondary">Get Started</Link>
        </div>
      </SignedIn>

      <div className="mr-5">
        <SignedOut>
        <Link to="/login" className="btn btn-outline btn-warning text-white mr-5">Sign In</Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn></div>
    </div>
  </div>
)
  }

  const [showMenu, setShowMenu] = useState(false)
  
  const hover = () => {
    setShowMenu(!showMenu)
  }
  
  
  if (page === 2) {
    return (
      <div className="sticky left-0 z-50" >
        <div className={`${showMenu ? 'w-48 transition-all duration-500 ease-in-out' : 'w-16 transition-all duration-500 ease-in-out'} flex h-screen bg-primary glass flex-col items-center`} onMouseEnter={hover} onMouseLeave={hover}>
        <div className="mt-5">
        <SignedIn>
          <UserButton />
            </SignedIn></div>
          <Link to="/" className={`btn btn-active btn-ghost text-tertiary mt-5 ${showMenu ? 'rounded' : 'rounded-full'}`}>{showMenu ? 'Home' : <FaHome />}</Link>
          
      </div>
      
      </div>
    )
  }
    
}