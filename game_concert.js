// Check if the user is ready to play!
confirm("I am ready to play");

// User's age
var age = prompt("What's your age?");

if (age < 13) {
    console.log("You may play at your own risk");
}
else {
    console.log("Let's get started!");
}

// Introduce the story
console.log("You are at a concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, the lead vocalist stops and says, 'Who wants to race me?'");

// User input
var userAnswer = prompt("Do you want to race the vocalist on stage?");

if (userAnswer === "yes") {
    console.log("You and the vocalist start racing. It's neck and neck! You win by a shoelace!");
}
else {
    console.log("Oh no! th vocalist shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

// Get user feedback
var feedback = prompt("Please rate this game on a scale of 1 to 10");

if (feedback >= 8) {
    console.log("Thank you! We should race at the next concert!");
}
else {
    console.log("I'll keep practicing coding and racing.");
}
