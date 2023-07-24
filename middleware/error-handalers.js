const errorHandlerMiddleware = (err,req,res,next) => {
    console.log(err);
    return res.Status(err.Status).json({msg:err.message})
} 

module.exports = errorHandlerMiddleware