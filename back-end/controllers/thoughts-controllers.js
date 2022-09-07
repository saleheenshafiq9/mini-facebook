const { v4: uuidv4 } = require('uuid');
uuidv4();
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const ThoughtModel = require('../models/thoughts-model');
const UserModel = require('../models/users-model');
const { default: mongoose } = require('mongoose');

let THOUGHTS = [
    {
        id: 'c1',
        caption: 'OMG! CR7 is leaving man utd...again. So we need a striker badly. Any decent striker available in the market? 😶😶😶',
        postmaker: 'Saleheen Shafiq',
        creator: 'u1',
        time: '18 hours ago',
        image: '../../Assets/self.jpg'
    },
    {
        id: 'c2',
        caption: 'Some birds are not meant to be caged. Their feathers are too bright, their songs too sweet and wild. So you let them go, or when you open the cage to feed them they somehow fly out past you. And the part of you that knows it was wrong to imprison them in the first place rejoices, but still, the place where you live is that much more drab and empty for their departure.',
        postmaker: 'Saleheen Shafiq',
        creator: 'u1',
        time: '2 days ago',
        image: '../../Assets/self.jpg'
    },
    {
        id: 'c3',
        caption: "We’re finding it difficult to recall simple things: names of friends and co-workers we haven't seen in a while, words that should come easily, even how to perform routine acts.",
        postmaker: 'Saleheen Shafiq',
        creator: 'u1',
        time: '2 days ago',
        image: '../../Assets/self.jpg'
    }
]

const getThoughtById = async (req, res, next) => {

    let thoughts;
      try{
          thoughts = await ThoughtModel.find({}, '-image');
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

    // let user;

    // try{
    //     user = await UserModel.findById(creator)
    // } catch {
    //     const error = new HttpError(
    //         'Creating thoughts failed. Please try again',
    //         500
    //     )
    //     return next(error);
    // }

    // if(!user) {
    //     const error = new HttpError(
    //         'Could not find user for provided ID',
    //         404
    //     )
    //     return next(error);
    // }

    try{
        // const sess = await mongoose.startSession();
        // sess.startTransaction();
        // await postThought.save({ session: sess });
        // UserModel.thoughts.push(postThought);
        // await UserModel.save({ session: sess });
        // await sess.commitTransaction();
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