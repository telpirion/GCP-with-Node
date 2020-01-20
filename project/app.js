const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For URL params

app.post('/api/translation', (req, res) => {
  const translationText = req.body.text;
  const sourceLang = req.body.sourceLang;
  const targetLang = req.body.targetLang;

  let result = `${translationText} from ${sourceLang} to ${targetLang}`;

  res
    .status(200)
    .json({ text: result })
    .end();

});

app.get('/hello', (req, res) => {
  res
    .status(200)
    .json({ text: 'hello world' })
    .end();
});

// Returns Angular app.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;