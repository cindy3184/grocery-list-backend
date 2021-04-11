const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb+srv://ADMIN:1234@sei.61zdp.mongodb.net/grocery-list?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})