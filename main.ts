#! /usr/bin/env node

import inquirer from "inquirer";

// Create an array to store student information
let yourRel = [];

// Ask for the student's name
let name = await inquirer.prompt({
    name: "yourname",
    message: "Please Enter Your Name",
    type: "input"
}); 

// Ask for the student's age
let age = await inquirer.prompt({
    name: "yourage",
    message: "Please Enter Your Age",
    type: "input"
});

// Ask for the student's qualification (Matric or Intermediate)
let qualification = await inquirer.prompt({
    name: "qualification",
    message: "Please Tell Me Your Qualification",
    type: "list",
    choices: ["Matric", "Intermediate"]
});

// Log the qualification chosen by the student
console.log(`Okay, so you're in ${qualification.qualification}!`);

// Ask for the type of center (School or College)
let centerName = await inquirer.prompt({
    name: "yourcentername",
    message: "Please Enter Your Center Name",
    type: "list",
    choices: ["School", "College"]
});

// Ask for the name of the school or college based on the center type chosen
let schoolName, collegeName;
if (centerName.yourcentername === "School") {
    console.log("Enter Your School Name.");
    schoolName = (await inquirer.prompt({
        name: "SchoolName",
        message: "Enter Here",
        type: "input",
    })).SchoolName;
} else {
    console.log("Please Enter Your College Name.");
    collegeName = (await inquirer.prompt({
        name: "CollegeName",
        message: "Enter Here",
        type: "input",
    })).CollegeName;
}

// Ask for the subject or field based on the qualification chosen
let selectedSubjectOrField;
if (qualification.qualification === "Matric") {
    console.log("What Subject Did You Choose In Matric?");
    selectedSubjectOrField = (await inquirer.prompt({
        name: "Subject",
        message: "Choose A Subject",
        type: "list",
        choices: ["Computer", "Biology"]
    })).Subject;
} else {
    console.log("Enter The Field You Chose");
    selectedSubjectOrField = (await inquirer.prompt({
        name: "Field",
        message: "Choose A Field",
        type: "list",
        choices: ["Computer Science", "Engineering", "Medical", "Commerce", "Arts"]
    })).Field;
}

// Ask for the grade obtained by the student
let grade = await inquirer.prompt({
    name: "grade",
    message: "Enter Your Grade!",
    type: "list",
    choices: ["A+", "A", "B", "C", "D"]
}); 

// Log remarks based on the grade obtained
if (grade.grade === "A+") {
    console.log("WOW! YOU'RE A BRILLIANT STUDENT.");
} else if (grade.grade === "A") {
    console.log("Wow, you did incredibly well! Congratulations!");
} else if (grade.grade === "B") {
    console.log("Keep up the great effort.");
} else if (grade.grade === "C") {
    console.log("Although you got a C, your hard work and perseverance are evident. Keep pushing forward!");
} else {
    console.log("Even with a D, remember that every step forward is progress. Keep striving for improvement!");
}

// Ask for the percentage obtained by the student in Boards
let percentage = await inquirer.prompt({
    name: "percent",
    message: "What Was Your Percentage In Boards?",
    type: "list",
    choices: ["Above than 95%", "90-95%", "70-80%", "50-60%", "35-40%"]
});

// Log remarks based on the percentage obtained
if (percentage.percent === "Above than 95%") {
    console.log("Incredible achievement! Your exceptional performance speaks volumes. Well done!");
} else if (percentage.percent === "90-95%") {
    console.log("Outstanding work! Your dedication and effort shine through. Congratulations!");
} else if (percentage.percent === "70-80%") {
    console.log("Great job! Your hard work has paid off. Well done!");
} else if (percentage.percent === "50-60%") {
    console.log("Keep pushing forward! You're making progress.");
} else {
    console.log("Your effort is noted. Keep pushing forward!");
}


//Your Information

console.log("\nStudent Information:")
console.log("- Name:" , name.yourname);
console.log("- Age:" , age.yourage);
console.log("- Qualification:" , qualification.qualification);
console.log("- Center Type:" , centerName.yourcentername);
console.log("- College / School Name:" ,schoolName || collegeName);

//your result..

yourRel.push({
    
    Grade: grade.grade,
    Percentage: percentage.percent,
    SelectedSubjectOrField: selectedSubjectOrField,
    SubjectField: qualification.qualification === "Matric" ? "MatricSubjects" : "InterFields"
});

console.log(" Eduactional Details:\n So,Your Result Is!:" , yourRel);

//code ends...
