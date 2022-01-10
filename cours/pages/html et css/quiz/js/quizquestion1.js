//Question bank
var questionBank= [
  {
      question : 'Pour avoir accès a un site web ,Il vous faut',
      option : ['Le URL','Le wwww','LE https:','Aucune'],
      answer : 'Le URL'
  },
  {
      question : 'Le URL a combien de partie ?',
      option : ['4 partie','Deux partique','Cinq partie','six partie'],
      answer : 'Cinq partie'
  },
  {
      question : 'Definition HTML',
      option : ['HyperText Markup Language','Hyper Markup Language','HyperText Mar Language','HyperText Mark Language'],
      answer : 'HyperText Markup Language'
  },
  {
      question : 'Definition CSS',
      option : ['Cascad Style Sheets','Cascading Style Sheets','Cascade Style Sheets','Cascading Style Sheeps'],
      answer : 'Cascading Style Sheets'
  },
  {
      question : 'Le navigateur est le programme qui nou permet de :',
      option : ['Voir nos site web','Ecrire nos code','partager nos site web','Aucun'],
      answer : 'Voir nos site web'
  }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
  for(var a=0;a<span.length;a++){
      span[a].style.background='none';
  }
  question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
  option0.innerHTML= questionBank[i].option[0];
  option1.innerHTML= questionBank[i].option[1];
  option2.innerHTML= questionBank[i].option[2];
  option3.innerHTML= questionBank[i].option[3];
  stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
  if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
  {
      score= score+1;
      document.getElementById(e.id).style.background= 'limegreen';
  }
  else{
      document.getElementById(e.id).style.background= 'tomato';
  }
  setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
  if(i<questionBank.length-1)
  {
      i=i+1;
      displayQuestion();
  }
  else{
      points.innerHTML= score+ '/'+ questionBank.length;
      quizContainer.style.display= 'none';
      scoreboard.style.display= 'block'
  }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
  var answerBank= document.getElementById('answerBank');
  if(answerBank.style.display= 'block'){
    answerBank.style.display= 'none';
    scoreboard.style.display= 'block';
  }
}

//function to check Answers
function checkAnswer(){
  var answerBank= document.getElementById('answerBank');
  var answers= document.getElementById('answers');
  answerBank.style.display= 'block';
  scoreboard.style.display= 'none';
  for(var a=0;a<questionBank.length;a++)
  {
      var list= document.createElement('li');
      list.innerHTML= questionBank[a].answer;
      answers.appendChild(list);
  }
}
function suivant(){
  if(score >= 5){
    window.location.href = "../deuxiemes_chapitre.html";
  }else{
    document.getElementById('msg').innerHTML = 'Désolée vous n"avez pas reussi le test du premier chapitre';
  }
}


displayQuestion();