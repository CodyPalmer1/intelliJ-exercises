alert("Good afternoon.");

var howAreYou = prompt("How are you doing today?");

if(howAreYou.toLowerCase() == "good" || "great"){
    alert("Good! I am glad that you are doing well. Lets get started."); //Should run this line first
} else (howAreYou !== "good" || "great");{
    alert("Okay, lets get started then."); //Should run this line second
} // Need to figure out why code is running both lines instead of either or.