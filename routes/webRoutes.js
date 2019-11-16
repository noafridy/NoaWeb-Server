var express = require('express');
var router = express.Router();
var WebModel = require('../models/web')  //שלב 4- יוצרת משתנה למודל כדי שאשתמש בו


router.get('/', async (req, res, next) => {
    try {
      const result = await WebModel.find();
      res.send(result);
    } catch (e) {    //e its erorr
      res.status(404).send("Erorr : " + e);  //e will sent to the cliant in the massege
    }
  });

module.exports = router;