const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'assets/cover.jpg');
const destPath = path.join(__dirname, 'dist/assets/cover.jpg');

fs.copyFileSync(sourcePath, destPath);
console.log('Cover image copied to public/assets folder.');
