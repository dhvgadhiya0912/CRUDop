const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');


const db = require('./config/mongoose-connection');
const ownersRouter = require('./routes/owners-router');
const usersRouter =  require('./routes/user-router');
const productsRouter = require('./routes/product-router');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use('/owners',ownersRouter);
app.use('/users',usersRouter);
app.use('/products',productsRouter);

// Start the HTTP server on port 3000 and log a startup message
app.listen(3000);
console.log('Server is running on http://localhost:3000');