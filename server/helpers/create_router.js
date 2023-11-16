const express = require('express');
const { ObjectId } = require('mongodb');


const handleErrorWRONG = err => {
  console.error(err)
  res.status(500)
  res.json({ status: 500, error: err })
} 

const createRouter = function (collection) {

    const router = express.Router();

    // INDEX
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then(docs => res.json(docs))
      .catch(err => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
      })
  })

  // SHOW
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: new ObjectId(id) })
      .then(doc => res.json(doc))
      .catch(err => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
      })
  })

  router.post('/', (req, res) => {
    const newData = req.body;
    collection
      .insertOne(newData)
      .then(result => {
        res.json({ _id: result.insertedId })
      })
      .catch(err => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
      })
  })

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: new ObjectId(id) })
      .then(result => res.json(result))
      .catch(err => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
      })
  })

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body
    collection
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData }
      )
      .then(result => res.json(result))
      .catch(err => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
      })
  })

        return router;
    };

    module.exports = createRouter;