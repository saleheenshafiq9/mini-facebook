const { v4: uuidv4 } = require('uuid');
uuidv4();
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const ThoughtModel = require('../models/thoughts-model');
const UserModel = require('../models/users-model');
const { default: mongoose } = require('mongoose');

const getThoughtById = async (req, res, next) => {

    let thoughts;
      try{
          thoughts = await ThoughtModel.find({});
      }catch{
        const error = new HttpError(
          'Fetching thoughts failed.',
          500
        )
        return next(error);
      }
      res.json({ thoughts: thoughts.map(thought => thought.toObject({ getters: true }))})

}

const getThoughtsByUserId = async (req, res, next) => {

    try{
        const thoughtRecord = await ThoughtModel.find({
            creator: req.params.uid
        });
        res.json(thoughtRecord);
    }catch{
        return next(
            new HttpError('No Thoughts Found for the provided User', 404)
            );
    }
    
}

const createThought = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return next(new HttpError('Invalid Inputs. Please check again', 422))
    }

    

    const postThought = new ThoughtModel({
        caption: req.body.caption,
        postmaker: req.body.postmaker,
        creator: req.body.creator,
        time: req.body.time,
        image: req.body.image,
    })

    try{
        const t1 = await postThought.save();
        console.log(t1);
        res.json(t1);
    }catch(err){
        return next(new HttpError('Invalid Inputs. Please cheasck again', 422)) 
    }

}

exports.getThoughtById = getThoughtById;
exports.getThoughtsByUserId = getThoughtsByUserId;
exports.createThought = createThought;