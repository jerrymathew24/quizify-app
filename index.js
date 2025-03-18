let readlineSync = require('readline-sync')
let kuler = require('kuler')

let score = 0
let username = readlineSync.question('Whats your Name?')
console.log(kuler(`\nWelcome ${username} to Quizify`, '#dc2626'))


console.log(kuler('\nPlease select any option from the options a/b/c/d\n' ,''));


const database = {
    data:[
        {
            question: `let a={}, b={} console.log(a==b) console.log(a===b)`,
            options:{
                a: `true, true`,
                b: `false, false`,
                c: `true, false`,
                d: `false, true`
            },
            correctAnswer: `b`
        },
        {
            question: `Object.assign(target,source)
creates which type of copy?`,
            options:{
                a: `Shallow copy`,
                b: `Deep copy`,
                c: `Both`,
                d: `None`
            },
            correctAnswer: `a`
        },
        {
            question:`Is method chaining possible with forEach?`,
            options:{
                a: `Yes`,
                b: `No`
            },
            correctAnswer: `b`  
        }
    ]
}

let leaderBoard = {
    data:[
        {
            name: 'Rahul',
            score: 3
        },
        {
            name: 'Rohit',
            score: 2
        },
        {
            name: 'Mohan',
            score: 3
        }
    ]
}


function startQuiz(userAnswer, correctAnswer){
    if(userAnswer===correctAnswer){
        console.log(kuler('Correct Answer', '#059669'))
        score++
    }else{
        console.log(kuler('Incorrect Answer', '#b91c1c'))
        console.log(kuler(`Correct Answer is ${correctAnswer}\n`, '#1d4ed8'));
        
    }
}

function showQuestionAndOptions(database){
    for(let i=0;i<database.data.length;i++){
        console.log(`Q${i+1} - ${database.data[i].question}\n`)
        for(let key in database.data[i].options){
            console.log(`${key}: ${database.data[i].options[key]}\n`)
        }
        let userAnswer  = readlineSync.question('Enter your answer - (a/b/c/d) - ').toLowerCase()
        
        startQuiz(userAnswer, database.data[i].correctAnswer)
    }
}

function showHighScorer(leaderBoard){
    leaderBoard.data.push({name: username, score: score})
    let sortedScoreList = leaderBoard.data.sort((a,b)=>b.score-a.score)
    console.log(kuler(`\nCheck your position in LeaderBoard 🎉🎉\n`, '#fde047'));
    
    for(let leader of sortedScoreList){
        console.log(kuler(`${leader.name} : Score- ${leader.score}`, '#9333ea'));
        
    }
}
showQuestionAndOptions(database)
console.log(kuler(`Your score is ${score}`,'#5eead4'));
showHighScorer(leaderBoard)