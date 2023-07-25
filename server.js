/**
 * This server is only used to server coverage reports!!
 * DO NOT WRITE UNIT TESTS FOR THIS!!
 */
const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = 4000;
const server = express();

const coverageFolder = path.join(__dirname, 'coverage', 'lcov-report');

if (!fs.existsSync(coverageFolder)) {
  throw new Error('Document folder not found!');
}

server.use('/coverage', express.static(coverageFolder));

server.listen(PORT, () => {
  console.log(`Coverage report hosted on http://localhost:${PORT}/coverage`);
});
