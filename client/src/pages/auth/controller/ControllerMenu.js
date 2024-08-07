import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const ControllerMenu = () => {
  return (
    <>
    <div className="text-center">
        <div className="list-group">
            <h4><Link to="/controller/dashboard" className="list-group-item list-group-item-action">Controller Penal</Link></h4>
            <NavLink to="/controller/getallusers" className="list-group-item list-group-item-action">All User</NavLink>
            <NavLink to="/handpump" className="list-group-item list-group-item-action">Hand Pump</NavLink>
            {/* <NavLink to="/controller/dashboard/all-orders" className="list-group-item list-group-item-action">Orders</NavLink> */}
            {/* <NavLink to="/controller/dashboard/users" className="list-group-item list-group-item-action">Users</NavLink> */}
        </div>
    </div>
    </>
  )
}

export default ControllerMenu