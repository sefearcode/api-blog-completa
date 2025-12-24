const express = require('express');
const auth = require('../middleware/auth');
const roles = require('../middleware/roles');
const { stats } = require('../controllers/dashboardController');

const router = express.Router();

router.get('/admin/dashboard', auth, roles('admin'), stats);

module.exports = router;
