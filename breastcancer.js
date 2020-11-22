function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "yes") {
		correct++;
}
	if (question2 == "yes") {
		correct++;
}	
	if (question3 == "yes") {
		correct++;
	}
	
	var pictures = ["https://images.unsplash.com/photo-1593759281224-2e5ad918fb91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600", "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600", "4-500x350.jpg"];
	var messages = ["Consult a Doctor.", "Medium Risk", "Low Risk!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " Yes.";
	document.getElementById("picture").src = pictures[score];
	}
	