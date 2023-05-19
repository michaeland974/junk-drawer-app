import express from 'express'
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.get("/", (req, res, next) => {
  const range = req.headers.range;
  const path = "audio/the-process.mp3";
  const chunkSize = 10**6;
  const size = fs.statSync(path).size;
 
  res.setHeader("Content-Type","audio/mpeg");
  res.setHeader("Accept-Ranges", "bytes");
  
  fs.createReadStream(path)
    .on("data",(chunk) => {
      res.write(chunk)
    })
});

app.get("/stream", (req, res, next) => {
  res.sendFile(__dirname+"/index.html");
});

app.listen(3001, () => {
  console.log("Server started on port 3001")
})
