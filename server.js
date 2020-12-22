const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Connect using vonfig variables on Heroku or use localDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Require the HTML and API routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

//Set up the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
