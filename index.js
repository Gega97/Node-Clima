const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {mongoose} = require('./database');

const port = process.env.PORT || 5000;
const app = express();

///Settings
app.set("port", port);

///Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

///Routes
app.use("/", require('./api/limesurvey'));
app.use("/overview", require('./Router/users.router'));

///Start
app.listen(app.get("port"), () => {
    console.log("server started");
});