const { v4: uuidv4 } = require('uuid');
uuidv4();
const HttpError = require('../models/http-error');

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

const getThoughtById = (req, res, next) => {
    const thoughtId = req.params.cid;
    const thought = THOUGHTS.find(t => {
        return t.id === thoughtId;
    })
    console.log(thought);
    if(!thought) {
        return next(
            new HttpError('No Thoughts Found for the provided ID', 404)
            );
    }

    res.json({thought});
}

const getThoughtsByUserId = (req, res, next) => {
    const userId = req.params.uid;

    const thoughts = THOUGHTS.filter(t => {
        return t.creator === userId;
    })

    if(!thoughts || thoughts.length === 0) {
        return next(
            new HttpError('No Thoughts Found for the provided User', 404)
        );
    }
    
    res.json({thoughts});
}

const createThought = (req, res, next) => {
    const { caption, postmaker, creator, time, image } = req.body;
    const createdThought = {
        id: uuidv4(),
        caption,
        postmaker,
        creator,
        time,
        image
    }

    THOUGHTS.unshift(createThought);
    res.status(201).json({thought: createdThought});
}

exports.getThoughtById = getThoughtById;
exports.getThoughtsByUserId = getThoughtsByUserId;
exports.createThought = createThought;