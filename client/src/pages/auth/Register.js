import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import "../../styles/AuthStyles.css";
import { registerUser } from '../../actions/userAction';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('')
    const [fatherName, setFatherName] = useState('');
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [role, setRole] = useState('user')

    const registerState = useSelector(state => state.registerUserReducer);
    const { loading, success, error } = registerState;
    const dispatch = useDispatch();

    useEffect(() => {
        if (loading) {
            toast.loading('Registering user...');
        } else {
            toast.dismiss();
        }

        if (error) {
            toast.error('Something went wrong when User Register');
        }

        if (success) {
            toast.success('User Registered Successfully');
            // setTimeout(() => {
            //     window.location.href = '/login';
            // }, 4000);
        }
    }, [loading, error, success]);


    const registerHandler = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Password is not match with confirm password')
        } else {
            const user = { name, fatherName, email, dob, password, confirmPassword, phone, address, role };
            dispatch(registerUser(user))
        }
    }
    return (
        <Layout title='Register - Ecommerce App'>
            <div className="form-container">
                <h1>REGISTER USER</h1>
                <form>
                    <div className="mb-3">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" placeholder='Enter Your Name' required />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} className="form-control" id="exampleInputfatherName" placeholder='Enter Your Father Name' required />
                    </div>
                    <div className="mb-3">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email' required />
                    </div>
                    <div className="mb-3">
                        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="form-control" id="exampleInputDob" placeholder='Enter Your Date of Birth' required />
                    </div>
                    <div className="mb-3">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required />
                    </div>
                    <div className="mb-3">
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" id="exampleInputPassword2" placeholder='Re Enter Your Password' required />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone" placeholder='Enter Your Phone' required />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='Enter Your Address' required />
                    </div>
                    <div className="mb-3">
                        <select value={role} onChange={(e) => setRole(e.target.value)} className="form-control" id="exampleInputRole">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="controller">User Controller</option>
                        </select>
                    </div>
                    <div>
                        <div className="mb-3">
                            Please Click Hare For
                            <Link className='mx-4' to={'/login'}>Login</Link>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={registerHandler}>Register</button>
                </form>
            </div>

        </Layout>
    )
}

export default Register