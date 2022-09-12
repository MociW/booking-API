import { Router } from "express";
import hotelModel from "./models/hotel_database.js";

const router = Router();

//craete
router.post("/", async (req, res) => {
    const newHotel = new hotelModel(req.body);

    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch (err) {
        res.status(500).json(err);
    }
});
//update
router.put("/:id", async (req, res) => {
    try {
        const updateHotel = await hotelModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateHotel);
    } catch (err) {
        res.status(500).json(err);
    }
});
//Delete
router.delete("/:id", async (req, res) => {
    try {
        const updateHotel = await hotelModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Data Deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});
//Get
router.get("/:id", async (req, res) => {
    try {
        const hotel = await hotelModel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json(err);
    }
});
//Get all
router.get("/", async (req, res, next) => {
    console.log("Hi");
    next();
    try {
        const hotels = await hotelModel.find(req.params.id);
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;
