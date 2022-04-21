const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/pizza-hunt', {
    useNewUrlParser: true,
    useUnifiedTopollgy: true
});

// use this to log mogo queries being executed!
mongoose.set('debug',true)

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
