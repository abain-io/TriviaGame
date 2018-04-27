//Hold a list of questions and create an empty array//
// //var questions =
//         question: "What is was the first full length CGI movie?",
//         answers: ["A Bugs Life", "Monsters Inc", "Toy Story", "The Lion King"],
//         correctAnswer: "Toy Story"
//     
    // 
    //     question: "Which NBA team won the most titles in the 90's?",
    //     answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
    //     correctAnswer: "Da Bulls"
//     
// 
// console.log(questions[0].answers[3]);

var timer;

var counter = 10;

function countdown() {
    counter--
    $("#counter").html(counter);
    if (counter === 0) {
        clearInterval(timer)
    }
}

function start() {
    timer = setInterval(countdown, 1000);
}

$( "#start" ).click(function() {
    start();
  });

//   I can't figure out how to do the rest...//

