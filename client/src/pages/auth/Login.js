import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../actions/userAction';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const loginState = useSelector(state => state.loginUserReducer);
    const { loading, success, error, currentUser } = loginState;

    useEffect(() => {
        if (loading) {
            toast.loading('Loging user...');
        } else {
            toast.dismiss();
        }

        if (error) {
            toast.error(error.message);
        }

        if (success) {
            toast.success(currentUser.message);
        }
    }, [loading, error, success, currentUser]);


  const loginHandler = (e) => {
        e.preventDefault();
        const user = { email, password };
        dispatch(loginUser(user));
        setTimeout(() => {
            window.location.href = '/';
        }, 3000);
    }
    return (
        <Layout title='Login - Ecommerce App'>
            <Container className="form-container">
                <Form >
                    <h1>Login</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={loginHandler}>Submit</Button>
                    <div>
                        <Link className='mx-4' to={'/register'}>Register</Link>
                        <Link className='mx-4' to={'/forgetpassword'}>Forget Password</Link>
                    </div>
                </Form>
            </Container>
        </Layout>
    )
}

export default Login