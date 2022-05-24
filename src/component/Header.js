import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>Bus </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" to='/'>Add Bus </Link>
                    <Link className="nav-link active" to='/search'>Search Bus</Link>
                    <Link className="nav-link active" to='/view'>View all Bus</Link>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header