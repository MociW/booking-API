import userModel from "../models/user-model.js";

export const deleteuser = async (req, res, next) => {
    try {
        const updateuser = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Data Deleted");
    } catch (err) {
        next(err);
    }
};

export const updateuser = async (req, res, next) => {
    try {
        const updateuser = await userModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateuser);
    } catch (err) {
        next(err);
    }
};

export const getuser = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const getAlluser = async (req, res, next) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};
