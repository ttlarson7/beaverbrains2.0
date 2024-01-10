import { Link } from "react-router-dom"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"


export default function LandingNav() {

  return (
    <div className="sticky top-0 z-50">
      <div className="flex w-full h-16 bg-primary glass items-center justify-between">
        <h1 className="ml-5 text-tertiary">Beaver Brains</h1>

        <div className="mr-5"><SignedOut><Link to="/login" className="mr-5">Sign In</Link></SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn></div>
        
        
        {/* <SignInButton></SignInButton> */}
      </div>
    </div>
  )
}