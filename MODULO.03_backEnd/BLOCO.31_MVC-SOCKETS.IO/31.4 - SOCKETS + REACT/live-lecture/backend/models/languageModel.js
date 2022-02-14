const connection = require('./connection')
const { ObjectID } = require("mongodb");

const getAll = () => connection().then(db => db.collection('languages').find({}).toArray());

const increaseVotes = (id) => connection().then(db => db.collection('languages')
  .updateOne(
    { _id: ObjectID(id) },
    { $inc: { votes: 1} },
));

const getById = (id) => connection().then(db => db.collection('languages')
.findOne({ _id: ObjectID(id) }));

module.exports = { 
  getAll,
  increaseVotes,
  getById
}