const age = prompt("Enter your age: ");

if (age < 0 || isNaN(age) ) {
    console.log('Error. You must enter a positive number.');
} 

if (age % 2 === 1) {
    console.log("You are an odd one...");
}

if (age == 21) {
    console.log("Happy 21st birthday!");
}

if (Math.ceil(Math.sqrt(age)) == 
        Math.floor(Math.sqrt(age))) {
            console.log("Holy crap, you are a perfect square!");
        }

else if (age < 16) {
    console.log("Won't someone PLEASE think of the children?");
} else if (age >= 16 && age < 18) {
    console.log("Sorry, you are not old enough to come in. Drive on home, kid!");
} else if (age >= 18 && age < 21) {
    console.log("Come on in, but no drinking.");
} else {
    console.log("Okay, get smashed.");
}

