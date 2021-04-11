const express = require('express');
const router = express.Router();

router.get('/', itemsCtrl.index);
router.post('/', itemsCtrl.create);



module.exports = router;