const readlineSync = require('readline-sync')

const userName = readlineSync.question("Enter your Name : ")
console.log(`welcome ${userName}, lets play a quiz...`)

const commonPart = "what would i choose "
var score = 0;

const questions = [
    {
        question : `${commonPart}, car or bike ? `,
        answer : "bike"
    },
    {
        question : `${commonPart}, mountain or beach ? `,
        answer : "mountain"
    },
    {
        question : `${commonPart}, biryani or pizza ? `,
        answer : "biryani"
    },
    {
        question : `${commonPart}, indoor game or outdoor game ? `,
        answer : "outdoor game"
    },
    {
        question : `${commonPart}, coding or gaming ?`,
        answer : "coding"
    }
]

const quiz = (question,answer)=>{
    const userAnswer = readlineSync.question(question)
    if(userAnswer.toUpperCase()===answer.toUpperCase()){
        console.log("you are right")
        score = score + 1;
        console.log(`your score is : ${score}`)
    }else{
        console.log("you are wrong")
        console.log(`your score is : ${score}`)
    }
    console.log("____________________")
}

const play = () =>{
    for(i=0;i<questions.length;i++){
    const currentQuestion = questions[i]
    quiz(currentQuestion.question,currentQuestion.answer)
    }
}

play();


