var user = require('../user.js');
var skills = require('../skillz.js')
var secrets = require('../secrets.js');

module.exports = {
  getUser: function(req, res) {
    res.status(200).json({ user : user })
  },
  getName: function(req, res) {
    res.status(200).json({ name : user.name })
  },
  getLocation: function(req, res) {
    res.status(200).json({ location : user.location })
  },
  getOccupations: function(req, res) {
    const orderBy = req.query.order
    if(orderBy){
      if(orderBy === "asc"){
        var occAsc = [... user.occupations]
        return res.status(200).json({ occupations : occAsc.sort() })
      }
      else if(orderBy === "desc"){
        var occDec = user.occupations.slice()
        return res.status(200).json({ occupations : occDec.sort().reverse() })
      }
      return res.status(200).json({ occupations : user.occupations })
    }
    res.status(200).json({ occupations : user.occupations })
  },
  getOccupationLatest: function(req, res) {

    res.status(200).json({ latestOccupation : user.occupations.slice(-1) })
  },
  getHobbies: function(req, res) {
    res.status(200).json({ hobbies : user.hobbies })
  },
  getHobbyType: function(req, res) {
    const type = req.params.type
    const hobbyType = user.hobbies.filter(hobby => hobby.type === type)
    res.status(200).json({ hobbies : hobbyType})
  },
  getFamily: function(req, res) {
    if(req.query.relation){
      const relation = req.query.relation
      const matchRelation = user.family.filter(type => type.relation === relation)
      res.status(200).json({ family : matchRelation })
    }
    res.status(200).json({ family : user.family })
  },
  getFamilyByGender: function(req, res) {
    const defGender = req.params.gender
    const filterByGen = user.family.filter(famMem => famMem.gender === defGender)
    res.status(200).json({ family : filterByGen})
  },
  getRestaurant: function(req, res) {
    if(req.query.rating){
      const rating = req.query.rating
      const filterRes = user.restaurants.filter(ele => ele.rating > rating)
      res.status(200).json({ restaurants : filterRes })
    }
    res.status(200).json({ restaurants : user.restaurants })
  },
  getRestaurantByName: function(req, res) {
    const resName = req.params.name
    const filterByName = user.restaurants.filter(ele => ele.name.toLowerCase() === resName.toLowerCase())
    res.status(200).json({ restaurants : filterByName})
  },
  putName: function(req, res) {
    user.name = req.body.name
    res.status(200).json(user)
  },
  putLocation: function(req, res) {
    user.location = req.body.location
    res.status(200).json(user)
  },
  postHobbies: function(req, res) {
    user.hobbies.push(req.body)
    res.status(200).json(user)
  },
  postOccupations: function(req, res) {
    user.occupations.push(req.body.occupation)
    res.status(200).json(user)
  },
  postFamily: function(req, res) {
    user.family.push(req.body)
    res.status(200).json(user)
  },
  postRestaurants: function(req, res) {
    user.restaurants.push(req.body)
    res.status(200).json(user)
  },
  getSkills: function(req,res){
    if(req.query.experience){
      const experience = req.query.experience
      const filterExp = skills.filter(ele => ele.experience.toLowerCase() === experience.toLowerCase())
      res.status(200).json({ skills : filterExp })
    }
    res.status(200).json(skills)
  },
  postSkills: function(req, res) {
    skills.push(req.body)
    res.status(200).json(skills)
  },
  getSecrets: function(req,res){
    res.status(200).json(secrets)
  }


}
