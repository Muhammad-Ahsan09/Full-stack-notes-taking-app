const express = require("express");
const cors = require("cors")
const { signup, login } = require("./controllers/authcontroller");
const { uploadNote, getNotes, getNote, deleteNote, updateNote } = require("./controllers/notesController");

const app = express()

app.use(cors({
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}))
app.use(express.json())

app.post("/signup", signup)
app.post("/login", login)
app.post("/notes/:userid", uploadNote)

app.delete("/notes/:noteid", deleteNote)

app.put("/note/:noteid", updateNote)

app.get("/notes/:userid", getNotes)
app.get("/note/:noteid", getNote)


app.listen(8000, () => {
    console.log("server started at port 8000")
})