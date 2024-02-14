function judge(grade) {
    switch (true) {
        case grade == 'A':
            console.log(5);
            break;
        case grade == 'B':
            console.log(4);
            break;
        case grade == 'C':
            console.log(3);
            break;
        case grade == 'D':
            console.log(2);
            break;
        default:
            console.log(1);
    }
}

function getGrade(score, callback) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }
    callback(grade);
} 

getGrade(85, judge);