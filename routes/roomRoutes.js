import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { 
    createRoomController, 
    getRoomController, 
    getSingleRoomController, 
    roomListController 
} from "../controllers/roomController.js";

const router = express.Router();

// routes
// post room
router.put(
    "/create-room/:id",
    requireSignIn,
    createRoomController
);

router.get("/get-rooms", getRoomController);
router.get("/room-list/:page", roomListController);
router.get("/get-room/:rid", getSingleRoomController)

export default router;