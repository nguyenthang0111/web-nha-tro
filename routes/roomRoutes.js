import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createRoomController, getRoomController } from "../controllers/roomController.js";

const router = express.Router();

// routes
// post room
router.put(
    "/create-room/:id",
    requireSignIn,
    createRoomController
);

router.get("/get-rooms", getRoomController);

export default router;