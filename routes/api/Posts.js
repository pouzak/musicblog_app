require("dotenv").config();
const express = require('express');
const router = express.Router();
var multer  = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require("multer-storage-cloudinary");


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
    });
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "app",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 1000, height: 700, crop: "limit" }]
    });
const parser = multer({ storage: storage });



//post model
const Post = require('../../models/Post');



//GET POSTS

router.get('/posts',async (req, res) => {
    try {
    const posts = await Post.find().sort({date: -1});
      //const ok = json(post);
      res.send(posts);
    } catch (err) {
        res.status(500).send({ err: 'Something failed!' });
      
    }
  })
 

  //CREATE POST //save to cloudinary
  router.post('/create', parser.array('image', 10), async (req, res) => {
    //console.log(req.files)
    const imgid = req.files.map(img => { return img.public_id})
    const imgurl = req.files.map(img => { return img.url})
    const newPost = new Post({
        name: req.body.name,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
        imageid: imgid,
        imageurl: imgurl
    });
    try {
        const saved = await newPost.save();
          res.json({ msg: 'Success' });
        } catch (err) {
            res.status(500).json({ err: 'Something failed!' });
          
        }
    
  });



  //GET SINGLE POST

  router.get('/post/:id', async (req, res) => {
    try{
    const findpost = await Post.findById(req.params.id);
    res.send(findpost);
    
    } catch (err) {
        res.status(500).json({ err: 'Something failed!' });
    }

})

//DELETE

router.delete('/del/:id', async (req, res) => {
    try {
        const findpost = await Post.findById(req.params.id);
    
        findpost.imageid.map(img => {
        cloudinary.v2.uploader.destroy(img, function(error, result){res.json(result, error)});
    })
        const post = await Post.findOneAndDelete({_id: req.params.id});
        res.status(200).json({ msg: 'Success' });
        
    }catch (err){
        res.status(500).json({ err: 'Something failed!' });
    }
})



module.exports = router;