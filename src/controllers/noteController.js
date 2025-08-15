import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); //latest data will show first
    res.status(200).json({ message: "Success", data: notes });
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getSingleNote = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findById(id);
    res.status(200).json({ message: "success", data: note });
  } catch (error) {
    console.error("Error in getSingleNoteController", error);
    res.status(500).json("Internal server error!");
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const newNote = await note.save();
    res.status(201).json({ message: "success", data: newNote });
  } catch (error) {
    console.error("error createNote controller", error);
    res.status(500).json("Internal server error!");
  }
};

export const updateNote = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedNote = await Note.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found!" });
    }
    res.status(200).json({ message: "success", data: updatedNote });
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json("Internal server Error!");
  }
};

export const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found!" });
    }
    res
      .status(200)
      .json({ message: "Note deleted successfully!", data: deletedNote });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json("Internal server Error!");
  }
};
