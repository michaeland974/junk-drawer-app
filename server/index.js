import express from 'express'
import fs from 'fs';
const app = express();

app.get("/favicon.ico", (req, res) => res.status(204));
app.get("/stream", (req, res, next) => {
  res.setHeader("Content-Type","audio/mpeg");
  res.setHeader("Accept-Ranges", "bytes");
  const dir = fs.readdirSync("./audio");
  let audio;

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

app.listen(3001, () => {
  console.log("Server started on port 3001")
});
