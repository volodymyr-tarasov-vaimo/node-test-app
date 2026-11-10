const http = require('node:http');
const os = require('node:os');

const port = process.env.PORT || 8080;
const hostname = os.hostname();

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/healthz') {
    res.end('ok\n');
  } else {
    res.end(`Hello from ${hostname}\n`);
  }
});

server.listen(port, () => console.log(`listening on :${port}`));

// Node as PID 1 ignores SIGTERM by default; exit cleanly on docker stop / pod termination.
process.on('SIGTERM', () => server.close(() => process.exit(0)));
