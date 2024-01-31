import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { 
    createRoomController, 
    getRoomController, 
    getSingleRoomController, 
    roomListController 
} from "../controllers/roomController.js";
import formidable from 'express-formidable'

const router = express.Router();

// routes
// post room
router.put(
    "/create-room/:id",
    requireSignIn,
    formidable(),
    createRoomController
);

router.get("/get-rooms", getRoomController);
router.get("/room-list/:page", roomListController);
router.get("/get-room/:rid", getSingleRoomController)

export default router;