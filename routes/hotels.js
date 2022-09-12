import { Router } from "express";
import {
    createHotel,
    deleteHotel,
    getAllHotel,
    getHotel,
    updateHotel,
} from "../controllers/hotel-controller.js";
import { createError } from "../utils/error.js";

const router = Router();

//create
router.post("/", createHotel);
//update
router.put("/:id", updateHotel);
//Delete
router.delete("/:id", deleteHotel);
//Get
router.get("/:id", getHotel);
//Get all
router.get("/", getAllHotel);

export default router;
