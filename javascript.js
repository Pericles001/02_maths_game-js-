var playing = false;
var score;
var action;
var timeremaining;
var correctanswer;
// when we click on the start/reset button
document.getElementById("startreset").onclick = function () {
    //if we are playing
    if (playing == true) {
        location.reload(); //reloading

    } else { //if we are not playing

        //change mode to playing mode
        playing = true;
        //set score to zero
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        //show countdown box 
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        //hide game over box
        hide("gameOver");

        //no->change button to reset

        document.getElementById("startreset").innerHTML = "Reset game";

        //start the countdown

        startcountdown();

        //generate a new question
        generateQA();

    }

}
//clicking on a answer box
for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function () {
        //check if we are playing
        if (playing == true) {
            //yes
            if (this.innerHTML == correctanswer) {
                //correct answer
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                //hide wrong box
                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);
                //generateQA
                generateQA();
            } else {
                //wrong answer
                show("wrong");
                hide("correct");
                setTimeout(function () {
                    hide("wrong");
                }, 1000);
            }


        }

    }



}
//reload page


//reduce time by one seconde in loops
//timemleft
//yes->continue

//generate new question
//if we click on answer box 
//if we are playing

//check if answer is correct
//yes
//increase score
//show correct box for one seconde
//generate new questions
//no
//try again for one seconde
//functions

//staart counter
function startcountdown() {
    action = setInterval(function () {
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0) {
            //game over
            stopcountdown();
            show("gameOver");

            document.getElementById("gameOver").innerHTML = "<p>Game over !</p><p>Your score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");

            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);


}
//stop counter
function stopcountdown() {
    clearInterval(action);

}
//hide elements
function hide(id) {
    document.getElementById(id).style.display = "none";
}
//show elements
function show(id) {
    document.getElementById(id).style.display = "block";
}

function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctanswer = x * y;
    document.getElementById("question").innerHTML = x + "*" + y;

    var correctposition = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctposition).innerHTML = correctanswer;
    //fill one box with correct answer
    var answers = [correctanswer];
    for (i = 1; i < 5; i++) {
        if (i != correctposition) {
            var wronganswer;
            do {
                wronganswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random())); //wrong answer

            }
            while (answers.indexOf(wronganswer) > -1);

            document.getElementById("box" + i).innerHTML = wronganswer;
            answers.push(wronganswer);
        }

    }

}
