const handModel = require('../models/handModel');

const handpumpController = async (req, res) => {
    const { name, place, condition, waterCondition, village } = req.body;
    try {
        // Validation
        console.log(name, place, condition, waterCondition, village);
        if (!name) return res.status(400).send({ message: 'Name is Required' });
        if (!place) return res.status(400).send({ message: 'Place is Required' });
        if (!condition) return res.status(400).send({ message: 'Condition is Required' });
        if (!waterCondition) return res.status(400).send({ message: 'Water Condition is Required' });
        if (!village) return res.status(400).send({ message: 'Village is Required' });
        const handpump = new handModel({ name, place, condition, waterCondition, village });
        await handpump.save();
        res.status(201).send({ success: true, message: 'Hand Pump Details Filled Successfully', handpump });

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({ success: false, message: 'Error in Registration', error });
    }
};

module.exports = { handpumpController };
