// שלב 3- יצירת מודל דאטה בייס
//in mongo DB its collections and table its documents, 1 json its document

const mongoose = require('mongoose');  //משתנה מונגוס// התחברות למונגוס
var Schema= mongoose.Schema;  //משתנה סכמה שיצרנו

//יצירת והגדרת סכמה עם עמודות בדאטה בייס
const Web = mongoose.model('Web', new Schema({
    name:String,  // אות גדולה!
    email:String,
    phone:Number,
    message:String,
    date:Date
}))

module.exports = Web;   //ייצוא סכמה