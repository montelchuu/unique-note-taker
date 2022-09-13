// Dependencies
const express = require('express');
const path = require('path');
// Route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// Creating server
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})