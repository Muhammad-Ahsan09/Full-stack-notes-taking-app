const {pool} = require("../database.js")


const uploadNote  = async (req, res) => {
    try {
        const {title, content} = req.body;
        const userid = req.params.userid;

        const response = await pool.query("INSERT INTO notes(user_id, title, content) VALUES(?, ?, ?);", [userid, title, content]);
        const noteid =  response[0].insertId;

        const note = await pool.query("SELECT * FROM notes WHERE note_id = ?", [noteid])

    
    return res.json(note[0][0])

    } catch (error) {
        console.log(error.message)
    }
}


const getNotes = async (req, res) => {
    try {
        const userid = req.params.userid;

        const notes = await pool.query("SELECT * FROM notes WHERE user_id = ?;", [userid])

        
        res.json(notes[0])
    } catch (error) {
        console.log(error.message)
    }
}

const getNote = async (req, res) => {

    try {
        const noteid = Number(req.params.noteid);
        const note = await pool.query("SELECT * FROM notes WHERE note_id = ?", [noteid])
        res.json(note[0][0])
    } catch (error) {
        console.log(error.message)
    }
}

const deleteNote = async (req, res) => {
    try {
        const noteid = req.params.noteid;

        const deletedNote = await pool.query("DELETE FROM notes WHERE note_id = ?", [noteid])

        return res.json(deletedNote)


    } catch (error) {
        console.log(error.message)
    }
}

const updateNote = async (req, res) => {
    try {
        const noteid = req.params.noteid;
        const{title, content} = req.body;
        const updatedNote = await pool.query("UPDATE notes SET title = ?, content = ? WHERE note_id = ?", [title, content, noteid])

        res.json(updatedNote)
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {uploadNote, getNotes, getNote, deleteNote, updateNote}