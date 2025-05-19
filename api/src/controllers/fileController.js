const File = require('../models/File');
const { validationResult } = require('express-validator');

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = new File({
      name: req.file.filename,
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      size: req.file.size,
      path: req.file.path,
      folderId: req.body.folderId || null
    });

    await file.save();
    res.status(201).json(file);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFiles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';
    const folderId = req.query.folderId;

    const query = {};
    if (search) {
      query.originalName = { $regex: search, $options: 'i' };
    }
    if (folderId) {
      query.folderId = folderId;
    }

    const totalItems = await File.countDocuments(query);
    const files = await File.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({
      files,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
      totalItems
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
