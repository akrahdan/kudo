const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const requireLogin = require('../middlewares/requireLogin');



const Review = mongoose.model('reviews');

module.exports = app => {
  app.get('/api/reviews', requireLogin, async (req, res) => {
    const reviews = await Review.find({ _user: req.user.id });
    res.send(reviews);
  });


  app.post('/api/reviews', requireLogin, async (req, res) => {
    const { content, rating } = req.body;

    const review = new Review({
      rating,
      content,
      _user: req.user.id,
      dateSent: Date.now()
    });

    try {
      await review.save();
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/shareReview', requireLogin, async (req, res) => {

    fetch(`https://graph.facebook.com/v2.8/${req.user.uid}/feed`,{
      method: 'POST',
      body: JSON.stringify({
          access_token: req.body.access_token,
          message: req.body.message
      }),
      headers: { "content-type": "application/json"}
    })
    .then(response => response.json())
    .then(json => {
      res.send(json)
    })
    .catch(e => alert(e));


  });
};
