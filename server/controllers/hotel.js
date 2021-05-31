import Hotel from "../models/hotel";
import Query from "../models/query";
import AnswerQuery from "../models/AnswerQuery";
import fs from "fs";

export const create = async (req, res) => {
  try {
    let fields = req.fields;
    let files = req.files;

    let hotel = new Hotel(fields);
    hotel.postedBy = req.user._id;
    // handle image
    if (files.image) {
      hotel.image.data = fs.readFileSync(files.image.path);
      hotel.image.contentType = files.image.type;
    }

    hotel.save((err, result) => {
      if (err) {
        console.log("saving hotel err => ", err);
        res.status(400).send("Error saving");
      }
      res.json(result);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

export const hotels = async (req, res) => {
  let all = await Hotel.find({})
    .limit(24)
    .select("-image.data")
    .populate("postedBy", "_id name")
    .exec();
  //   console.log(all);
  res.json(all);
};

export const image = async (req, res) => {
  let hotel = await Hotel.findById(req.params.hotelId).exec();
  if (hotel && hotel.image && hotel.image.data != null) {
    res.set("Content-Type", hotel.image.contentType);
    return res.send(hotel.image.data);
  }
};

export const sellerHotels = async (req, res) => {
  let all = await Hotel.find({ postedBy: req.user._id })
    .select("-image.data")
    .populate("postedBy", "_id name")
    .exec();

  res.send(all);
};

export const remove = async (req, res) => {
  let removed = await Hotel.findByIdAndDelete(req.params.hotelId)
    .select("-image.data")
    .exec();
  res.json(removed);
};

export const read = async (req, res) => {
  let hotel = await Hotel.findById(req.params.hotelId)
    .populate("postedBy", "_id name")
    .select("-image.data")
    .exec();
  console.log("Single Hotel ", hotel);
  res.json(hotel);
};

export const update = async (req, res) => {
  try {
    let fields = req.fields;
    let files = req.files;
    let data = { ...fields };
    if (files.image) {
      let image = {};
      image.data = fs.readFileSync(files.image.path);
      image.contentType = files.image.type;
      data.image = image;
    }
    let updated = await Hotel.findByIdAndUpdate(req.params.hotelId, data, {
      new: true,
    }).select("-image.data");
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Hotel update error. Try again");
  }
};

export const searchListings = async (req, res) => {
  const { location, date, bed } = req.body;
  // console.log(location, date, bed);
  const fromDate = date.split(",");
  let result = await Hotel.find({
    from: { $gte: new Date(fromDate[0]) },
    location,
  })
    .select("-image.data")
    .exec();
  res.json(result);
};

export const createQuery = async (req, res) => {
  try {
    let fields = req.fields;
    let query = new Query(fields);
    query.postedBy = req.user._id;

    console.log("Query", query);
    query.save((err, result) => {
      if (err) {
        console.log("saving query err => ", err);
        res.status(400).send("Error saving");
      }
      res.json(result);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

export const queries = async (req, res) => {
  let all = await Query.find({})
    .limit(24)
    .populate("postedBy", "_id name")
    .exec();
  // console.log(all);
  res.json(all);
};

export const readQuery = async (req, res) => {
  let query = await Query.findById(req.params.queryId)
    .populate("postedBy", "_id name")
    .exec();
  // console.log("Single Query ", query);
  res.json(query);
};

export const postBid = async (req, res) => {
  try {
    // console.log("REQQQ", req);
    let fields = req.fields;
    let answerQuery = new AnswerQuery(fields);
    answerQuery.postedBy = req.user._id;
    answerQuery.queryId = req.params.queryId;

    console.log("answerQuery", answerQuery);
    answerQuery.save((err, result) => {
      if (err) {
        console.log("saving answer query err => ", err);
        res.status(400).send("Error saving");
      }
      res.json(result);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

export const allTravelerQueries = async (req, res) => {
  let all = await Query.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .exec();

  res.send(all);
};

export const seeBids = async (req, res) => {
  // console.log("REQQQQ", req.headers.queryid);
  let all = await AnswerQuery.find({ queryId: req.headers.queryid })
    .populate("queryId", "_id")
    .exec();

  res.send(all);
};
