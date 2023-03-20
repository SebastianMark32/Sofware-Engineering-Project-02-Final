const {validationResult} = require('express-validator');
const Post = require('../models/post');


exports.fetchAll = async (req,res,next)=>{
    try{    
        const [allPosts] =await Post.fetchAll();

        res.status(200).json(allPosts);
    }catch(err){
        console.log(err);
            if (!err.statusCode){
                console.log("error!");
                err.statusCode = 500;
            } 
            next(err)
        }
};

exports.deletePost = async (req,res,next)=>{
    try{    
        const deleteresponse =await Post.delete(req.params.id);
        res.status(200).json({deleteresponse});
    }catch(err){
        console.log(err);
            if (!err.statusCode){
                console.log("error!");
                err.statusCode = 500;
            } 
            next(err)
        }
}


exports.postPost = async (req,res,next) =>{
    const errors = validationResult(req);

    
    if (!errors.isEmpty()) return
    
    const title = req.body.title;
    const body = req.body.body;
    const user = req.body.user;

    try{  
        
        
        const postDetails = {
            title:title,
            body:body,
            user: user
        }
        
        const result = await Post.save(postDetails)
        

        res.status(201).json({ message: 'Posted'})
    } catch(err){
        console.log(err);
        if (!err.statusCode){
            console.log("error!");
            err.statusCode = 500;
        } 
        next(err)
    }



};

