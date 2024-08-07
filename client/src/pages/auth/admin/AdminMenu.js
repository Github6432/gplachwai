import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const AdminMenu = () => {
    return (
        <>
        <div className="text-center">
            <div className="list-group">
                <h4><Link to="/admin/dashboard" className="list-group-item list-group-item-action">Admin Penal</Link></h4>
                <NavLink to="/admin/getallusers/" className="list-group-item list-group-item-action">All Users</NavLink>
                <NavLink to="/handpumpreport" className="list-group-item list-group-item-action">Hand Pump Report</NavLink>
                <NavLink to="/admin/handpump" className="list-group-item list-group-item-action">Hand Pump Form</NavLink>
                {/* <NavLink to="/admin/dashboard/all-orders" className="list-group-item list-group-item-action">Orders</NavLink> */}
                {/* <NavLink to="/admin/dashboard/users" className="list-group-item list-group-item-action">Users</NavLink> */}
            </div>
        </div>
        </>
    )
}

export default AdminMenu