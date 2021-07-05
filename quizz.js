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
  
  allQuestions = []
  allCorrectAnswers = []
  allIncorrectAnswers = []
  function quizzData(){
    for(let i=0;i<questions.length;i++){
        let q = questions[i].question
        let cA = questions[i].correct_answer
        let iA = questions[i].incorrect_answers

        //allQuestions.push(q)
        //allCorrectAnswers.push(cA)
        //allIncorrectAnswers.push(iA)
        let divId = document.getElementById('Question')
        let h5E = document.createElement('ul')
        h5E.classList.add('radio')
        h5E.innerText += q
        
        let radio1 = document.createElement("input")
        radio1.set =iA[1]
        
        radio1.innerText += '<div>'+iA[1]+'</div>'+'br'
        let radio2 = document.createElement("input")
        radio2.setAttribute("type", "radio")
        radio2.innerText +='<div>'+iA[2]+'</div>'+'br'
        let radio3 = document.createElement("input")
        radio3.setAttribute("type", "radio")
        radio3.innerText +='<div>'+cA+'</div>'+'br'
        let radio4 = document.createElement("input")
        radio4.setAttribute("type", "radio")
        radio4.innerText += '<div>'+ iA[0] + '</div>'+'br'
        h5E.appendChild(radio1)
        h5E.appendChild(radio2)
        h5E.appendChild(radio3)
        h5E.appendChild(radio4)

        /*classRadio.innerText = `'<input type="radio">'
                                    '<label >'+${cA}'+</label>''<br>'
                                    '<input type="radio">'
                                    '<label >'+${iA[0]}'</label>''<br>'
                                    '<input type="radio">'
                                    '<label >' ${iA[1]}'</label>'<br>'
                                    '<input type="radio">'
                                    '<label >'${iA[2]}'</label>''<br>'  
                                  `*/
        divId.appendChild(h5E)
    }
    
      
  }
  
function questionsData(){
  let divId = document.getElementById('Question')
  let h5E = document.createElement('h5')
  h5E.innerText = allQuestions[0]
  console.log(all)
  divId.appendChild(h5E)
}

window.onload = function(){
    quizzData()
}