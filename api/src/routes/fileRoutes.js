const express = require('express');
const router = express.Router();
const { uploadFile, getFiles } = require('../controllers/fileController');
const upload = require('../middleware/upload');

// Upload file
router.post('/upload', upload.single('file'), uploadFile);

// Get files with pagination and filtering
router.get('/', getFiles);

module.exports = router;
