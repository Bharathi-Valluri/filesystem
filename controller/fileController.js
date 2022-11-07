// const { fail } = require("assert");
const fs = require("fs").promises
const appConst =require('../router/constants')
const creatingFile =(req,res)=>{

    try{
        const{file_name,paragraph} = req.body
        const resp = fs.writeFile(file_name,paragraph) 
        res.status(201).json({
            status:appConst.status.success,
            response:resp,
            message:"Data written successfully "
        })
    }
    catch(error){
        console.log(error.message)
        res.status(404).json({
            status:appConst.status.fail,
            response:null,
            message:"failed to create"
        })
    }
}
const readingFile =async(req,res) =>{
    try {
    const resp = await fs.readFile("./myNewFile.txt")
    console.log(resp.toString())
    res.status(202).json({
        status:appConst.status.success,
        response:resp.toString(),
        message:"Read the file data successfully"
    })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status:appConst.status.fail,
            response:null,
            message:"failed to read"
        })
        
    }
}
const movingFile=async(req,res)=>{
    try {
        const{source,destination}=req.body
        const resp =await fs.rename(source,destination)
        res.status(202).json({
            status:appConst.status.success,
            response:resp,
            message:"shifted the existing file to new file successfully"
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            status:appConst.status.fail,
            response:null,
            message:"failed to shifted the file data"
        })
        
    }
}

module.exports={creatingFile,readingFile,movingFile}