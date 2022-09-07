const { v4: uuidv4 } = require('uuid');
uuidv4();
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const UserModel = require('../models/users-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

let USERS = [
    {
        id: 'u1',
        name: 'Saleheen Shafiq',
        email: 'saleheen.shafiq100@gmail.com',
        password: 'iit123'
    }
];

const getUsers = async (req, res, next) => {
  let users;
      try{
          users = await UserModel.find({}, '-password');
      }catch{
        const error = new HttpError(
          'Fetching users failed.',
          500
        )
        return next(error);
      }
      res.json({ users: users.map(user => user.toObject({ getters: true }))})
  };
  
  const register = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return next(new HttpError('Invalid Inputs. Please check again', 422))
    }

    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      image: req.file.path,
      password: req.body.password,
      thoughts: [],
      stories: []
    })
  
    // let existingUser = null;
    // try{
    //     existingUser = await UserModel.findOne({email: email})
    //   } catch {
    //     return next(new HttpError('Could not sign up, unknown error found.', 422));
    //   }

    //   if(existingUser) {
    //     const error = new HttpError('User exists already, please login instead.', 422);
    //     return next(error);
    //   }


      try{
          const u1 = await newUser.save();
      }catch(err){
          return next(new HttpError('Invalid Inputs. Please check again', 422)) 
      }
      
      let token;
      try {
        token = jwt.sign({userId: newUser.id, email: newUser.email}, 'supersecret_dont_share', {expiresIn: '1h'})
      } catch (err) {
        return next(new HttpError('Signup failed', 500));
      }
      
      res.status(201).json({userId: newUser.id, email: newUser.email, token: token})
  };
  
  const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;

    try{
      existingUser = await UserModel.findOne({ email: email })
    } catch (err){
      const error = new HttpError('Login failed. Try again later.', 500);
      return next(error);
    }
  
    if (!existingUser || existingUser.password !== password) {
      return next(new HttpError('Could not identify user, credentials seem to be wrong.', 401));
    }

    let token;
      try {
        token = jwt.sign({userId: existingUser.id, email: existingUser.email}, 'supersecret_dont_share', {expiresIn: '1h'})
      } catch (err) {
        return next(new HttpError('Login failed', 500));
      }
    
    res.json({userId: existingUser.id, email: existingUser.email, token: token, name: existingUser.name, image: existingUser.image});
  };
  
  exports.getUsers = getUsers;
  exports.register = register;
  exports.login = login;
  