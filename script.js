let correctInput =
    "19";
let final =
    document.querySelector(".final");
let yo =
    "prayer";

final.onclick = function() {
    let input =
        document.querySelector(".input").value;
    let mes =
        document.querySelector(".mes");
    let me =
        document.querySelector(".me");
    let answer =
        document.querySelector(".userInput").value;
    if (answer === correctInput && input === yo) {
        me.innerHTML = "Human detected!";
        me.style.display = "block";
        mes.style.display = "none";
    }
        if (answer !== correctInput && input !== yo) {
        mes.innerHTML = "Bot detected!";
        mes.style.display = "block";
        me.style.display = "none";
        }
            if (answer !== correctInput && input === yo) {
        mes.innerHTML = "Cyborg detected!";
        mes.style.display = "block";
        me.style.display = "none";
            }
                if (answer === correctInput && input !== yo) {
        mes.innerHTML = "Cyborg detected!";
        mes.style.display = "block";
        me.style.display = "none";
    
    }};