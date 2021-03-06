var skills = require('../skillz.js')

module.exports = {

  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },
  generateID: function(req,res,next){
    req.body.id = skills.length+1
    console.log(req.body.id)
    next()
  },
  verifyUser: function(req,res,next){
    if(req.params.username === "joe" && req.params.pin === "1234"){
      next()
    }
    else return res.status(401).json({message: "Not Authorized unless your name is Joe and your pin is 1234"})
  }
}
