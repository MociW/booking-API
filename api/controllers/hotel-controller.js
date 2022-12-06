import hotelModel from '../models/hotel-model.js';

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
        await hotelModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Data Deleted');
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
        const hotels = await hotelModel.find(req.query).limit(req.query.limit);
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};

export const getByCity = async (req, res, next) => {
    const city = req.query.city.split(',');
    try {
        const list = await Promise.all(
            city.map((i) => {
                return hotelModel.countDocuments({ city: i });
                // return hotelModel.find({ city: i }).length;
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

export const getByType = async (req, res, next) => {
    try {
        const hotelCount = await hotelModel.countDocuments({ type: 'hotel' });
        const apartementCount = await hotelModel.countDocuments({ type: 'apartment' });
        const resortCount = await hotelModel.countDocuments({ type: 'resort' });
        const villaCount = await hotelModel.countDocuments({ type: 'villa' });
        const cabinCount = await hotelModel.countDocuments({ type: 'cabin' });
        res.status(200).json([
            { type: 'hotel', count: hotelCount },
            { type: 'apartment', count: apartementCount },
            { type: 'resort', count: resortCount },
            { type: 'villa', count: villaCount },
            { type: 'cabin', count: cabinCount },
        ]);
    } catch (err) {
        next(err);
    }
};
