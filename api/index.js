const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./src/config/db');
const errorHandler = require('./src/middleware/error');

// Routes
const fileRoutes = require('./src/routes/fileRoutes');
const folderRoutes = require('./src/routes/folderRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/files', fileRoutes);
app.use('/api/folders', folderRoutes);

// Upload progress endpoint using EventSource
app.get('/api/upload-progress', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const progress = {
    status: 'uploading',
    percent: 0
  };

  const progressInterval = setInterval(() => {
    progress.percent += 10;
    res.write(`data: ${JSON.stringify(progress)}\n\n`);

    if (progress.percent >= 100) {
      progress.status = 'completed';
      res.write(`data: ${JSON.stringify(progress)}\n\n`);
      clearInterval(progressInterval);
      res.end();
    }
  }, 1000);

  req.on('close', () => {
    clearInterval(progressInterval);
  });
});

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
