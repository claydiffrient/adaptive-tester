var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
   text: String,
   correct: {type: Boolean, default: false}
});

var questionSchema = new Schema({
   text: String,
   difficulty: Number,
   timesAsked: {type:Number, default: 0},
   timesCorrect: {type:Number, default: 0},
   answers: [Answer]
});

mongoose.connect('mongodb://localhost/adaptive-tester');

var Question = mongoose.model('Question', questionSchema);
var Answer = mongoose.model('Answer', answerSchema);

var question = new Question({
   text: 'What is the square root of 9?',
   difficulty: .80,
   answers: [new Answer({
      text: '3',
      correct: true
   }), new Answer({
      text: '5'
   }), new Answer({
      text: '18'
   }), new Answer({
      text: '8'
   })]
});

question.save(function (err) {
   if (err) {
      console.log(err);
   }
});




/*
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function callback(){
   var questionSchema = mongoose.schema({

   })
});*/

