const express = require("express");
const sequelize = require('./database');
const User = require('./models/User');
require('dotenv').config();
const app = express();

app.use(express.json())
sequelize.sync({ force: true }).then(() => console.log('db is ready'));


app.get('/users', async (req,res) =>{
    const users = await User.findAll();

    res.json(users)
})
app.post('/users', async (req, res) => {
    await User.create(req.body);
    res.send('user is inserted');
});

app.listen(process.env.PORT, () => {
    console.log(`app is running on port ${process.env.PORT}`);
});