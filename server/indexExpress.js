import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename) 

app.use((req,res,next) => {
    const secretCode = req.query.secret;
    if(secretCode === '1234'){
        req.istrue = true;
    }
    else{
        req.istrue = false;
    }
    next();
});

app.get("/", (req,res)=>{
    if(req.istrue){
        res.sendFile(path.join(__dirname,"views","index.html"));
    }
    else{
        res.send("Unauthorized");
    }
})
app.use(express.static(path.join(__dirname, "views")));

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})