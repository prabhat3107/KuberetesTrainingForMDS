const http = require('http');
const fs = require('fs');
const express = require('express');
const os = require('os');
const app = express();

function containerInfo(){
    const hostName = os.hostname();
    const osType= os.type();
    const osRelease = os.release();
    const now = new Date();
    process.env.TZ = 'America/New_York';
    const formattedTime = now.toString();

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>BLUE ${hostName}</title>
      <style>
            body {
                background-color: rgba(0,51,255,0.38); /* Red background */
            }
        </style>
    </head>
    <body>
      <div class="container">
        <h1>${hostName}</h1>
        <p><strong>Hostname:</strong> <span id="hostname">${hostName}</span></p>
        <p><strong>OS Type:</strong> <span id="osType">${osType}</span></p>
        <p><strong>OS Release:</strong> <span id="osRelease">${osRelease}</span></p>
        <p><strong>Current Time:</strong> <span id="clock">${formattedTime}</span></p>  
      </div>
    </body>
    </html>
  `;

    return html
}


function healthCheck(){
    const now = new Date();
    process.env.TZ = 'America/New_York';
    const formattedTime = now.toString();
    const html = `
    <p>Alive!!</p>
    <p>${formattedTime}</p>`

    return html
}

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(containerInfo());
});

app.get('/healthcheck', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(healthCheck());
})

const httpServer = http.createServer(app);
const port = 8080;

httpServer.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

