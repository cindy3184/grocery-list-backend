const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/items')

router.get('/', itemsCtrl.index);
router.post('/', itemsCtrl.create);



module.exports = router;