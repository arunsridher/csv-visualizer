const Files = require('../models/files');
const fs = require('fs');
const path = require('path');

module.exports.uploadFile = async function(req, res){
  try{
    if(req.file){
      let fileName = req.file.originalname;
      fileName = path.parse(fileName).name;
      console.log(fileName);
      console.log(req.file.filename);
      await Files.create({
        name: fileName,
        path: req.file.filename
      });
    }
    return res.redirect('back');
  }catch(err){
    return res.redirect('back');
  }
}

module.exports.displayAllFiles = async function(req, res){
  try{
    let allFiles = await Files.find({});
    return res.render('files',{
      title: "All Files",
      files: allFiles
    });
  }catch(err){
    return res.redirect('back');
  }
}