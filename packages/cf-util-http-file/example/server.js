import express from 'express';
import path from 'path';
import multer from 'multer';
import fs from 'fs';

const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/bundle.js', (req, res) =>
  res.sendFile(path.join(__dirname, 'bundle.js')));
app.get('/styles.css', (req, res) =>
  res.sendFile(path.join(__dirname, 'styles.css')));

const tmp = path.join(__dirname, 'tmp');
const upload = multer({ dest: tmp });

app.post('/upload', upload.single('file'), function(req, res, next) {
  res.send({
    originalname: req.file.originalname,
    filename: req.file.filename
  });
});

app.get('/download/:id', function(req, res, next) {
  fs.createReadStream(path.join(tmp, req.params.id)).pipe(res);
});

app.listen(3000);
console.log('>> http://localhost:3000/');
