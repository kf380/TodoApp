const {Folder} = require("../db");

exports.createNewFolder = async(req,res,next) =>{
    const {title} = req.body;
    try{
       const folder = await Folder.create({title});
        res.json({message:"Folder created", folder});
    } catch (error){
        console.log(error);
        return next();
    }
};

