import { Router } from 'express';
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from '../controllers/room-controller.js';
import { verifyAdmin } from '../utils/verification.js';

const router = Router();

//create
router.post('/:hotelid', verifyAdmin, createRoom);
//update
router.put('/:id', verifyAdmin, updateRoom);
//Delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
//Get
router.get('/:id', getRoom);
//Get all
router.get('/', getAllRoom);

export default router;
