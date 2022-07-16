const express = require('express');
const router = express.Router();

// controllers
const userController = require('../controllers/userController');
const postController = require('..controllers/postController')


//localhost:3000/signup
router.post('/signup', userController.createUser, (req, res) => {
    return res.status(200).json(res.locals.user)
})

// locahost:3000
router.post('/', userController.verifyUser, (req, res) => {
  return res.status(200).json(res.locals.user);
})

//localhost:3000/home
router.get('/home', postController.createPost, (req,res) => {
    return res.status(200).json(res.locals.createPost)
})



//localhost8080 => display the login => verify => CHECK
//localhost8000/signup => createUsers signup => CHECK 