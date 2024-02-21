// ~ADEEL HASSAN~

// CHAPTER# 14 to 16

// question1
var studentName = [];

// question2
var studentNameObject = {};

// question3
var fruits = ['mango' , 'fruiter' , 'banana'];

// question4
var number = [ 1 , 2 , 3 , 4 ];

// question5
var booleanarr = [true, false];

// question6
var mixedArray = ['true' , 33 , 'apple' , 'false' , 'banana'];

// question7
var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS", "M.Phil.", "PhD"];

document.write("<h2>Educational Qualifications in Pakistan</h2>");
document.write("<ol>");

for (var i = 0; i < qualifications.length; i++) 
{document.write("<li>" + qualifications[i] + "</li>");}

document.write("</ol>");

// question8
const studentNames = ["Ghous", "Ahmed", "Adeel"];
const studentScores = [340, 280, 470];

const totalMarks = 500;

for (let i = 0; i < studentNames.length; i++) 
{
  const score = studentScores[i];
  const percentage = (score / totalMarks) * 100;

  console.log(`Score of ${studentNames[i]} is ${score}. Percentage: ${percentage.toFixed(1)}%`);
}

// question9

//  (a)
var addcolor = prompt("Enter a color you want to add in Beginning of Array");
var colors = [" blue ", " red ", " green"];
document.write("PREVIOUS ARRAY : " + colors + "</br>")
colors.unshift(addcolor);
document.write("A) UPDATED ARRAY : " + colors + "</br>")

// (b)
var addcolor = prompt("Enter a color you want to add in last of Array");
var colors = [" blue ", " red ", " green"];
document.write("PREVIOUS ARRAY : " + colors + "</br>")
colors.push(addcolor);
document.write("B) UPDATED ARRAY : " + colors + "</br>")

// (c)
var addcolor1 = prompt("Enter a two more color you want to add in the beginning of Array");
var addcolor2 = prompt("Enter a two more color you want to add in the beginning of Array");
document.write("PREVIOUS ARRAY : " + colors + "</br>")
var colors = [" blue ", " red ", " green"];
colors.splice(0, 0, addcolor1, addcolor2);
document.write("C) UPDATED ARRAY : " + colors + "</br>")

// (d)
var colors = [" blue ", " red ", " green"];
document.write("PREVIOUS ARRAY : " + colors + "</br>")
colors.shift();
document.write("D) UPDATED ARRAY : " + colors + "</br>")

// (e)
var colors = [" blue ", " red ", " green"];
document.write("PREVIOUS ARRAY : " + colors + "</br>")
colors.pop();
document.write("E) UPDATED ARRAY : " + colors + "</br>")

// (f)
var Index = +prompt("Which Index you want to palace the color");
var addcolor = prompt("Which color you want to add on given Index ");
var colors = [" blue ", " red ", " green"];
document.write("PREVIOUS ARRAY : " + colors + "</br>")
colors.splice(Index,0,addcolor);
document.write("F) UPDATED ARRAY : " + colors + "</br>")

// (g)
var Index1 = +prompt("Which Index you want to delete the color");
var Index2 = +prompt("How many colors you want to delete");
var colors = [" blue ", " red ", " green"];
document.write("PREVIOUS ARRAY : " + colors + "</br>")
colors.splice(Index1,Index2);
document.write("G) UPDATED ARRAY : " + colors + "</br>")


// question10
var scores = [320, 230, 480, 120];
document.write("Scores of Students :" + scores + ".</br>");
scores.sort();
document.write("Ordered Scores of Students :" + scores + ".</br>");


// question11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<b><h3>Cities List In Pakistan:</h3></b> " + cities.join(", ") + "</br>");
var selectedCities = cities.slice(2, 4);
document.write("<b><h3>Selected Cities:</h3></b> " + selectedCities.join(", ") + "</br>");

// question12
var arr = ["This","is","my","cat."];
document.write("<h2>Array:</h2>" + arr);
var newArr = arr.join(" ");
document.write("<h2>String:</h2>" + newArr);


// question13
var devices = ["Keyboard ", "Mouse ", "Printer ", "Monitor "];
document.write("<h3>Devices :</h3>" + devices);
document.write("<h4>Out :</h4>" + devices[0]);
document.write("<h4>Out :</h4>" + devices[1]);
document.write("<h4>Out :</h4>" + devices[2]);
document.write("<h4>Out :</h4>" + devices[3]);

// question14
var devices = ["Keyboard ", "Mouse ", "Printer ", "Monitor "];
document.write("<h3>Devices :</h3>" + devices);
document.write("<h4>Out :</h4>" + devices[3]);
document.write("<h4>Out :</h4>" + devices[2]);
document.write("<h4>Out :</h4>" + devices[1]);
document.write("<h4>Out :</h4>" + devices[0]);

// question15
var devices = ["Sayalni", "Apple", "Samsung ", "Motorola ", "Nokia ", "Sony ", "Haier"];
document.write
("<select>"+

 "<option>" + devices[0] + "</option>" +
 "<option>" + devices[1] + "</option>" +
 "<option>" + devices[2] + "</option>" +
 "<option>" + devices[3] + "</option>" +
 "<option>" + devices[4] + "</option>" +
 "<option>" + devices[5] + "</option>" + 
 "<option>" + devices[6] + "</option>" + 
 "</select>")



 // ENDS