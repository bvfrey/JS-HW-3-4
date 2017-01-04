var questionaryTitle = "Тест по программированию";

var questionary = [
     {
         ask: "Вопрос №1",
         answers: [
             "Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3",
         ],
         correct_answer: "1"
     },
     {
         ask: "Вопрос №2",
         answers: [
             "Вариант ответа №1", "Вариант ответа №2",
         ],
         correct_answer: "2"
     },
     {
         ask: "Вопрос №3",
         answers: [
             "Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3",
             "Вариант ответа №4", "Вариант ответа №5",
         ],
         correct_answer: "3"
     }
];

function printMe(quest) {
    var myHTML = "";
    // myQuestionList = this.setListOfQuestions();
    myHTML += "<h1>" + questionaryTitle + "</h1>";
    myHTML += "<ol>";

    for (var i = 0; i < quest.length; i++) {
        myHTML += "<li>" + quest[i].ask;
        myHTML += "<form>";
        for (var j = 0; j < quest[i].answers.length; j++) {
            myHTML += '<input type="checkbox" value=\"' + (j+1) + '\">';
            myHTML += quest[i].answers[j];
            myHTML += '<br>';
        }

        myHTML += "</form></li>";
    }
    myHTML += "</ol>";
    myHTML += '<button type="button" name="button">Проверить мои результаты</button>';
    return myHTML;
}


document.body.innerHTML = printMe(questionary);
