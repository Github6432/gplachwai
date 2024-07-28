import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { forgetPassword } from '../../actions/userAction';

const ForgetPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const forgetPassworddHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Password is not match with confirm password')
        } else {
            const user = { email, password, dob };
            dispatch(forgetPassword(user));
        }
    }

    return (
        <Layout title='Forget Password - Ecommerce App'>
            <div className="form-container">
                <h1>FORGET PASSWORD</h1>
                <form>
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
                    <div>
                        <div className="mb-3">
                            Please Click Hare For
                            <Link className='mx-1' to={'/register'}>Register</Link>
                            <Link className='mx-1' to={'/login'}>Login</Link>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={forgetPassworddHandler}>Reset Password</button>
                </form>
            </div>

        </Layout>
    )
}

export default ForgetPassword