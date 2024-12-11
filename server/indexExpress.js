// Comments are the syntax for es6 
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

// const express = require('express');
const app = express();
// const PORT = 3000;
const PORT = process.env.PORT;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename) 

app.get("/",(req,res)=>{
    // res.sendFile(__dirname + "/views/index.html");
    res.sendFile(path.join(__dirname,"views","index.html"))
})

// app.use(express.static(__dirname + "/views/"));
app.use(express.static(path.join(__dirname, "views")));

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})