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
                    <Row className=''>
                        <Col md={9} className="mx-auto text-center">
                            <h1>Notification</h1>
                            <div className="table-responsive" style={{}}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th style={{ fontSize: '11px' }}>Sr. No.</th>
                                            {/* <th style={{  fontSize: '13px' }}>Village</th> */}
                                            <th style={{ fontSize: '13px' }}>Information / Notice</th>
                                            <th style={{ fontSize: '12px' }}>Advisory issued Office</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {success && notifications && Array.isArray(notifications) &&
                                            notifications.map((notification, i) => (
                                                <tr key={notification._id}>
                                                    <td style={{ fontSize: '11px' }}>{i + 1}</td>
                                                    {/* <td style={{  fontSize: '13px' }}>{notification.villageName}</td> */}
                                                    <td style={{ fontSize: '13px' }}>
                                                        <div className="text-left">{notification.notificationMessage}</div>
                                                        <div className='text-left'>
                                                            <p className='px-1' style={{ color: 'red', fontWeight: 'bold', marginTop: '10px', marginBottom: 0 }}>Date: {formatDate(notification.createdAt)}</p>
                                                            <p className='px-1' style={{ color: 'red' }}>{notifications[notifications.length - 1].villageName}</p>
                                                        </div>
                                                    </td>
                                                    <td style={{ fontSize: '12px' }}>{notification.Remark}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </Table>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </Layout>
    );
};

export default NotificationPage;
