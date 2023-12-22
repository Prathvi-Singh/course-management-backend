import multer  from 'multer'
import { GridFsStorage} from 'multer-gridfs-storage'
import dotenv from 'dotenv'

dotenv.config();
var URL=process.env.URL;

const storage =new GridFsStorage({
    url:URL,
    options : {useNewUrlParser : true},
    file : (request,file) => {
      
        const match = ['image/png','image/jpeg','image/pdf','image/jpg','image/gif','image/avif','image/cpp','image/c','image/py','image/xslx'];
       
        if(match.indexOf(file.memeType)===-1){
            return `${Date.now()}-iiitdm-${file.originalname}`
        }
        return {
            bucketName:"photos",
            filname:`${Date.now()}-iiitdm-${file.originalname}`
        }
    }
})

export default multer({storage});