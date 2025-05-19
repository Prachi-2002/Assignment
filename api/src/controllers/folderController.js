const Folder = require('../models/Folder');
const { validationResult } = require('express-validator');

exports.createFolder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const folder = new Folder({
      name: req.body.name,
      parentId: req.body.parentId || null
    });

    await folder.save();
    res.status(201).json(folder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFolderStructure = async (req, res) => {
  try {
    const folders = await Folder.find().sort({ createdAt: -1 });
    const files = await File.find().sort({ createdAt: -1 });

    const structure = buildFolderStructure(folders, files);
    res.json(structure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

function buildFolderStructure(folders, files) {
  const structure = {
    folders: folders.map(folder => ({
      id: folder._id,
      name: folder.name,
      parentId: folder.parentId,
      createdAt: folder.createdAt
    })),
    files: files.map(file => ({
      id: file._id,
      name: file.originalName,
      folderId: file.folderId,
      size: file.size,
      createdAt: file.createdAt
    }))
  };
  return structure;
}
