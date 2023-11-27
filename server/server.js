const express = require('express');
require("dotenv").config();
const app = express();
const createRouter = require('./helpers/create_router');
const cors = require('cors')
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.REACT_APP_MONGODB_URI;

// middleware
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 9000;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
app.get('/api/quiz', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('drWhoQuiz');
    const quizCollection = database.collection('quizScores');

    const quizzes = await quizCollection.find().toArray();
    res.json(quizzes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

// MongoClient.connect(uri, {useUnifiedTopology: true})
//   .then(client => {
//     const db = client.db('drWhoQuiz');
//     const quizCollection = db.collection('quizScores')
//     const quizRouter = createRouter(quizCollection)
//     app.use('/api/quizzes', quizRouter)
//   })
//   .catch(console.error)

app.listen(port, function () {
  console.log(`Listening on port ${ this.address().port }`);
});