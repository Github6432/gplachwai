import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getNotification } from '../actions/notificationActions';
import { Col, Container, Row, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';

const NotificationPage = () => {
    const dispatch = useDispatch();

    const notificationState = useSelector(state => state.getNotificationReducer);
    const { loading, error, success, notifications } = notificationState;
    useEffect(() => {
        dispatch(getNotification())
    }, [dispatch])

    useEffect(() => {
        if (loading) {
            toast.loading('Load Notification ...');
        } else {
            toast.dismiss();
        }

        if (error) {
            toast.error(error);
        }

        if (success) {
            toast.success('All Notificaton is Showing');
        }
    }, [loading, error, success]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
    }


    return (
        <Layout title='Notification - GP Lachwai'>
            <Container className="form-container">
                <div >
                    <Row className='ml-5'>
                        <Col md={9} className="mx-auto text-center">
                            <h1>Handpump List</h1>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Village</th>
                                        <th>Information / Notice</th>
                                        <th>Advisory issued Office</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {success && notifications && Array.isArray(notifications) &&
                                        notifications.map((notification, i) => (
                                            <tr key={notification._id}>
                                                <td>{i + 1}</td>
                                                <td>{notification.villageName}</td>
                                                <td>
                                                    <div className="text-left">{notification.notificationMessage}</div>
                                                    <div className='text-left'>
                                                        <p className='px-1' style={{ color: 'red', fontWeight: 'bold' }}>Date: {formatDate(notification.createdAt)}</p>
                                                    </div>
                                                </td>
                                                <td>{notification.Remark}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Layout>
    );
};

export default NotificationPage;
