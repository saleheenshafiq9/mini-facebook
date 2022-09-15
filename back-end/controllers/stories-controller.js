const { v4: uuidv4 } = require("uuid");
uuidv4();
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const StoryModel = require("../models/stories-model");
const UserModel = require("../models/users-model");
const { default: mongoose } = require("mongoose");
const path = require("path");

const getStoryById = async (req, res, next) => {
  let stories;
  try {
    stories = await StoryModel.find({});
  } catch {
    const error = new HttpError("Fetching stories failed.", 500);
    return next(error);
  }
  res.json({
    stories: stories.map((story) => story.toObject({ getters: true })),
  });
};

const getStoriesByUserId = async (req, res, next) => {
  try {
    const storyRecord = await StoryModel.find({
      creator: req.params.uid,
    });
    res.json(storyRecord);
  } catch {
    return next(new HttpError("No Stories Found for the provided User", 404));
  }
};

const createStory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid Inputs. Please check again", 422));
  }

  const postStory = new StoryModel({
    postmaker: req.body.postmaker,
    creator: req.body.creator,
    time: req.body.time,
    image: req.file.filename,
  });

  try {
    var Minio = require("minio");

    var minioClient = new Minio.Client({
      endPoint: "127.0.0.1",
      port: 9000,
      useSSL: false,
      accessKey: "GoRpyjZTJLzsFVlF",
      secretKey: "Q9b06VKOrffbrmm2d8ZlK6XKvEfpxKm8",
    });

    const directorypath = path.join("./uploads/images/", req.file.filename);
    minioClient.fPutObject(
      "mybucket",
      req.file.filename,
      directorypath,
      function (err, objInfo) {
        if (err) {
          return console.log("hello");
        }
        console.log("Success", objInfo.etag, objInfo.versionId);
      }
    );

    const s1 = await postStory.save();

    res.json(s1);
  } catch (err) {
    return next(new HttpError("Invalid Inputs. Please check again", 422));
  }
};

exports.getStoryById = getStoryById;
exports.getStoriesByUserId = getStoriesByUserId;
exports.createStory = createStory;
