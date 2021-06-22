const express=require('express');
const router=express.Router();
const Post=require('../models/Posts')

//get the older post
router.get('/',async (req,res)=>{
    try {
        const post=await Post.find();
        res.json(post);
    } catch (error) {
        res.json({message:error});
    }
})

//submit post
router.post('/',async (req,res)=>{
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });
  
   try {
    const savePost=await post.save();
    res.json(savePost);
   } catch (error) {
       res.json({message:error})
   }

})

//specific post

router.get("/:postid",async (req,res)=>{
   try {
       const post=await Post.findById(req.params.postid);
       res.json(post);
   } catch (error) {
       res.json({message:error});
   }
})

//delete post
router.delete('/:postid',async (req,res)=>{

    try {
       const postsRemove=await Post.remove({_id:req.params.postid});
       res.json(postsRemove); 
    } catch (error) {
        res.json({message:error});
    }

})


//update
router.patch("/:postid",async (req,res)=>{
try {
    const updatePost=await Post.updateOne(
        {_id:req.params.postid},
        {$set:{title:req.body.title}}
        );
res.json(updatePost);
} catch (error) {
    res.json({message:error});
}    
})


module.exports=router;
