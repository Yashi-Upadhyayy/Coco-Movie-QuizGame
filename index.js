
var readlineSync = require('readline-sync');
var score = 0;

var highScores = [{name:"Yashi", score:"10"},{name:"Yy", score:"8"}];

console.log(".....THE 'COCO' MOVIE QUIZ CHALLENGE.....\n");
var name = readlineSync.question("Enter your name: ");
console.log("Welcome "+ name +",\n");
var v = readlineSync.question("Press 'p' to play or any other key to exit: ");

function game(question, answer)
{
  var userAns = readlineSync.question(question);
  if(userAns.toUpperCase() === answer.toUpperCase())
  {
    console.log("Yeah! Right answer!!");
    score = score + 1;
  }
  else
  {
    console.log("Oops! Wrong answer!!");
  }
  console.log("Current score: " + score);
  console.log("---------------------------------------------\n");
}

if(v === 'p')
{
  console.log("\nOk " + name + ", so let's get started!!!\n");
  var questions = [{ q:"1. What is the name of the young boy?\n a. Mario\n b. Miguel\n c. Pablo\nAnswer: ", a:"b"},{ q:"2. Who was his guitar playing hero?\n a. Jimi Hendrix\n b. John Mayer\n c. Ernesto de la Cruz\nAnswer: ", a:"c"},{ q:"3. What is the name of Miguel's dog?\n a. Poco\n b. Dante\n c. Nathenial\nAnswer: ", a:"b"},{ q:"4. What are 'alebrijes'?\n a. Spirit animals\n b. Ghosts\n c. Travelling Musician\nAnswer: ", a:"a"},{ q:"5. What kind of business does Miguel's family run?\n a. Shoemakers\n b. Pet Shop\n c. Guitar repair\nAnswer: ", a:"a"},{ q:"6. Who did Miguel borrow the guitar from?\n a. Cruz\n b. Hector\n c. Poco\nAnswer: ", a:"a"},{ q:"7. Which song did Miguel play for Coco?\n a. Un Poco Loco\n b. Remember Me\n c. La Llorona\nAnswer: ", a:"b"},{ q:"8. What did Miguel take from the graveyard which made him connect with the spirit world?\n a. Flowers\n b. Cross\n c. Guitar\nAnswer: ", a:"c"},{ q:"9. Who did Miguel team up with in the dead land?\n a. Pepita\n b. Julio\n c. Hector\nAnswer: ", a:"c"},{ q:"10. What happened to Mama Coco's dad?\n a. was killed\n b. ran off\n c. died in an accident\nAnswer: ", a:"a"}];


  for(var i = 0; i < questions.length; i++)
  {
    var cur_que = questions[i].q;
    var cur_ans = questions[i].a;
    game(cur_que, cur_ans);
  }
  console.log("YAY!! \nYour final score: " + score);
  console.log("\n---------------------------");
  console.log("    LIST OF HIGH SCORES    ");
  console.log("---------------------------");
  for(var i = 0; i < highScores.length; i++)
  {
    console.log((i+1) + ") " + highScores[i].name + " - " + highScores[i].score);
  }
}
else
{
  console.log("\nExited successfully!!!");
}
    