import express from "express";
import dotenv from 'dotenv';

import usersRoutes from "./routes/users.js";

import mongoose from "mongoose";
import helpers from "./utils/helpers.js";
import { MongoUtil } from "./utils/MongoUtils.js";

dotenv.config();

var PORT = process.env.PORT,
    DB_URL = process.env.DB_URL

mongoose.connect(DB_URL, (err, db) => {
    if (err) console.error(err);
    let dbo = db.client.db('igive');
    MongoUtil.getInstance(dbo);
    console.log('Database Connected!');
});

const app = express();
app.use(express.json());

app.use("/api/users", usersRoutes);

app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) => res.status(404).send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));