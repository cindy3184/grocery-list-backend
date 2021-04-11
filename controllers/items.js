const Item = require('../models/item')


async function index(req, res) {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' })
    }
    
};


async function create(req, res) {
    try {
        await Item.create(req.body);
        res.status(201).json({ msg: 'item added successfully' })
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' })
    }

};


module.exports = {
    index,
    create,
};