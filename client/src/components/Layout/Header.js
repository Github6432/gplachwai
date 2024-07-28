import React from 'react'
import { GiVillage } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { logoutUser } from '../../actions/userAction';

const Header = () => {
    const dispatch = useDispatch();

    const loginState = useSelector(state => state.loginUserReducer);
    const { currentUser } = loginState;

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to='/' className="navbar-brand"><h3> <GiVillage /> GP LACHWAI</h3></Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link">Home</NavLink>
                            </li>
                            {
                                currentUser ?
                                    (
                                        <>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown"  >{currentUser.user.name}</Link>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link className='dropdown-item' to={'/dashboard'}>Dashboard</Link>
                                                    </li>
                                                    <li>
                                                        <Link className='dropdown-item' onClick={() => { dispatch(logoutUser()) }} >Logout</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="nav-item">
                                                <NavLink to='/login' className="nav-link">Login</NavLink>
                                            </li>
                                        </>
                                    )
                            }
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown">Scheme</Link>
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
                                <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown">List</Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className='dropdown-item' to={'/handpumplist'}>Ration Card</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' to={'/pmvishvkarmalist'}>Hand Pump</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' to={'/meatinglist'}>Meating</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' to={'/ayushmancardlist'}>Ayusman Card</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/notification' className="nav-link">Notification</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Header