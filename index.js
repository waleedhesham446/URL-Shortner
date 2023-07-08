const express = require('express');

const app = express();

require('./config/db')()    //  Connect to database

app.use(express.json({ extented: false }));

//  Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));