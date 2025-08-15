import express from "express";
import {
    createNote,
    deleteNote,
    getAllNotes,
    getSingleNote,
    updateNote,
} from "../controllers/noteController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getSingleNote);
router.post("/", createNote);
router.post("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
