import express from 'express'
import cors from 'cors'
import {readFile} from 'fs/promises'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors())

const getVideo = async() => {
  return await readFile(new URL('./index.html', import.meta.url))
}

app.get('/', async (req, res, next) => {
  const vid = await getVideo();
  const headers = {
    'Content-Type': 'text/html',
  }
  res.end(vid);
  // res.sendFile( __dirname+"/index.html");
}) 

app.listen(3001, () => {
  console.log("Server started on port 3001")
})
