const express = require('express');
const PORT = process.env.Port || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
const { animals } = require('./data/animals');
const fs = require('fs');
const path = require('path');
app.use(express.static('public'));
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// app.get('*', (reg, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// })

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});
