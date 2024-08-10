import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { addNotification } from '../actions/notificationActions'; // Update the action import
import { Link } from 'react-router-dom';

const NotificationForm = () => {
    const [villageName, setVillageName] = useState('');
    const [notificationMessage, setNotificationMessage] = useState('');
    const [Remark, setRemark] = useState('');

    const notificationState = useSelector(state => state.notificationReducer); // Update selector
    const { loading, success, error } = notificationState;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        const notificationData = { villageName, notificationMessage, Remark };
        dispatch(addNotification(notificationData));
    }

    useEffect(() => {
        if (loading) {
            toast.loading('Notification Form Load...');
        } else {
            toast.dismiss();
        }

        if (error) {
            toast.error(error);
        }

        if (success) {
            toast.success('Form Show Successfully');
        }
    }, [loading, error, success]);

    return (
        <Layout title='Submit Notification - GP Lachwai'>
            <div className="form-container">
                <h1>Submit Notification</h1>
                <form>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={villageName}
                            onChange={(e) => setVillageName(e.target.value)}
                            className="form-control"
                            id="villageName"
                            placeholder='Enter Village Name'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={notificationMessage}
                            onChange={(e) => setNotificationMessage(e.target.value)}
                            className="form-control"
                            id="notificationMessage"
                            placeholder='Enter Notification Message'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={Remark}
                            onChange={(e) => setRemark(e.target.value)}
                            className="form-control"
                            id="Remark"
                            placeholder='Enter Remark'
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-3">
                            Already Submitted?
                            <Link className='mx-4' to={'/notifications'}>View Notifications</Link>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={submitHandler}>Submit</button>
                </form>
            </div>
        </Layout>
    )
}

export default NotificationForm;
