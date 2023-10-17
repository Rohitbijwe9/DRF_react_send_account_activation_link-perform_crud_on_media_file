import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar({isLoggedIn}) {

    console.log(isLoggedIn)
    
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {
            isLoggedIn ? (
                <>
                     
                    <NavLink className="nav-link" to="/add">ADD DATA</NavLink>
                    <NavLink className="nav-link" to="/show">SHOW</NavLink>

        
                    <NavLink className="nav-link" to="logout/">Logout</NavLink>
                   
                    

                </>
            ):(
                <>
                    
                    <NavLink className="nav-link active" aria-current="page" to="login/">Login</NavLink>
                    
                    <NavLink className="navbar-brand" to="signup/">Sign up</NavLink>
                   
                  
                </>
            )

            
        }
        

        
       
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}