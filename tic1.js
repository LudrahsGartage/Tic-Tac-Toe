let currentPlayer = "X";
let one, two, three, five, six, seven, eight, nine;

let oneBox = document.getElementById("one");
let twoBox = document.getElementById("two");
let threeBox = document.getElementById("three");
let fourBox = document.getElementById("four");
let fiveBox = document.getElementById("five");
let sixBox = document.getElementById("six");
let sevenBox = document.getElementById("seven");
let eightBox = document.getElementById("eight");
let nineBox = document.getElementById("nine");

oneBox.onclick = () => playerMove(oneBox);
twoBox.onclick = () => playerMove(twoBox);
threeBox.onclick = () => playerMove(threeBox);
fourBox.onclick = () => playerMove(fourBox);
fiveBox.onclick = () => playerMove(fiveBox);
sixBox.onclick = () => playerMove(sixBox);
sevenBox.onclick = () => playerMove(sevenBox);
eightBox.onclick = () => playerMove(eightBox);
nineBox.onclick = () => playerMove(nineBox);


function playerMove(clickedElement) {
        if (clickedElement.innerText == ""){
        clickedElement.innerText = currentPlayer;
        winflag = wincondition();
        if (winflag) {
            document.querySelector("p").innerText = currentPlayer + " has won"  
        }
        else if (currentPlayer == "O") {
            currentPlayer = "X";
            document.querySelector("p").innerText = "X's Turn"
        }
        else if (currentPlayer =="X") {
            currentPlayer = "O";
            document.querySelector("p").innerText = "O's Turn"
        }
    }
}


function wincondition () {    
    one = document.getElementById("one").innerText;
    two = document.getElementById("two").innerText;
    three = document.getElementById("three").innerText;
    four = document.getElementById("four").innerText;
    five = document.getElementById("five").innerText;
    six = document.getElementById("six").innerText;
    seven = document.getElementById("seven").innerText;
    eight = document.getElementById("eight").innerText;
    nine = document.getElementById("nine").innerText;

    winnerCheck=currentPlayer+currentPlayer+currentPlayer;

    if(one + two + three == winnerCheck) {
        return true;
    }

    if(four + five + six == winnerCheck) {   
        return true;
    }

    if(seven + eight + nine == winnerCheck) {
        return true;
    }

    if(one + four + seven == winnerCheck) {
        return true;   
    }

    if(two + five + eight == winnerCheck) {  
        return true;  
    }

    if(three + six + nine == winnerCheck) {    
        return true;
    }

    if(one + five + nine == winnerCheck) {    
        return true;
    }

    if(three + five + seven == winnerCheck) {    
        return true;
    }
}

function resetAll () {
    document.getElementById("one").innerText = null;
    document.getElementById("two").innerText = null;
    document.getElementById("three").innerText = null;
    document.getElementById("four").innerText = null;
    document.getElementById("five").innerText = null;
    document.getElementById("six").innerText = null;
    document.getElementById("seven").innerText = null;
    document.getElementById("eight").innerText = null;
    document.getElementById("nine").innerText = null;
    currentPlayer = "X";
    document.querySelector("p").innerText = "X's Turn"
}

button = document.getElementById("reset")
button.onclick = () => resetAll()