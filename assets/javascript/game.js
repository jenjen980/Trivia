var time = 30;
var correct = 0;
var counter = 0;
var questionIndex = -1;
var answerIndex = -1;
var arrayPos=0;
var quiz;
var quiz_status;
var question;
var choice;
var choices;
var choiceA;
var choiceB;
var choiceC;


//$(document).ready(function(){

    //Questions, choices, and answers held in an array.
    var questions = [
        ["Name the world's biggest island?", "Finland", "Greenland", "Japan", "B"],
        ["Name the world's largest ocean?", "Atlantic", "Artic", "Pacific", "C"],
        ["What sweet food is made by bees using nector from flowers?", "Honey", "Sap", "Pollen", "A"],
        ["What country is home to the kangaroo?", "New Zeland", "Asia", "Australia", "C"],
        ["What tree do acorns come from?", "Oak", "Fir", "Maple", "A"],
        ["How many colors are in a rainbow?", "7", "8", "6", "A"],
        ["Pharoah is the title given to the rulers in which ancient country?", "Rome", "Egypt", "Greece", "B"],
        ["On a farm a kid is a baby what?", "Pig", "Goat", "Cow", "B"],
        ["What english kind had six wives?", "Henry IV", "Henry II", "Henry VIII", "C"],
        ["What does Fred Flintstone wear around his neck?", "Tie", "Bowtie", "Necklace", "A"]

    ];

    //function to send and retrieve from html
    function _(x){
        return document.getElementById(x);
      
      }

      //function to show the questions
      function renderQuestion(){
          decrement();
        quiz =_("quiz");
        if(arrayPos >= questions.length){
          quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
          _("quiz_status").innerHTML = "quiz Completed";
          arrayPos = 0;
          correct = 0;
          return false;
        }
        //pulling the info out of the array and displaying it on the page with radio buttons.
        _("quiz_status").innerHTML = "Question "+(arrayPos +1)+" of "+questions.length;
        question = questions[arrayPos][0];
        choiceA = questions[arrayPos][1];
        choiceB = questions[arrayPos][2];
        choiceC = questions[arrayPos][3];
        quiz.innerHTML = "<h3>" +question+ "</h3>";
        quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+choiceA+"<br>";
        quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+choiceB+"<br>";
        quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+choiceC+"<br>";
        quiz.innerHTML += "<button onclick='checkAnswer()'>Submit</button>";
      }

      //function to check the answers that are inputted by the user
      function checkAnswer(){
        choices = document.getElementsByName("choices");
        for(var i=0; i<choices.length; i++){
          if(choices[i].checked){
            choice = choices[i].value;
          }
        }
        if(choice == questions[arrayPos][4]){
          correct++;
        }
        arrayPos++;
        renderQuestion();
    }
    //loads and shows the questions to the screen.
    window.addEventListener("load", renderQuestion, false);


    //countdown timer
    function decrement() {
        time--;
        timesUp.innerHTML=('<div class = timeRemaining>' + 'Time Remaining:' + time + '</div>');
       //$(".timesUp").html('<h2>' + time + " seconds"+'</h2>');
            if (time === 0) {
            myStopFunction();
           // alert("Time is up!");
            checkAnswer();

    };
   // console.log(time);

}
    //the interval for the timer.
      var timer = setInterval(decrement, 1000);


      //function that clears the timer when it has stopped.
      function myStopFunction(){
        clearInterval(timer);
        
      };

    

    // var theQuestions=[{
    
    //     question: "Name the world's biggest island?",
    //     id: "question_1",
    //     answers: {
    //         a: "Finland", 
    //         b: "Greenland", 
    //         c: "Japan", 
    //     //correctAnswer: "b"
    //     },
    //      correctAnswer: "b"
        
    //     }, 
    //     {
    //     question: "Name the world's largest ocean?",
    //     id: "question_2",
    //     answers: {
    //         a: "Atlantic", 
    //         b: "Artic", 
    //         c: "Pacific", 
    //    // correct_answer: "c"
    //     },
    //     correct_answer: "c",
            
    //     },
    //     {
    //     question: "What sweet food is made by bees using nector from flowers?",
    //     answers: {
    //         a: "Honey", 
    //         b: "Sap", 
    //         c: "Pollen", 
    //     },
    //     correct_answer: "a",
                
    //     },
    //     {
    //     question: "What country is home to the kangaroo?",
    //     answers: {
    //         a: "New Zeland", 
    //         b: "Asia", 
    //         c: "Austrailia", 
    //     },
    //     correct_answer: "c",
                
    //     },
    //     {
    //     question: "What tree do acorns come from?",
    //     answers: {
    //         a: "Oak", 
    //         b: "Fir", 
    //         c: "Maple", 
    //     },
    //     correct_answer: "a",
                
    //     },
    //     {
    //     question: "How many colors are in a rainbow?",
    //     answers: {
    //         a: "7", 
    //         b: "8", 
    //         c: "6", 
    //     },
    //     correct_answer: "a",
                
    //     },
    // ]; 
    

    //   function generatingQuestions(){
    //    // console.log(theQuestions[counter].question);
    //    questionIndex++;
    //    //questionCounter++;
    //     //console.log(questionIndex)
    //     $(".question").html(theQuestions[counter].question);
    //     answerChoices();
    //   };

    //  function answerChoices(){

    //     $(".btn0").text(theQuestions[questionIndex].answers.a);
    //     $(".btn1").text(theQuestions[questionIndex].answers.b);
    //     $(".btn2").text(theQuestions[questionIndex].answers.c);

    //     //buttonValue.innerHtml+="<button onclick='checkAnswer()'>Value Button</button>";
    //  };
     //console.log($(".btn0").html(".choice0"));
 
        //  function decrement(){
        //   time--;
        //   $(".timesUp").html('<div class = timeRemaining>' + 'Time Remaining:' + time + '</div>');
        //   if(time === 0){
        //       counter++;
        //       //answerIndex++;
        //      // generatingQuestions();
        //       myStopFunction();
        //       //displayCorAnswer();
              
        //   }

            //console.log(theQuestions[questionIndex].correct_answer);

    //         function displayCorAnswer(){
                
    //                 var newDiv = $('<div class="correctAnswer">');
    //                 correctAnswer = newDiv.text("time is up correct answer" + correct);
    //                // $(".buttonContainer").append(correctAnswer);
               

    //     //     if(questionCounter ===1){
    //     //         var newDiv = $('<div class="correctAnswer">');
    //     //         correctAnswer = newDiv.text("time is up correct answer" + theQuestions[questionIndex].correct_answer);
    //     //         $(".buttonContainer").append(correctAnswer);
    //     //    }
    //     } 
    //   };
      
    
    //   var timer = setInterval(decrement, 1000);
    //   generatingQuestions();
    //   answerChoices();
    //   //myStopFunction();
    //  // checkAnswer();
    

      
    //   function myStopFunction(){
    //     clearInterval(timer);
        
    //   };


 
    // $(".btn0").on("click", function checkAnswer(){
    //    // if(theQuestions[2].question === theQuestions[2].question || theQuestions[4].question === theQuestions[4].question || theQuestions[5].question === theQuestions[5].question){
    //        // correct++;
    //        // console.log(correct);
    //    // };

    // });

    // $(".btn1").on("click", function checkAnswer(){
    //     var answers;
    //     if(){
    //    // if(theQuestions[0].question === theQuestions[questionIndex].question.correct_answer){
    //         correct++;
    //         console.log(correct);
    //         //push.correctAnswer[i];
    //         //console.log(correctAnswer[i]);
    //     };

    // });

  
    // $(".btn2").on("click", function checkAnswer(){
    //     if(theQuestions[1].question){
    //              correct++;
    //              console.log(correct);
            
    //          };


    //     //if(theQuestions[1].question === theQuestions[1].question || theQuestions[3].question === theQuestions[3].question){
    //        // correct++;
    //        // console.log(correct);
    //   //  }
        
    // });
   

   // submit.addEventListener('click', showResults);







//       function checkAnswer(){
//    // document.getElementById("buttons").onclick = function checkAnswer(){
//         // var question1 = document.
//         // console.log(question1);

//         // $(".btn0").on("click", function (){
//         //     console.log("HELLO")
//         // });
//         console.log("GOOD");
//         if(theQuestions[0].question === theQuestions[questionIndex].answers.b){
//             correct++;
//         }
//         if(theQuestions[1].question === theQuestions[questionIndex].answers.c){
//             correct++;
//         }
//     };

        //   if(theQuestions[0].question === theQuestions[questionIndex].answers.b){
        //       correct++;
        //   }
        //   if(theQuestions[1].question === theQuestions[questionIndex].answers.c){
        //       correct++;
        //   }
      //};

     // console.log(theQuestions[0].question);
      //console.log(theQuestions[questionIndex].answers.b);
      //console.log(correct);
    //   function checkAnswer(){  

    //     //var answer = button(on.click)

    //     var answer = document.querySelector('input btn class: checked').value;

    //     if(answer == theQuestions[i].correct_answer){
    //         console.log(correct_answer);
    //         correct++;
    //         $(".correctAnswer").text(correctAnswer);
    //         //push.correctAnswer[];
    //     }
    //     else if(answer == incorrect){
    //         console.log(incorrect);
    //         incorrect++;
    //         $(".incorrectAnswer").text(incorrectAnswer);

    //     }
    

    //     };

        //for(var i=0; i<theQuestions[i].length; i++){
        //if(answer === theQuestions[i].correct_answer){
        //     console.log("correct answer");
        //     correctAnswer++;
        //     $(".correctAnswer").html(correctAnswer);
        //     push.correct_answer[];
        // }
        // else if(answer === incorrect){
        //     console.log("incorrect answer");
        //     incorrectAnswer++;
        //     $(".incorrectAnswer").html(incorrectAnswer);
        //     push.incorrectAnswer[];
        // }
        //}
     // };


    

 