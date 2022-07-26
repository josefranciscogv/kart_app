const router = require('express').Router();
const controller = require('./drivers.controller');

router.get('/',controller.getAll);
router.post('/',controller.create);
router.put('/',controller.update);

module.exports = router;