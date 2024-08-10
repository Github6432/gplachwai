// components/VisitorForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVisitor } from '../actions/visitorAction';
import Layout from '../components/Layout/Layout';

const VisitorForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [guardianName, setGuardianName] = useState('');
    const [relation, setRelation] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [adharNo, setAdharNo] = useState('');
    const [reasonForVisit, setReasonForVisit] = useState('');

    const visitorData = { name, guardianName, relation, mobileNo, adharNo, reasonForVisit };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addVisitor(visitorData));
        // setFormData({
        //     name: '',
        //     guardianName: '',
        //     relation: '',
        //     mobileNo: '',
        //     adharNo: '',
        //     reasonForVisit: ''
        // });
    };

    return (
        <Layout title='Visitor Form - GP Lachwai' >
            <div className="form-container">
                <h1>Visitor Form</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label>Guardian Name:</label>
                        <input type="text" name="guardianName" value={guardianName} onChange={(e) => setGuardianName(e.target.value)} required />
                    </div>
                    <div>
                        <label>Relation:</label>
                        <input type="text" name="relation" value={relation} onChange={(e) => setRelation(e.target.value)} required />
                    </div>
                    <div>
                        <label>Mobile No:</label>
                        <input type="text" name="mobileNo" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required />
                    </div>
                    <div>
                        <label>Aadhar No:</label>
                        <input type="text" name="adharNo" value={adharNo} onChange={(e) => setAdharNo(e.target.value)} required />
                    </div>
                    <div>
                        <label>Reason for Visit:</label>
                        <input type="text" name="reasonForVisit" value={reasonForVisit} onChange={(e) => setReasonForVisit(e.target.value)} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Layout>
    );
};

export default VisitorForm;
