const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express();

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

app.use(express.static(__dirname + '/assets'))
// Middleware
app.use(bodyParser.json())
app.use(middleware.addHeaders);

app.get('/user', mainCtrl.getUser)
app.get('/name', mainCtrl.getName)
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupations)
app.get('/occupations/latest', mainCtrl.getOccupationLatest)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobbies/:type', mainCtrl.getHobbyType)
app.get('/family', mainCtrl.getFamily)
app.get('/family/:gender', mainCtrl.getFamilyByGender)
app.get('/restaurants', mainCtrl.getRestaurant)
app.get('/restaurants/:name', mainCtrl.getRestaurantByName)
app.put('/name', mainCtrl.putName)
app.put('/location', mainCtrl.putLocation)
app.post('/hobbies', mainCtrl.postHobbies)
app.post('/occupations', mainCtrl.postOccupations)
app.post('/family', mainCtrl.postFamily)
app.post('/restaurants', mainCtrl.postRestaurants)
app.get('/skillz', mainCtrl.getSkills)
app.post('/skillz', middleware.generateID ,mainCtrl.postSkills)
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets)

app.listen(port, function(){
  console.log(`Listening on ${port}`)
})
