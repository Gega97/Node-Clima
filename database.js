const mongoose = require('mongoose');

const URI = 'mongodb://localhost/LimeSurvey';

mongoose.connect(URI)
    .then(db => console.log('database is connect'))
    .catch(err => console.log('Failed conecction'));