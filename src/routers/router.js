const {Router} = require('express');
const posController = require('../Controllers/postController');
const userController = require('../Controllers/userController');
const authController = require('../Controllers/authController');
const infoController = require('../Controllers/informationController');

let router = Router();

router.post('/post/save',authController.verifyToken ,posController.savePost);
router.get('/post/list/:search?', posController.listPosts);
router.get('/post/:id', posController.findPost);
router.put('/update/post/:id',authController.verifyToken  ,posController.updatePost);
router.delete('/delete/post/:id',authController.verifyToken , posController.deletePost);


//user
router.post('/save/user', userController.SaveUser);


//Auth
router.post('/auth/login',authController.login);
router.post('/auth/verify', authController.verifyToken, authController.profile);

router.post('/info/save',authController.verifyToken , infoController.saveInfo)


module.exports = router;

//*require a post controller to function.