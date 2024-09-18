function sendNotification(email) {
    if(typeof email !== 'string' || email.split('@').length !== 2){
        return "Invalid Email";
    }
    let separate = email.split('@');
    let userName = separate[0];
    let domainName = separate[1];

    let notification = userName + ' sent you an email from ' + domainName;
    return notification;
}
let res=sendNotification('zihhsh123.hotmail.com')
console.log(res)



//waiting time

function  waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length){
        return "Invalid Input";
    }
    let sum = 0;
    for(const time of waitingTimes){
        sum = sum + time;
    }
    const avg = Math.round(sum / waitingTimes.length);
    const vivaDone = waitingTimes.length;
    const haveRest = (serialNumber - 1) - vivaDone;
    const avgTime = avg * haveRest;
    return avgTime;
}


//testCalculator

function calculateTax(income, expense){
    if(typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || income < expense){
        return "Invalid Input";
    }
    const incomeTax = 0.2;
    const totalIncome = income - expense;
    const calculatedTax = totalIncome * incomeTax;
    return calculatedTax;
}


//final scoure

function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || 
    typeof obj.name !== 'string' ||
    typeof obj.testScore !== 'number' ||
    typeof obj.schoolGrade !== 'number' ||
    typeof obj.isFFamily !== 'boolean' || 
    obj.testScore > 50 || 
    obj.schoolGrade > 30){
        return "Invalid Input";
    }
    let parentScore = 0;
    if(obj.isFFamily === true){
        parentScore = 20;
    }

    let totalScore = obj.testScore + obj.schoolGrade + parentScore;
    if(totalScore >= 80){
        return true;
    }
    return false;
}


//check digit

function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input";
    }

    for(const item of name){
        if(!isNaN(item) && item !== ' '){
            return true;
        }
    } 
    return false;
}


