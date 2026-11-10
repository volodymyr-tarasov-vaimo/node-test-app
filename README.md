# node-test-app

A minimal Node.js HTTP server (no dependencies) for testing container builds and deployments.

- `GET /` returns `Hello from <hostname>`
- `GET /healthz` returns `ok`
- Listens on `$PORT` (default `8080`)

```sh
docker build -t node-test-app .
docker run --rm -p 8080:8080 node-test-app
curl localhost:8080
```
