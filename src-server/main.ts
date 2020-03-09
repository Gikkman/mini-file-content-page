import path from 'path'
import express from 'express';
import http from 'http';
import { readFile } from 'fs';
import { FileResponse } from "../src-shared/file-response";

const port = 7878;
const url = 'localhost';
const staticUrl = '/';
const staticDir = path.join(__dirname, 'public');

const app = express();
const server = http.createServer(app);

// Start server
server.on('listening', () => console.log(`Server listening to ${url}:${port}`));
server.on('error', (err) => console.error(err));
server.listen(port, url);

// Config server
app.use(express.json());

app.get('/', (req, res, next) => {
    next();
});

app.get('/file', (req, res) => {
    const location = path.join(__dirname, '..', 'example-content.txt');
    readFile(location, 'utf8' , (err, data) => {
        const output: FileResponse = {err: err || undefined, data: data};
        res.json(output);
    });
});

app.use(staticUrl, express.static(staticDir));
