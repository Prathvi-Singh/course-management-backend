import mongoose from 'mongoose'
import Files from '../Models/coursefiles.js'

export const files=async(req,res)=>{
    const data=req.body;
    console.log("prev->",data);
    try{
        const newFile=new Files(data);
        await newFile.save();
       
        const a=await Files.find({email:data.email});
        console.log("--->",a);
        return res.status(200).json(data);

    } 
    catch(err){
       return res.status(400).json({message:err.message});
    }
}


export const getallfiles =async(req,res)=>{
    console.log("hello");
    console.log(req.params.course)
    const data=await Files.find({course:req.params.course});
    if(!data) return res.status(404).json({message:"Info about about course"});
    try{
        return res.status(200).json(data);
    }
    catch(error){
       return res.status(400).json({message:error.message})
    }
}

export const DeleteFile = async(req,res)=>{
    console.log("welcome");
    try{
        const file=await Files.findById(req.params.id);
        console.log(file);
        if(!file) return res.status(404).json({message:"file not exit"});
 
        file.delete();
        return res.status(200).json({message:"file deleted successfully"})
     }
     catch(error){
        return res.status(404).json({message:error.message});
     }
}

export const getallSubmissions =async(req,res)=>{
    try{
       const data=await Files.find({id:req.params.id});
       console.log("allsubmission->",data);
       return res.status(200).json(data);
    }
    catch(error){
       return res.status(404).json({message:"there is error"});
    }
}