import { Router } from 'express';
import {
    createHotel,
    deleteHotel,
    getAllHotel,
    getHotel,
    updateHotel,
    getByCity,
    getByType,
} from '../controllers/hotel-controller.js';
import { verifyAdmin } from '../utils/verification.js';

const router = Router();

//create
router.post('/', verifyAdmin, createHotel);
//update
router.put('/:id', verifyAdmin, updateHotel);
//Delete
router.delete('/:id', verifyAdmin, deleteHotel);
//Get
router.get('/find/:id', getHotel);
//Get all
router.get('/', getAllHotel);

router.get('/byCity', getByCity);
router.get('/byType', getByType);

export default router;
