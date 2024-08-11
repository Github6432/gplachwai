import React, { useEffect, useState } from 'react'
import { GiVillage } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { logoutUser } from '../../actions/userAction';
import { getOfficeStatus, officeStatusUpdate } from '../../actions/visitorAction';

const Header = () => {
    const dispatch = useDispatch('');
    const [status, setStatus] = useState();

    const loginState = useSelector(state => state.loginUserReducer);
    const { currentUser } = loginState;
    const officeState = useSelector(state => state.getOfficeStatusReducer);
    const { officeStatus } = officeState;

    useEffect(() => {
        dispatch(getOfficeStatus());
    }, [dispatch]);

    const toggleStatus = () => {
        if (!currentUser || currentUser.user.role !== 'controller') {
            return;
        }
        dispatch(officeStatusUpdate()).then(() => {
            dispatch(getOfficeStatus());
        });
    };
    return (
        <>
            <nav className="mx-3 navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand"><h3> <GiVillage /> GP LACHWAI</h3></Link>
                    <p style={{ marginTop: '5px', paddingTop: '10px', fontSize: '11px', color: 'red' }} onClick={toggleStatus}>
                    { officeStatus }
                    </p>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse mx-5 px-5" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link">Home</NavLink>
                            </li>
                            {
                                currentUser ?
                                    (
                                        <>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"  >{currentUser.user.name}</Link>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link className='dropdown-item' to={`/${currentUser.user.role}/dashboard`}>Dashboard</Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/visitor' className="dropdown-item">Visit Purpose</Link>
                                                    </li>
                                                    <li>
                                                        <Link className='dropdown-item' onClick={() => { dispatch(logoutUser()) }} >Logout</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"  >Register</Link>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link className='dropdown-item' to={`register`}>Register</Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/login' className="dropdown-item">Login</Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/visitor' className="dropdown-item">Visit Purpose</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </>
                                    )
                            }
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">Scheme</Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className='dropdown-item' to={'/ayusmancard'}>Ayushman Card</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' to={'/pmvishvkarma'}>PM Vishvkarma</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' to={'/pention'}>Pentioan</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' to={'/certificate'}>Jansewa Kendra</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">List</Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className='dropdown-item' to={'/notification'}>Notification</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' to={'/handpumpreport'}>Hand Pump</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' to={'/handpumplist'}>Ration Card</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' to={'/meatinglist'}>Meating</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' to={'/ayushmancardlist'}>Ayusman Card</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Header