
import express from "express";
import roomController from "../controllers/roomController.js";

const router = express.Router();





router.post('/createRoom', roomController.createRoom);


export default router;