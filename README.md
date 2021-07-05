# Strive-Homework-M1D10
 

    <!--

        HTML EXERCISES

        1) Create a title for the page
        2) Create a heading
        3) Create an ordered list
        4) Create a table with 5 columns and 4 rows
        5) Add an image to each second cell of every row
        6) Add a anchor link for every image
        7) Merge together 2 table cells
        8) Divide the page using a horizontal line
        9) Create a container with a nested paragraph and a nested unordered list
        10) Create a footer with some information about the page creator 

        CSS EXERCISES

        11) Give a maximum width to the body and center it in the page
        12) Set every h1 to be centered
        13) Change the color of each link in the page
        14) Create a class with a border
        15) Set table to have rounded corners
        16) Add margin between every paragraph
        17) Create a class which change font size and boldness
        18) Create a class to hide a content
        19) Add a green border to each td
        20) Add a dotted red border to each tr (note: tr does not accept a border property ;-) )

        JS EXERCISES

        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

        DOM 

        31) Get element with ID "container" from the page
        32) Get every "td" from the page
        33) Create a cycle that prints the text inside every td of the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add the class "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a UL
        40) Write a function to empty a list

        EXTRA 

        41) Add an eventListener to alert when the mouse is over a link, displaying the URL
        42) Add a button to hide every image on the page
        43) Add a button to hide and show the table from the page
        44) Write a function to sum every number inside the TD (if the content is numeric)
        45) Delete the last letter from the title each time the user clicks on it
        46) Change a single TD background color when the user clicks on it
        47) Add a button DELETE, on click it should delete a random TD from the page
        48) Add a pink border to a cell when the mouse is over it
        49) Write a function to add a table with 4 rows and 3 columns programmatically
        50) Write a function to remove the table from the page
    -->


    <head>
    </head>
    <body></body>
//quizz 
<!DOCTYPE html>
<html>
  <!--
        QUIZ GAME!

        RULES:
        / The player must guess correctly a certain amount of questions
        / Each correct answer gives him one point
        / Answers could be multiple or true/false
        / At the end of the game, the user must know his/her total score

        QUESTIONS:
        / You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
        / Could be multiple of boolean (true / false)
        / [EXTRA] Show if the answer provided was the wrong one or correct it after clicking
        / [EXTRA] Present the questions one a time instead of having all displayed together

        HINTS:
        / Keep a global variable score for the user score
        / Keep a variable questionNumber for the question the user is answering
        / When questionNumber is bigger then the available questions, present the score
        / Start working with the questions saved in a variable (or you can use AJAX for fetching external questions if you already know it!)
        / Start with the easier version and THEN implement the EXTRAs
        / Please debug everything / try it on the console to be sure of what to expect from your code

        EXTRA:
        / Show if the answer provided was the wrong one or correct it after clicking
        / Present the questions one a time instead of having all displayed together
        / Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)

    -->

  <head></head>
  <body>
    <script>
      var questions = [
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "What does CPU stand for?",
          correct_answer: "Central Processing Unit",
          incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
          correct_answer: "Final",
          incorrect_answers: ["Static", "Private", "Public"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question: "The logo for Snapchat is a Bell.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
          correct_answer: ".svg",
          incorrect_answers: [".png", ".jpeg", ".gif"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "In web design, what does CSS stand for?",
          correct_answer: "Cascading Style Sheet",
          incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the code name for the mobile operating system Android 7.0?",
          correct_answer: "Nougat",
          incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "On Twitter, what is the character limit for a Tweet?",
          correct_answer: "140",
          incorrect_answers: ["120", "160", "100"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question: "Linux was first created as an alternative to Windows XP.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "Which programming language shares its name with an island in Indonesia?",
          correct_answer: "Java",
          incorrect_answers: ["Python", "C", "Jakarta"],
        },
      ];

      window.onload = function () {
        // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
        // HINT: for each question, create a container with the "question"
        // create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
        // when EVERY question has an answer (google for how to get a value from a radio button with JS)
        // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
        // Display first question with a title + radio button
        // when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.
      };

      // HOW TO calculate the result
      // You can do it in 2 ways:
      // If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
      // If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
    </script>
  </body>
</html>
