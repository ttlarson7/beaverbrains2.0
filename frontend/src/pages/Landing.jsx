import React from 'react';
import LandingNav from './components/Navbars/LandingNav';
export default function Landing() {
    return ( 
        <div>
            <LandingNav />
            <div className="flex justify-center">
                
            <h1 class="animate-text bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent text-5xl font-black">
                    Hello World</h1>
            </div>    
        </div>
    )
}
