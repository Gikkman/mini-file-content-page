import path from 'path'
import express from 'express';
import http from 'http';
import { readFile, readFileSync } from 'fs';

import { FileResponse } from "../src-shared/file-response";
import { AppConfig } from "../src-shared/app-config";

const config: AppConfig = JSON.parse(readFileSync(path.join(__dirname, '..', 'app-config.json'), 'utf8'));

const port = config.port;
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
    const location = path.join(config.fileLocation);
    readFile(location, 'utf8' , (err, data) => {
        const output: FileResponse = {
            err: err ? "File not found: " + location.toString() : undefined, 
            data: data
        };
        res.json(output);
    });
});

app.use(staticUrl, express.static(staticDir));
