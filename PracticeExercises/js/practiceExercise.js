alert("Good afternoon.");

let userName = ("");
while (userName === ""){
    userName = prompt("Hi, what is your name?");
}
alert("Nice to meet you " + userName + "!"); // Greet User.

let howAreYou = prompt("How are you doing today?").toLowerCase();
//console.log(howAreYou.toLowerCase());
if (howAreYou === "good" || "great") {
    alert("Good! I am glad that you are doing well. Lets get started."); //Should run this line first
} else if (howAreYou === "bad" || "horrible") {
    alert("Well lets hope it gets better. Lets get started then."); //Should run this line second
} else {
    alert("Okay then. Lets get started.");
}

var happinessScale = prompt("How happy are you today? Please enter a number from the list: " +
    "1 - Great, 2 - Good, 3 - Okay, 4 - Horrible, 5 - Terrible.");
switch (happinessScale){
    case "1":
        alert("That is awesome. I hope it continues!");
        break;
    case "2":
        alert("That is good, hunt the good stuff!");
        break;
    case "3":
        alert("It could always be worse, but I hope it gets better.");
        break;
    case "4":
        alert("I am so sorry to hear that. Hopefully it gets better, and tomorrow is a great one.");
        break;
    case "5":
        alert("At least days come to an end and two never repeat. I hope that tomorrow is nothing but great for you!");
        break;
    default:
        alert("Invalid choice.");
}


