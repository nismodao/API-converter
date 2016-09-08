const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();
const PORT          = process.env.PORT || 3000;
const route         = require('./controller');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  res.contentType('application/json');
  next();
});

app.get('/vehicles/:id', route.getVehicle); 

app.get('/vehicles/:id/doors', route.getSecurity);

app.get('/vehicles/:id/fuel', route.getRange);

app.get('/vehicles/:id/battery', route.getRange);

app.post('/vehicles/:id/engine', route.activate);

app.listen(3000, function () {
  console.log('Express listening on port ' + PORT + '!');
});