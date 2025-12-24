const express = require('express');
const auth = require('../middleware/auth');
const roles = require('../middleware/roles');
const { createComment, approveComment } = require('../controllers/commentsController');

const router = express.Router();

router.post('/comments', createComment);
router.post('/comments/:id/approve', auth, roles('admin'), approveComment);

module.exports = router;
