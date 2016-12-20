// var questionaryTitle = "Тест по программированию";
 var questionary = {
     questionaryTitle: "Тест по программированию",
     question_1: {
         ask: "Вопрос №1",
         answers: [
             "Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3",
         ],
         correct_answer: "1"
     },
     question_2: {
         ask: "Вопрос №2",
         answers: [
             "Вариант ответа №1", "Вариант ответа №2",
         ],
         correct_answer: "2"
     },
     question_3: {
         ask: "Вопрос №3",
         answers: [
             "Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3",
             "Вариант ответа №4", "Вариант ответа №5",
         ],
         correct_answer: "3"
     },

     setListOfQuestions: function() {
         var questionList = [];
         var i = 0;
         for (var prop in this) {
             switch (prop) {
                case 'questionaryTitle':
                case 'setListOfQuestions':
                case 'printMe':
                     break;
                default:
                    questionList[i] = prop;
                    i++;
             }
         }
         return questionList;
     },

     printMe: function() {
         var myHTML = "";
         myQuestionList = this.setListOfQuestions();
         myHTML += "<h1>" + this.questionaryTitle + "</h1>";
         myHTML += "<ol>";

         for (var i = 0; i < myQuestionList.length; i++) {
             myHTML += "<li>" + this[myQuestionList[i]].ask;
             myHTML += "<form>";
             for (var j = 0; j < this[myQuestionList[i]].answers.length; j++) {
                 myHTML += '<input type="checkbox" value=\"' + (j+1) + '\">';
                 myHTML += this[myQuestionList[i]].answers[j];
                 myHTML += '<br>';
             }

             myHTML += "</form></li>";
         }
         myHTML += "</ol>";
         myHTML += '<button type="button" name="button">Проверить мои результаты</button>';
         return myHTML;
     }
};

document.body.innerHTML = questionary.printMe();
