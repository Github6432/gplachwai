import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { feedHandPump } from '../actions/handpumpAction';
import { Col, Row } from 'react-bootstrap';
import AdminMenu from './auth/admin/AdminMenu';

const Handpump = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [condition, setCondition] = useState('');
    const [waterCondition, setWaterCondition] = useState('');
    const [village, setVillage] = useState('');

    const handpumpHandler = async (e) => {
        e.preventDefault();
        const handpumpData = { name, place, condition, waterCondition, village };

        try {
            await dispatch(feedHandPump(handpumpData));
            toast.success('Hand pump details submitted successfully!');
        } catch (error) {
            toast.error('Failed to submit hand pump details.');
        }
    };

    return (
        <Layout>
            <Row>
                <Col md={3}>
                    <AdminMenu />
                </Col>
                <Col md={9}>
                    <div className="form-container">
                        <h1>Hand Pump Form</h1>
                        <form onSubmit={handpumpHandler}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                    id="exampleInputOwner"
                                    placeholder='Enter Near House Owner Name'
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={place}
                                    onChange={(e) => setPlace(e.target.value)}
                                    className="form-control"
                                    id="exampleInputPlace"
                                    placeholder='Enter Near Place'
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <h6>Condition</h6>
                                <select
                                    value={condition}
                                    onChange={(e) => setCondition(e.target.value)}
                                    className="form-control"
                                    id="exampleInputCondition"
                                    required
                                >
                                    <option value="" disabled>Select Condition</option>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <h6>The water is suitable for drinking</h6>
                                <select
                                    value={waterCondition}
                                    onChange={(e) => setWaterCondition(e.target.value)}
                                    className="form-control"
                                    id="exampleInputWaterCondition"
                                    required
                                >
                                    <option value="" disabled>Select Water Condition</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <h6>Village</h6>
                                <select
                                    value={village}
                                    onChange={(e) => setVillage(e.target.value)}
                                    className="form-control"
                                    id="exampleInputVillage"
                                    required
                                >
                                    <option value="" disabled>Select Village</option>
                                    <option value="Lachwai">Lachwai</option>
                                    <option value="Nagla Chhvinath">Nagla Chhvinath</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </form>
                        <Link className='mx-4 px-4 py-2' to='/admin/dashboard'>Dashboard</Link>
                    </div>
                </Col>
            </Row>
        </Layout>
    );
};

export default Handpump;
