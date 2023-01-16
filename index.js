import express from "express";
import dotenv from 'dotenv';
import users from "./routes/users.js";
import mongoose from "mongoose";
import roles from "./routes/role.js";
import membership from './routes/membership.js';
import menu from "./routes/menu.js";

mongoose.set('strictQuery', false);

dotenv.config();

var PORT = process.env.PORT,
DB_URL = process.env.DB_URL

console.clear();
mongoose.connect(DB_URL, (err, db) => {
    if (err) console.error(err);
    console.log("DB Connected Successfully");
})

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'));

app.use("/api/users", users);
app.use("/api/roles", roles);
app.use("/api/membership", membership);
app.use("/api/menu", menu);

app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) => res.status(404).send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));