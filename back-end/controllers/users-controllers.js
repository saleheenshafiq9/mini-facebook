const { v4: uuidv4 } = require('uuid');
uuidv4();
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const UserModel = require('../models/users-model');

let USERS = [
    {
        id: 'u1',
        name: 'Saleheen Shafiq',
        email: 'saleheen.shafiq100@gmail.com',
        password: 'iit123'
    }
];

const getUsers = async (req, res, next) => {
      try{
          const userRecords = await UserModel.find();
          res.json(userRecords);
      }catch{
        res.send("error")
      }
  };
  
  const register = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return next(new HttpError('Invalid Inputs. Please check again', 422))
    }

    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
  
    // const hasUser = UserModel.findOne({
    //   email: newUser.email
    // });

    // if (hasUser) {
    //   return next(new HttpError('Could not create user, email already exists.', 422));
    // }

      try{
          const u1 = await newUser.save();
          res.json(u1);
      }catch(err){
          return next(new HttpError('Invalid Inputs. Please check again', 422)) 
      }
  
  };
  
  const login = (req, res, next) => {
    const { email, password } = req.body;
  
    const identifiedUser = UserModel.find(u => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
      return next(new HttpError('Could not identify user, credentials seem to be wrong.', 401));
    }
  
    res.json({message: 'Logged in!'});
  };
  
  exports.getUsers = getUsers;
  exports.register = register;
  exports.login = login;
  