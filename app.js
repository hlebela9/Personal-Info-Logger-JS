// a) Log information to console
console.log("My name is king, a student from IT Varsity and my Github username is king hlebela.");

// b) Roll a dice and predict MTN Business App of the Year 2022 category
const diceRoll = Math.floor(Math.random() * 6) + 1;
const categories = ["Health", "Finance", "Education", "Entertainment", "Productivity", "Social"];
const predictedCategory = categories[diceRoll - 1];
console.log(`Prediction for MTN Business App of the Year 2022 Category: ${predictedCategory}`);

// c) Create, open, and read from a text file
const fs = require('fs');

const appInfo = {
  appName: "BestApp2021",
  developer: "John Doe",
  category: "Productivity",
  institution: "XYZ University"
};

// Write to a text file
fs.writeFileSync('best_app_2021.txt', JSON.stringify(appInfo));

// Read from the text file
const readData = fs.readFileSync('best_app_2021.txt', 'utf8');
const parsedData = JSON.parse(readData);

console.log("Details of the Best Campus Cup App in 2021:");
console.log(`App Name: ${parsedData.appName}`);
console.log(`Developer: ${parsedData.developer}`);
console.log(`Category: ${parsedData.category}`);
console.log(`Institution: ${parsedData.institution}`);
