const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/images', (req, res) => {
    const imagesPath = path.join(__dirname, 'public', 'images');
    res.json({ images: getImages(imagesPath) });
});

function getImages(imagesPath) {
    const imageFiles = fs.readdirSync(imagesPath);
    return imageFiles.map((file) => `/images/${file}`);
}

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

