const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5501;
const { readFromFile , readAndAppend }= require("./helpers/fsUtils")
const uuid = require("./helpers/uuid")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.get('/api/notes', (req, res) => {
  readFromFile("./db/db.json").then(data=>res.json(JSON.parse(data)))
});

app.post('/api/notes', (req, res) => {
  const {title, text}=req.body
  if (title && text){
    const newNote = {title,text,id:uuid()}
    readAndAppend(newNote,"./db/db.json")
    res.status(201).end()
  }
  else {
    res.json("failed to post note")
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
