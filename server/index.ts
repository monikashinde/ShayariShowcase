import express from "express";
import path from "path";
import { createServer } from "http";

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(process.cwd(), 'public')));

// Fallback to index.html for any other routes (SPA routing)
app.get('*', (_req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

const server = createServer(app);

// ALWAYS serve the app on the port specified in the environment variable PORT
// Other ports are firewalled. Default to 5000 if not specified.
const port = parseInt(process.env.PORT || '5000', 10);

server.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
