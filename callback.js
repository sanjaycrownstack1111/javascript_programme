console.log("Theis is turorial 37");

const students = [
    {nmae : "sanjay", subject : " javasecirpt"},
    {name : "ritesh" , subject : "Machine learning"}
]


function enrollStudent(student){
    setTimeout(function(){
        students.push(student);
    },3000);
}


function getStudents(){
    setTimeout(function(){
        students.push(student);
        let str = "";
        student.forEach(function(student){
            str += `${student.name}`
        });
    },3000);
}