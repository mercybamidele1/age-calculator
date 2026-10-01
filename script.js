// let userAge =prompt("How old are you?");
// userAge = Number(userAge);

// const currentYear= new Date().getFullYear();
// const yearOfBirth = currentYear-userAge;
// console.log("you were born in the year ",yearOfBirth);




function calculate() {
    let name = document.getElementById("name").value;

    let age = document.getElementById("age").value;
    age = Number(age);
    
    let currentYear = new Date ().getFullYear();
    let yearOfBirth = currentYear-age;

    document.getElementById("result").innerHTML= "Hi, " 
    + name + ", you are " + age + " years old. You were born in " + 
    yearOfBirth + '.'; 
  

}