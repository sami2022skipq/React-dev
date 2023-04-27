const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');

const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')


// ROUTE 1 : get all notes using GET "/api/notes/fetchallnotes". Login required

router.get('/fetchallnotes', fetchuser, async (req, res) => {

    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)

    } catch (error) {

        console.log("here is the error ", error.message)
        res.status(500).send("Internal Server error ")

    }
})
// ROUTE 2 : Add a new note  using POST "/api/notes/addnote". Login required

router.post('/addnote', fetchuser, [

    // Basic critaria for creating a new user
    body('title', "Enter a valid title").isLength({ min: 3 }),
    body('discription', "Discription must be atleast five characters ").isLength({ min: 5 }),

], async (req, res) => {


    try {
        // if there is any error, return bad request and errors
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
        const { title, discription, tag } = req.body;
        const note = new Note({
            title, discription, tag, user: req.user.id

        })
        const savedNote = await note.save()
        res.json(savedNote)

    } catch (error) {

        console.log("here is the error ", error.message)
        res.status(500).send("Internal Server error ")

    }

})

// ROUTE 3: Update and existing note using PUT "/api/notes/updatenote":  login required


router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, discription, tag } = req.body;



    // Create a newNote objct

    try {

        const newNote = {}

        if (title) { newNote.title = title }
        if (discription) { newNote.discription = discription }
        if (tag) { newNote.tag = tag }


        // Find the note to be updated and update it

        let note = await Note.findById(req.params.id)

        if (!note) { return res.status(404).send("Not Found") }
        // allowe deletion only if user owns this note
        if (note.user.toString() != req.user.id) {
            return res.status(401).send("Not allowed")
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note })
    } catch (error) {
        console.log("here is the error ", error.message)
        res.status(500).send("Internal Server error ")


    }
})
// ROUTE 4: Delete a note Delete "/api/notes/deletenote":  login required


router.delete('/deletenote/:id', fetchuser, async (req, res) => {


    // Find the note to be deleted and delete it
    try {


        let note = await Note.findById(req.params.id)

        if (!note) { return res.status(404).send("Not Found") }
        // allowe deletion only if user owns this note
        if (note.user.toString() != req.user.id) {
            return res.status(401).send("Not allowed")
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": `Note with the Id ${req.params.id} has been deleted` })


    } catch (error) {
        console.log("here is the error ", error.message)
        res.status(500).send("Internal Server error ")


    }
})


module.exports = router