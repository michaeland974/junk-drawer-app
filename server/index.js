import express from 'express'
import fs from 'fs';
const app = express();

app.get("/favicon.ico", (req, res) => res.status(204));
app.get("/stream", (req, res, next) => {
  let audio;
  const dir = fs.readdirSync("./audio");
  const size = dir.reduce((total, file) => {
    const path = "./audio/" + file;
    return total + (fs.statSync(path).size);
  }, 0);
  
  res.setHeader("Content-Type","audio/mpeg");
  res.setHeader("Accept-Ranges", "bytes");
  
  const main = () => {
    if(!dir.length){
      res.end();
      return
    } 
    else{
      audio = fs.createReadStream("audio/" + dir[0]);
      audio.on("data", (chunk) => {
        res.write(chunk);
      })
      audio.on("end", function() {
        dir.shift();
        main();        
      });
    }
  }
  main();
});

app.listen(3001);
