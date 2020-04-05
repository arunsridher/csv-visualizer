const Files = require('../models/files');
const csv = require('csvtojson');
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
    return res.render('home',{
      title: "Home | CSV Visualizer",
      message: "File uploaded successfuly"
    });
  }catch(err){
    return res.render('home',{
      title: "Home | CSV Visualizer",
      message: "File upload failed"
    });
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

module.exports.openFile = async function(req, res){
  try{
    let fileObj = await Files.findById(req.params.id);
    
    let csvFilePath = path.join(__dirname, '../', 'uploads/', fileObj.path);
    console.log(csvFilePath);
    
    const jsonArray= await csv().fromFile(csvFilePath);
    // console.log(jsonArray);
    
    // let keys =[];
    // if(jsonArray.length > 0){
    //   keys = Object.keys(jsonArray[0]);
    // }
    // console.log(keys);

    return res.render('visualizer', {
      name: fileObj.name,
      jsonArray: jsonArray
    });
  }catch(err){
    console.log(err);
    return res.redirect('back');
  }
}