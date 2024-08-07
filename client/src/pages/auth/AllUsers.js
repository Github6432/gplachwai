import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { Col, Row, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import AdminMenu from './admin/AdminMenu'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser, getAllUser } from '../../actions/userAction'
import toast from 'react-hot-toast'

const AllUsers = () => {
    const dispatch = useDispatch();
    const allUserState = useSelector(state => state.getAllUsersReducer);
    const { loading, success, error, users } = allUserState;

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])
    useEffect(() => {
        if (loading) {
            toast.loading('Finding user...');
        } else {
            toast.dismiss();
        }

        if (error) {
            toast.error(error.message);
        }

        if (success) {
            toast.success('All User Find Successfully');
        }
    }, [loading, error, success, users]);


    return (
        <Layout>
            <h1>All user</h1>
            <Row>
                <Col md={3}>
                    <AdminMenu />
                </Col>
                <Col md={9}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>User Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {success && users && Array.isArray(users) &&
                                users.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <AiFillEdit style={{ color: "blue", cursor: "pointer" }} onClick={() => { dispatch(editUser(user)); }} />
                                            &nbsp; &nbsp; &nbsp;
                                            {user.role}
                                        </td>
                                        <td>
                                            <AiFillDelete style={{ color: "red", cursor: "pointer" }} onClick={() => { dispatch(deleteUser(user._id)); }} />
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Layout>
    )
}

export default AllUsers