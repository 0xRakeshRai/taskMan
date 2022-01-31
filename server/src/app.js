const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3010;
const authRoute = require('./routes/auth');
const dashRoute = require('./routes/dashboard');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('./strategy/discordstrategy');
const db = require('./database/database');
const io = require("socket.io")(3030, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"],
    },
})

io.on("connection", socket => {
    console.log("socket io connected");
})

db.then(() => console.log('Connected to mongo')).catch(err => console.log(err));

app.use(session({
    secret: "some secret",
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false,
    name: "discord-oauth2"
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoute);
app.use('/dashboard', dashRoute);

app.listen(PORT, () => {
    console.log(`PORT ${PORT}`);
});