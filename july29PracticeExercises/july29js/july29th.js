alert("Good afternoon.");

let userName = ("");
while (userName === ""){
    userName = prompt("Hi, what is your name?");
}
alert("Nice to meet you " + userName + "!"); // Greet User.

let howAreYou = prompt("How are you doing today?");

if (howAreYou.toLowerCase() === "good" || "great") {
    alert("Good! I am glad that you are doing well. Lets get started."); //Should run this line first
} else if (howAreYou.toLowerCase() === "bad" || "horrible") {
    alert("Well lets hope it gets better. Lets get started then."); //Should run this line second
} else {
    alert("Okay then. Lets get started.");
}


