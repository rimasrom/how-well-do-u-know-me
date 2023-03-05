const readlineSync = require('readline-sync')

const userName = readlineSync.question("Enter your Name : ")
console.log(`welcome ${userName}, lets play a quiz...`)

const commonPart = "what would i choose"

const questions = [
    {
        question : `${commonPart}, car or bike ?`,
        answer : "bike"
    },
    {
        question : `${commonPart}, mountain or beach ?`,
        answer : "mountain"
    },
    {
        question : `${commonPart}, biryani or pizza ?`,
        answer : "biryani"
    }
]

const quiz = (question,answer)=>{
    const userAnswer = readlineSync.question(question)
    if(userAnswer===answer){
        console.log("you are right")
    }else{
        console.log("you are wrong")
    }
}

const play = () =>{
    for(i=0;i<questions.length;i++){
    const currentQuestion = questions[i]
    quiz(currentQuestion.question,currentQuestion.answer)
    }
}

play();


