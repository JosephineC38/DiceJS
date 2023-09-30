function rollDice() {
    var dice1 = parseInt((Math.random() * 6) + 1);
    var dice2 = parseInt((Math.random() * 6) + 1);
    const para1 = document.createElement("p");
    para = document.getElementById("Display");
    para.innerHTML = "The first dice displays a " + dice1 + " while the second dice displays a " + dice2 + 
    ". Their total is " + (dice1 + dice2);
}