import { deleteuser, getAlluser, getuser, updateuser } from '../controllers/user-controller.js';
import { Router } from 'express';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verification.js';
const router = Router();

router.get('/checkauthentication', verifyToken, (req, res, next) => {
    res.send('hello user');
});

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send('hello user and you can edit your account');
});

router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
    res.send('hello admin and you can edit your account');
});

//update
router.put('/:id', verifyUser, updateuser);
//Delete
router.delete('/:id', verifyUser, deleteuser);
//Get
router.get('/:id', verifyUser, getuser);
//Get all
router.get('/', verifyAdmin, getAlluser);

export default router;
