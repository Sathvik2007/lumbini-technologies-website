import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Serve static files from the SkillArc_main_web-main directory
app.use(express.static(join(__dirname, 'SkillArc_main_web-main')));

// Serve the index.html file for all routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'SkillArc_main_web-main', 'index.html'));
});

// Add CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(port, () => {
  console.log(`Skill Arc server running at http://localhost:${port}`);
}); 