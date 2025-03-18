let readline = require('readline-sync')

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


function startQuiz(userAnswer, correctAnswer){
    if(userAnswer===correctAnswer){
        console.log('Correct Answer')
    }else{
        console.log('Incorrect Answer')
    }
}

function showQuestionAndOptions(database){
    for(let i=0;i<database.data.length;i++){
        console.log(`Q${i+1} - ${database.data[i].question}\n`)
        for(let key in database.data[i].options){
            console.log(`${key}: ${database.data[i].options[key]}\n`)
        }
        let userAnswer  = readline.question('Enter your answer - (a/b/c/d) - ').toLowerCase()
        
        startQuiz(userAnswer, database.data[i].correctAnswer)
    }
}
showQuestionAndOptions(database)