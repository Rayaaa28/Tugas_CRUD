const express = require('express');
const validatedata = require('../middleware/validatedata');
const datacontroller = require('../controller/datacontroller');
const router = express.Router();

router.post('/', validatedata , datacontroller.CreateData);
router.get('/get', datacontroller.GetItems);
router.put('/:id', validatedata, datacontroller.UpdateData);
router.delete('/:id', datacontroller.DeleteData);


module.exports = router;