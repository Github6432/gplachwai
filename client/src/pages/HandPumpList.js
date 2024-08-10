import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { AiFillDelete } from "react-icons/ai";
import { Col, Container, Form, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { deletehandPump, getAllHandPumpList } from '../actions/handpumpAction';
import toast from 'react-hot-toast';

const HandPumpList = () => {
  const dispatch = useDispatch();
  const handPumpListState = useSelector(state => state.getHandpumpReducer);
  const { loading, success, error, res } = handPumpListState;

  useEffect(() => {
    dispatch(getAllHandPumpList())
  }, [dispatch])

  useEffect(() => {
    if (loading) {
        toast.loading('Finding HandPump List...');
    } else {
        toast.dismiss();
    }

    if (error) {
        toast.error(error);
    }

    if (success) {
        toast.success('Hand Pump List Find Successfully');
    }
}, [loading, error, success]);


  return (
    <Layout>
      <Container className="form-container">
        <Form >
          <Row>
            <Col md={9} className="mx-auto text-center">
              <h1>Handpump List</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Serial No.</th>
                    <th>Name</th>
                    <th>Place</th>
                    <th>Condition</th>
                    <th>Water is Drinkable</th>
                    <th>Village</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {success && res && Array.isArray(res) &&
                    res.map((user, i) => (
                      <tr key={user._id}>
                        <td>{i + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.place}</td>
                        <td>{user.condition}</td>
                        <td>{user.waterCondition}</td>
                        <td>{user.village}</td>
                        <td>
                          <AiFillDelete style={{ color: "red", cursor: "pointer" }} onClick={() => { dispatch(deletehandPump(user._id)); }} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Form>
      </Container>

    </Layout>
  )
}

export default HandPumpList