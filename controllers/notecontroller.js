import Note from '../models/Notes.js'

// Create Notes
const createnote=async(req,res)=>{
    try {
       
const newNote =await Note.create({...req.body,user: req.user._id})
        
        const populatedNote = await newNote.populate("user", "username");
        res.json(populatedNote)
    } catch (error) {
        console.log(error)
    res.status(500).json({ message: error.message })

    }
}
// Get notes each user created
const getnotes=async (req,res)=>{
try {
    const notes = await Note.find({ user: req.user._id })
    res.json(notes)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
}

//Get single note By id 
const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found." });
    }

    // Check if the logged-in user is the owner of the note
    if (note.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You are not authorized to view this note.",
      });
    }

    res.json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Notes 
const updateNote= async (req, res) => {
  try {
    const noteToUpdate = await Note.findById(req.params.id);

    if (!noteToUpdate) {
      return res.status(404).json({ message: "No note found with this id!" });
    }

    if (noteToUpdate.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "User is not authorized to update this note." });
    }

    // This needs an authorization check
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(note);
  } catch (err) {
    res.status(500).json(err);
  }
}

// Delete Note
const deleteNote = async (req, res) => {
  try {
    const noteToDelete = await Note.findById(req.params.id);

    if (!noteToDelete) {
      return res.status(404).json({ message: "No note found with this id!" });
    }

    if (noteToDelete.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "User is not authorized to delete this note.",
      });
    }

    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getnotes,createnote,updateNote,deleteNote,getNoteById}