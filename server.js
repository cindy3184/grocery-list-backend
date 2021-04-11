const express = require('express');
const morgan = require('morgan');


const app = express();


app.use(morgan('dev'));
app.use(express.json()); 


app.use('/api/skills', require('./routes/api/skills'));

const port = process.env.PORT || 3001

app.listen(port, function() {
    console.log(`Express is listening for AJAX request on port ${port}`)
});
