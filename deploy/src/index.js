const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server on port', port);
});
