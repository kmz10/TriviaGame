
    //this will be the game object with the questions all avaialable answers and the index of the correct answer

    var questions = [{

        question:"1. What are Goku\s sons names?",
        answers:["Gohan and Goten","Trunks and Pam","Vegeta and Cooler","King Kai and Jamsha"],
        correct:["Gohan and Goten"]
    },{
        question:"2. Who is the prince of all saiyans?",
        answers:["Gogeta","Broly","Bardock","Vegeta"],
        correct:["Vegeta"]

    },{
        question:"3. Who has a third eye in his forehead?",
        answers:["Radditz","Nappa","Tien ShinHan","Cell"],
        correct:["Tien ShinHan"]
    },{
        question:"4. Piccollo is what race?",
        answers:["Neptunian","Saiyan","Namekian","Earthlin"],
        correct:["Namekian"]

    },{
        question:"5. In what planet did Goku and Frieza fought?",
        answers:["Namek","Pluto","Saturn","Tattoine"],
        correct:["Namek"] 
    },{
        question:"6. Android 17 and 18 were created by who?",
        answers:["Dr Gero","Eistein","Steve Jobs","Bill Gates"],
        correct:["Dr Gero"] 
    },{
        question:"7. What transformation did Goku accomplish while fighting Frieza?",
        answers:["Optimus Prime","Venom","Super Saiyan","Hulk"],
        correct:["Super Saiyan"] 
    },{
        question:"8. How many dragon balls do you need to get a wish granted?",
        answers:["10","7","3","5"],
        correct:["7"]  
    },{
    
        question:"9. Who destroy planet vegeta?",
        answers:["Jiren","Cell","Majin Buu","Frieza"],
        correct:["Frieza"]  
    },{
        question:"10. Who came to the future to advice about the androids?",
        answers:["Trunks","Yayirobe","Marty","Cable"],
        correct:["Trunks"]  
    }]




// function to re-use the coundown 
function myCoundown(){
    
       // timer code
       var timeleft = 60;
       var downloadTimer = setInterval(function(){
       timeleft--;
       document.getElementById("countdowntimer").textContent = timeleft;
   
       if(timeleft <= 0)
        // clears the content with the new time
           clearInterval(downloadTimer);
   
      
       if(timeleft == 0) {
                   // once the timer hits zero hides the questions
                   $("#qaContainer").hide();
                   $("#countdowntimer").hide();
                   $("#submit").hide();
                   // shows congratulations
                   $("#reply").show();
                   checkAnswers();
                   
           }
       },1000)
  }


function checkAnswers() {

     // creates the variables for the scores
     var correctAnswer; 
     var correct_number = 0;
     var incorrect_number = 0;
     var unanswered_number = 0;
 
   // creates a for loop for the size of my array so 10 times 
 
     for (var i = 0; i < questions.length; i++) {
        
         // assign the value of my correct answer
         correctAnswer = questions[i].correct;
         console.log(correctAnswer);
 
 
         // if the input with the name question[1,2,3] is checked then assign the value to a variable
         // in this case qa_value will have the value of the radio button
         if ($("input[name=question"+i+"]:checked")) {
           
             var qa_value = $("input[name=question"+i+"]:checked").val();
 
 
             // if the value is correct
             if (correctAnswer == qa_value) {
                 correct_number++;
 
             } else if (qa_value == undefined) {
                     unanswered_number++;
             }
             else {
                     incorrect_number++;
                    
             }
 
             console.log(qa_value);
         }
     
      }
 
         // for debugging
          console.log("you got " + correct_number + "correct");
          console.log("you got " + incorrect_number + "incorrect");
          console.log("you did not answer" + unanswered_number + "questions");
 
         //for display, appending the result on the span with the id name
             $("#correct").append( correct_number );
             $("#incorrect").append( incorrect_number );
             $("#unanswered").append( unanswered_number );
        
     
 
}



// Start the document creates the questions by getting the main container qaContainer
// it creates the questions with a for loop the length of my array 10 times with 4 input fields
// the fields have the values of my array 
$( document ).ready(function() {

    var divContainer = $("#qaContainer");

    for (var i = 0; i < questions.length; i++) {

        divContainer.append('<div class="questions">' + questions[i].question + '</div>');
  
        var answer1 = questions[i].answers[0];
        var answer2 = questions[i].answers[1];
        var answer3 = questions[i].answers[2];
        var answer4 = questions[i].answers[3];
     /*-- options-- */

        divContainer.append(' <div class="answers form-check form-check-inline">   <input class="form-check-input" type="radio" name="question'+i+'" id="option'+i+'" value="' + answer1 + '"><label class="form-check-label" for="option'+i+'">' + answer1 + '</div>');
        divContainer.append(' <div class="answers form-check form-check-inline"><input class="form-check-input" type="radio" name="question'+i+'" id="option'+i+'" value="' + answer2 + '"><label class="form-check-label" for="option'+i+'">' + answer2 + '</div>');
        divContainer.append(' <div class="answers form-check form-check-inline"><input class="form-check-input" type="radio" name="question'+i+'" id="option'+i+'" value="' + answer3 + '"><label class="form-check-label" for="option'+i+'">' + answer3 + '</div>');
        divContainer.append(' <div class="answers form-check form-check-inline"><input class="form-check-input" type="radio" name="question'+i+'" id="option'+i+'" value="' + answer4 + '"><label class="form-check-label" for="option'+i+'">' + answer4 + '</div>');
      }

console.log( "ready!" );


});



// ################### button actions #########################

// when the startTrivia button is on-clicked  
$( ".startTrivia" ).click(function() {

    $("#welcomeScreen").hide(); 
    $("#reply").hide();
    $("#qaContainer").show();
    $("#submit").show();
    $("#countdowntimer").show();
    myCoundown();

  });

  // when the startTrivia button is on-clicked  
$( ".playTrivia" ).click(function() {

    $("#welcomeScreen").hide(); 
    $("#reply").hide();
    $("#qaContainer").show();
    $("#submit").show();
    $("#countdowntimer").empty().html("Time left 60 Seconds");
    $("#countdowntimer").show();
    myCoundown();

  });



  // when the Submit button is on-clicked  
  $(".submit").click(function() {

    $("#qaContainer").hide();
    $("#countdowntimer").hide();
    $("#submit").hide();
    // shows congratulations
    $("#reply").show();

  checkAnswers();

});

$(".playTrivia").click(function() {
    location.reload();
});