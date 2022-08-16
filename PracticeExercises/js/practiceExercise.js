alert("Good afternoon.");

// let userName = (""); //init userName
// while (userName === ""){ //While loop to get input and greet user.
//     userName = prompt("Hi, what is your name?");
// }
// alert("Nice to meet you " + userName + "!"); // Greet User.


// function greetUser(name) { //Function to greet user, replaced with while loop.
//     userName = prompt("What is your name?");
//     alert(`Hello there ${userName}`)
// }
// greetUser();

var howAreYou = prompt("How are you doing today?").toLowerCase().toString().trim();
//console.log(howAreYou.toLowerCase());
console.log(howAreYou);
if (howAreYou === "good") {
    alert("Good! I am glad that you are doing well. Lets get started."); //Should run this line first
} else if (howAreYou === "bad") {
    alert("Well lets hope it gets better. Lets get started then."); //Should run this line second
} else {
    alert("Okay then. Lets get started.");
}

// var happinessScale = prompt("How happy are you today? Please enter a number from the list: " +
//     "1 - Great, 2 - Good, 3 - Okay, 4 - Horrible, 5 - Terrible.");
// switch (happinessScale){
//     case "1":
//         alert("That is awesome. I hope it continues!");
//         break;
//     case "2":
//         alert("That is good, hunt the good stuff!");
//         break;
//     case "3":
//         alert("It could always be worse, but I hope it gets better.");
//         break;
//     case "4":
//         alert("I am so sorry to hear that. Hopefully it gets better, and tomorrow is a great one.");
//         break;
//     case "5":
//         alert("At least days come to an end and two never repeat. I hope that tomorrow is nothing but great for you!");
//         break;
//     default:
//         alert("Invalid choice.");
//}

for(i = 0; i < 10; i++){
    var test = confirm("Will you hit 'Okay' 10 times?")
    if(test === true){
        continue;
    } else if(test !== true) {
        alert("Already finished?");
    break;
    } else {
        alert("I can't believe you hit it 10 times! That is a lot of persistence!")
    }
}

// var successLevels = ['Succeeding', 'Contentment', 'Complacency', 'Regression'];
// alert('There are many ways to rate your success level.');
// alert('A few may be: ');
// successLevels.forEach(function(successLevel) {
//     alert(successLevel);
// });
// alert (`Our goal is to try to help everyone get to ${successLevels[1]} or ${successLevels[2]}.`);

var you = {
    weight: 72,
    height: 220,
    eyeColor: "Green",
    hairColor: "Black"
};
console.log(you);
console.log(you.weight);

function findYearsToAdult(input){
    input = prompt("What is your age?");
    if(input < 18){
        return alert(`You have ${18 - input} years until your an adult!`)
    } else if (input > 18) {
        return alert (`You have been an adult for ${input - 18} years!`)
    } else {
        alert(`You are 18, so you are an adult!`)
    }
}
console.log(findYearsToAdult());
