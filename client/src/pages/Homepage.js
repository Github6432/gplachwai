import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { getNotification } from '../actions/notificationActions';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Homepage = () => {
  const dispatch = useDispatch();
  // const loginState = useSelector(state => state.loginUserReducer);
  // const { loading, success, error, currentUser } = loginState;
  const notificationState = useSelector(state => state.getNotificationReducer);
  const { loading, error, success, notifications } = notificationState;

  useEffect(() => {
    dispatch(getNotification())
  }, [dispatch])

  useEffect(() => {
    if (loading) {
      toast.loading('Load Home Page ...');
    } else {
      toast.dismiss();
    }

    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success('Home Page Loaded');
    }
  }, [loading, error, success]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  }

  return (
    <>
      <Layout>
        {/* <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(loginState, null, 4)}</pre> */}
        <Container className="form-container">
          <Row className='ml-5'>
            <Col md={9} className="mx-auto text-center">
              <h1>Home Page</h1>
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
                  {success && notifications && Array.isArray(notifications) && notifications.length > 0 && (
                    <tr key={notifications[notifications.length - 1]._id}>
                      <td>{notifications.length}</td>
                      <td>{notifications[notifications.length - 1].villageName}</td>
                      <td>
                        <div className="text-left">{notifications[notifications.length - 1].notificationMessage}</div>
                        <div className='text-left'>
                          <p className='px-1' style={{ color: 'red', fontWeight: 'bold' }}>Date: {formatDate(notifications[notifications.length - 1].createdAt)}</p>
                        </div>
                      </td>
                      <td>{notifications[notifications.length - 1].Remark}</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default Homepage