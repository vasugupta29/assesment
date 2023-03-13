import express from "express";
import { deleteUser, getUser, like, update } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//update user
router.put("/:id",verifyToken,update)


//delete user
router.delete("/:id",verifyToken,deleteUser)


//get a user
router.get("/find/:id",getUser)


//like a video
router.put("/like/:videoId",verifyToken,like)


export default router;