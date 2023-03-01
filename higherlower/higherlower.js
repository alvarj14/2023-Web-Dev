let validMax = false;
let maxValue;
let guesses = [];
let message = document.getElementById("message");

while (!validMax){
    let input = window.prompt("What should the maximum number be?");
    
    if(input > 0)
    {
        maxValue = Math.round(Number(input));
        validMax = true;
    }      
}

let num = Math.floor(Math.random() * maxValue) + 1;
document.getElementById("maxV").innerHTML = maxValue;

console.log(num);

function do_guess() {
    let guess = document.getElementById("guess").value;

    if(isNaN(guess)) {
        message.innerHTML = "<span id='invalidGuess'>That is not a number!</span>";
    }
    else if(guess < 1 || guess > maxValue) {
        message.innerHTML = "<span id='invalidGuess'>That number is not in range, try again.</span>";
    }
    else if(guess == num) {
        checkArray(guess);
        message.innerHTML = "You got it! It took you <span id='tries'></span> tries and your guesses were <span id='arr'></span>";
        document.getElementById("tries").innerHTML = guesses.length;
        let arrList = document.getElementById("arr");
        for(let i = 0; i < guesses.length; i++) {
            arrList.append(guesses[i]);

            if(i < (guesses.length-1)) 
                arrList.append(", ");
            else
            arrList.append(".");
            
        }
    }
    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
        checkArray(guess);
    }
    else {
        message.innerHTML = "No, try a higher number.";
        checkArray(guess);
    }
}

function checkArray(x) {
    let i = guesses.indexOf(x)

    if(i == -1)
        guesses.push(x);
    else
        message.innerHTML = "You already tried that number!.";
}