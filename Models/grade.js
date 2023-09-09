import mongoose from 'mongoose';

const gradeSchema = mongoose.Schema({
   
    email:{
        type:String,
        required:true 
    },
    rollno:{
        type:String,
        required:true 
    },
    name:{
        type:String,
        required:true
    },
    grade:{
        type:String,
        required:true
    },
    branch:{
       type:String,
       required:true
    },
    course:{
       type:String,
       required:true
    }

})

const Grade=mongoose.model('Grade',gradeSchema);

export default Grade;