 module.exports = {

    uploadView :(req,res)=>{
        res.render ("upload")
    },
    uploadOk: (req,res)=>{
        res.send("image upload")
    }

 }