// using router and cookies 

const express = require('express');
const app = express();
const catRoutes = require('./routes/cats');
const peopleRoutes = require('./routes/people');


app.use('/cats', catRoutes);
app.use('/people', peopleRoutes);

app.listen(3000, () => {
    console.log('Server has started')
});