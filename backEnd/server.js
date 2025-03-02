require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require("./config/database");


const greenBeckRoutes = require('./routes/greenBeckRoutes');
const userRoutes = require('./routes/userRoutes');
const experimentRoutes = require('./routes/experimentRoutes');
const queryRoutes = require('./routes/queryRoutes');
const victimRoutes = require('./routes/victimRoutes');
const offenderRoutes = require('./routes/offenderRoutes'); 
const witnessRoutes = require('./routes/witnessRoutes'); 

const app = express();


app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());


app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});


app.use('/api/greenbeck', greenBeckRoutes);
app.use('/api/user', userRoutes);
app.use('/api/experiment', experimentRoutes);
app.use('/api/query', queryRoutes);
app.use('/api/victim', victimRoutes);
app.use('/api/offender', offenderRoutes);  
app.use('/api/witness', witnessRoutes); 


sequelize.authenticate()
  .then(() => console.log("Connected to MySQL using Sequelize"))
  .catch(err => console.error("Database connection error:", err));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
