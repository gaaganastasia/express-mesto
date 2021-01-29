const router = require('express').Router();
const controller = require('../controllers/users');

router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.post('/', controller.createUser);
router.patch('/me', controller.updateProfileInfo);
router.patch('/me/avatar', controller.updateProfileAvatar);

module.exports = router;
