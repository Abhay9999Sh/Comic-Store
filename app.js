
const express = require("express");
const mongoose = require("mongoose");
const comicRoutes = require("./routes/comic");

const app = express();

app.use(express.json());

app.use("/api/comics", comicRoutes);

const PORT =  3000;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/comicstore'); 
};

main()
 .then(() => {
    console.log("Connection successful");
 })
 .catch((err) => {
    console.log("Error occurred", err);
});


app.listen(PORT, 
    () => console.log(`Server running on port ${PORT}`)
);