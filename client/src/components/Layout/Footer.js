import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <h1 className="text-center">All Right Reserved &copy; GP-LACHWAI</h1>
        <hr />
        <p className="text-center mt-3">
          <Link to="/about">About</Link>
          ||
          <Link to="/contact">Contact</Link>
          ||
          <Link to="/Policy">Privacy Policy</Link>
        </p>
    </div>
    </>

  )
}

export default Footer