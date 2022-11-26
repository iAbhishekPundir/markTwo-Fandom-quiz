import chalk from 'chalk';
import readlineSync from 'readline-sync';

var userName = readlineSync.question(chalk.blue("Enter your Name? "));
console.log(chalk.blue("Hello ") + chalk.blue(userName) + "!");
console.log(chalk.yellow("Welcome to Cricket-Quiz App."));
var score = 0; //score global variable

console.log(chalk.blue(chalk.white.bgGreen("In this quiz, you will be awarded 1 point for each correct answer.\n")));
console.log(chalk.red("Let's get started! \n"));
//highScore data
var highScores = [
  {
    name: "kunal",
    score: 8
  },
  {
    name: "abhi",
    score: 5
  }
];

var questions = [
  {
    num: "1",
    question: "1. What are the small pieces of wood on top of the stumps called",
    a: "A. Bails",
    b: "B. Sticks",
    c: "C. Stumpettes",
    d: "D. Toothpicks",
    ans: "a"
  },
  {
    num: "2",
    question: "2. Who won the first ever ODI ICC Men's World cup? ",
    a: "A. India",
    b: "B. Australia",
    c: "C. South Africa",
    d: "D. West Indies",
    ans: "d"
  },
  {
    num: "3",
    question: "3. How much is the distance between the wickets? ",
    a: "A. 24 yards",
    b: "B. 22 yards",
    c: "C. 15 yards",
    d: "D. 16 yards",
    ans: "b"
  },
  {
    num: "4",
    question: "4. How many types of bowlers are there? ",
    a: "A. 2",
    b: "B. 6",
    c: "C. 3",
    d: "D. 4",
    ans: "a"
  },
  {
    num: "5",
    question: "5. Who is the first batsman to cross 10,000 runs in tests? ",
    a: "A. Sunil Gavaskar",
    b: "B. Sachin Tendulkar",
    c: "C. Allan Border",
    d: "D. Don Bradman",
    ans: "a"
  },
  {
    num: "6",
    question: "6. Which has won most number of ICC World Cups? ",
    a: "A. India",
    b: "B. Australia",
    c: "C. England",
    d: "D. Pakistan",
    ans: "b"
  },
  {
    num: "7",
    question: "7. What is the nickname of Sachin Tendulkar? ",
    a: "A. The Genius",
    b: "B. The Grand Master",
    c: "C. Expert of Cricket",
    d: "D. Master Blaster",
    ans: "d"
  },
  {
    num: "8",
    question: "8. Which player has scored most ducks in International Cricket? ",
    a: "A. Muttiah Muralitharan",
    b: "B. S T Jayasuriya	",
    c: "C. Shahid Afridi",
    d: "D. Aakash Chopra",
    ans: "a"
  },
  {
    num: "9",
    question: "9. Which player has All-Time Highest ICC Men's Batting T20I ratings? ",
    a: "A. Virat Kohli",
    b: "B. Aaron Finch",
    c: "C. Dawid Malan",
    d: "D. Babar Azam",
    ans: "c"
  },
  {
    num: "10",
    question: "10. Which is the only bowler from India to take 10 wickets in a single match? ",
    a: "A. Jasprit Bumrah",
    b: "B. Anil Kumble",
    c: "C. Harbhajan Singh",
    d: "D. Ravichandran Ashwin",
    ans: "b"
  },
  {
    num: "11",
    question: "11. Which player holds the record of fastest delivery till date? ",
    a: "A. Brett Lee",
    b: "B. Mitchell Starc",
    c: "C. Umran Malik",
    d: "D. Shoaib Akhtar",
    ans: "d"
  },
  {
    num: "12",
    question: "12. Where did cricket originate? ",
    a: "A. India",
    b: "B. Australia",
    c: "C. South Africa",
    d: "D. England",
    ans: "d"
  },
  {
    num: "13",
    question: "13. What does LBW stand for? ",
    a: "A. Long Ball Wide",
    b: "B. Leg Beyond Width",
    c: "C. Leg Before Wicket",
    d: "D. Lol'Bout to Win",
    ans: "c"
  },
  {
    num: "14",
    question: "14. What do you call a referee in cricket? ",
    a: "A. An Umpire",
    b: "B. A vampire",
    c: "C. A cricketferee",
    d: "D. Refree",
    ans: "a"
  },
  {
    num: "15",
    question: "15. Who has hit the longest six in cricket history? ",
    a: "A. Shahid Afridi",
    b: "B. Yuvraj Singh",
    c: "C. Liam Livingstone",
    d: "D. Brett Lee",
    ans: "a"
  },
  {
    num: "16",
    question: "16. Who has scored the most runs in an ODI match? ",
    a: "A. Martin Guptil",
    b: "B. Virender Sehwag",
    c: "C. Sachin Tendulkar",
    d: "D. Rohit Sharma",
    ans: "d"
  },

];


function play(QnA) {
  console.log(QnA.question + "\n");
  console.log(QnA.a + "\n");
  console.log(QnA.b + "\n");
  console.log(QnA.c + "\n");
  console.log(QnA.d + "\n");


  var userAnswer = readlineSync.question("Enter your Answer Option: ");

  if (QnA.ans === userAnswer.toLowerCase()) {
    console.log(chalk.green("\nYou are right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("\nYou are wrong! "));
    console.log(chalk.greenBright("Correct Option is ") + QnA.ans.toUpperCase() + ".");
  }
  console.log(chalk.blue("Your current score is:"), chalk.red(score) + "\n");
}

function go() {
  for (var i = 0; i < questions.length; i++) {
    play(questions[i]);
  }
  console.log(chalk.red("***You have completed the Quiz.***\n"));
}

function calScore() {
  console.log(chalk.yellow("Your final score is:"), chalk.green(score));

  console.log("\n");

  for (var i = 0; i < highScores.length; i++) {
    if (score >= highScores[i].score) {
      var newEntry = {
        name: userName,
        score: score
      };
      highScores.push(newEntry);
      break;
    }
  }
}

function printLeaderBoard() {
  console.log(chalk.red("-----------Game Over-----------\n"));
  console.log(chalk.blue("Here is the LeaderBoard -> \n"));
  for (var j = 0; j < highScores.length; j++) {
    var name = highScores[j].name;
    var score = highScores[j].score;
    console.log("Name: " + chalk.green(name) + ", Score:", chalk.green(score));
    console.log("\n");
  }
}

go();
calScore();
printLeaderBoard();
console.log(chalk.blue("Thankyou for your time and patience! \nIf you enjoyed playing the quiz, then please share it with Friends"));
