const express = require('express');
const router = express.Router();
const { createFolder, getFolderStructure } = require('../controllers/folderController');
const { body } = require('express-validator');

// Create folder
router.post('/', [
  body('name').trim().notEmpty().withMessage('Folder name is required')
], createFolder);

// Get folder structure
router.get('/structure', getFolderStructure);

module.exports = router;
