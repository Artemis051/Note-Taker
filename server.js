const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/notes', (req, res) => {
  res.json({ message: 'API endpoint for notes' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
