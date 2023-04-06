const express = require('express');


const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('app started'));

app.listen(PORT, () => console.log(`app running on port: ${PORT}`));