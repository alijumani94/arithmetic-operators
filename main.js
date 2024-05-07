// Practicing arthematic operators
// We need to distribute biryani in school management and faculty members
var numberOfFaculty = 8;
var numberOfManagement = 4;
var numberOfAbsentFaculty = 2;
var numberOfTotalFaculty = numberOfFaculty + numberOfManagement;
var numberOfPresentFaculty = numberOfTotalFaculty - numberOfAbsentFaculty;
var numberOfKgs = numberOfPresentFaculty * 0.5; //number of kgs of biryani
console.log("Total number of present members is: " + (numberOfPresentFaculty));
console.log("Total kilograms of biryani to order: " + numberOfKgs + "kg");
