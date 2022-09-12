import {
    deleteuser,
    getAlluser,
    getuser,
    updateuser,
} from "../controllers/user-controller.js";
import { Router } from "express";
import { verifyToken } from "../utils/verification.js";
const router = Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user");
});
//update
router.put("/:id", updateuser);
//Delete
router.delete("/:id", deleteuser);
//Get
router.get("/:id", getuser);
//Get all
router.get("/", getAlluser);

export default router;
