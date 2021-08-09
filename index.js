const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const mongoose = require ('mongoose');
const cors = require('cors');

mongoose.set('useFindAndModify', false);


app.use(bodyParser.json());
//pour un accès de n'importe ou
app.use(cors());
//pour un accès limité - à notre site via react par ex et pas vers l'extérieur
// -------------- app.use(cors({origin: 'http://localhost:3000'})); --------------

app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('server listening at port: 5500'));