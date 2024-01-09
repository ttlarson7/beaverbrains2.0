import { Link } from "react-router-dom"


export default function LandingNav() {

  return (
    <div className="sticky top-0 z-50">
      <div className="flex w-full h-16 bg-primary glass items-center justify-between">
        <h1 className="ml-5 text-tertiary">Beaver Brains</h1>
        <Link to="/login" >Sign In</Link>
      </div>
    </div>
  )
}