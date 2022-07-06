const { v4: uuidv4 } = require('uuid');
uuidv4();
const HttpError = require('../models/http-error');

let USERS = [
    {
        id: 'u1',
        name: 'Saleheen Shafiq',
        email: 'saleheen.shafiq100@gmail.com',
        password: 'iit123'
    }
];

const getUsers = (req, res, next) => {
    res.json({ users: USERS });
  };
  
  const register = (req, res, next) => {
    const { name, email, password } = req.body;
  
    const hasUser = USERS.find(u => u.email === email);
    if (hasUser) {
      return next(new HttpError('Could not create user, email already exists.', 422));
    }
  
    const createdUser = {
      id: uuidv4(),
      name,
      email,
      password
    };
  
    USERS.push(createdUser);
  
    res.status(201).json({user: createdUser});
  };
  
  const login = (req, res, next) => {
    const { email, password } = req.body;
  
    const identifiedUser = USERS.find(u => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
      return next(new HttpError('Could not identify user, credentials seem to be wrong.', 401));
    }
  
    res.json({message: 'Logged in!'});
  };
  
  exports.getUsers = getUsers;
  exports.register = register;
  exports.login = login;
  