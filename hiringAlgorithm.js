console.log("connected")

// Use this file as a template to develop Moogle's Hiring Filter
//
// 0: Intro to CS
// 1: Data Structures
// 2: Software Engineering
// 3: Algorithms
// 4: Computer Organization
// 5: Operating Systems
// 6: Overall College GPA
//
// The list representing a single application would look like this:
// [100, 95, 80, 89, 91, 75, 83]
//
//
//  When you have something working, replace the exampleList with the REALLY LONG list from lotsoApps.js via copy/paste.

let exampleList = [[93, 89, 63, 88, 60, 73, 80], [100, 63, 57, 96, 58, 71, 78], [81, 91, 99, 78, 57, 87, 86], [81, 73, 100, 57, 91, 60, 66], [86, 89, 64, 81, 69, 93, 92], [78, 63, 88, 95, 59, 98, 90], [55, 74, 68, 55, 69, 94, 80], [64, 77, 75, 92, 77, 72, 83], [95, 58, 92, 62, 77, 64, 59], [94, 78, 84, 83, 68, 63, 76]]

var firstButton = document.querySelector("#roundOne")
var secondButton = document.querySelector("#roundTwo")
var thirdButton = document.querySelector("#roundThree")
var ultimateButton = document.querySelector("#ultimateRound")
var resultsOne = document.querySelector("#resultsOne")
var resultsTwo = document.querySelector("#resultsTwo")
var resultsThree = document.querySelector("#resultsThree")
var ultimateResults = document.querySelector("#ultimateResults")

firstButton.addEventListener("click", e=>{
  //Print the number of starting applicants (no loop needed, just need to figure out how long an array is!) in the resultsOne div
  //Then use the firstRoundResults function to determine who are finalists and print the number of finalists in the results box!

  //CODE ALONG: 1. Create a variable that will be set equal to the list returned by firstRoundResults. 2. Update inner HTML of results box to show initial applicant numbers and qualified applicant numbers.


})

secondButton.addEventListener("click", e=>{
  //Print the number of starting applicants (no loop needed, just need to figure out how long an array is!) in the resultsOne div
  //Then use the secondRoundResults function to determine who are finalists and print the number of finalists in the results box!
})

thirdButton.addEventListener("click", e=>{
  //Print the number of starting applicants (no loop needed, just need to figure out how long an array is!) in the resultsOne div
  //Then use the thirdRoundResults function to determine who are finalists and print the number of finalists in the results box!
})

ultimateButton.addEventListener("click", e=>{
  //Print the number of starting applicants (no loop needed, just need to figure out how long an array is!) in the resultsOne div
  //Then use the ultimateResults function to determine who are finalists and print the number of finalists in the results box!
  //HINT: You will probably need to use several nested if/else statements to get your final answer, as people will need to undergo three tests before they can become a finalist.
})


//define all functions below here!!!!


function firstRoundResults(appList){

    //CODE ALONG:
    //create an empty list for finalists.

    //use a for loop to iterate through each app
    //for each app, check if analysisOne is true
    //if it is, add finalist to list
    //after for loop, return finalists to the program.


}

function analysisOne(applicant){
	// Given the GPAs of a single applicant, return True if they are qualified
	// Qualification: An applicant is qualified if...
	// 	- their Overall College GPA is above 80

  // applicant: a list of GPAs (integers)
	// return True if the applicant qualifies

  //what is always the index of the overall GPA?

}

function secondRoundResults(appList){
  //Use analysisTwo to decide if each applicant is qualified and add them to a list of finalists
  //return the list of finalists to the program.
}

function analysisTwo(applicant){
  // Given the GPAs of a single applicant, return True if they are qualified
	// Qualification: An applicant is qualified if...
	// 	they have NO grades below a 65. (you might need another for loop to look at EACH grade from the applicant!)
}

function thirdRoundResults(appList){
  //Use analysisThree to decide if each applicant is qualified and add them to a list of finalists
  //return the list of finalists to the program.
}

function analysisThree(applicant){
  // Given the GPAs of a single applicant, return True if they are qualified
	// Qualification: An applicant is qualified if...
	// 	they have at least 4 grades above an 85. (you might need another for loop to look at EACH grade from the applicant, and you may need to figure out how to make a variable that can keep count for you...)
}

function overallResults(appList){
  //Use overallAnalysis to decide if each applicant is qualified and add them to a list of finalists
  //return the list of finalists to the program.
}

function overallAnalysis(applicant){
  // Given the GPAs of a single applicant, return True if they are qualified
	// Qualification: An applicant is qualified if...
	// 	their overall GPA is above an 80 &&
  // they have no grades below a 65 &&
  // they have at least 4 grades above an 85.
}
