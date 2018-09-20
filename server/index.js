const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const { getReviews, getHost } = require('./model');

const app = express();

app.use(cors());
app.use('/:id', express.static('./public'));
app.use(parser.json());

app.get('/reviews/:id', (req, res) => {
  console.log('inside proxy reviews');
  const home = req.params.id;
  getReviews(home, (reviews) => {
    getHost(home, (host) => {
      const message = {
        reviews: reviews.reviews,
        host: host.host,
      };
      res.send(message);
    });
  });
});

app.listen(3004, () => console.log('listening on port 3004'));
