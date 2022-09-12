import hotelModel from "../models/hotel-model.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new hotelModel(req.body);

    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch (err) {
        next(err);
    }
};

export const deleteHotel = async (req, res, next) => {
    try {
        const updateHotel = await hotelModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Data Deleted");
    } catch (err) {
        next(err);
    }
};

export const updateHotel = async (req, res, next) => {
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
        next(err);
    }
};

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await hotelModel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
};

export const getAllHotel = async (req, res, next) => {
    try {
        const hotels = await hotelModel.find();
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};
