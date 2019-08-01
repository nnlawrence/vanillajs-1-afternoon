let emptyArr = []

function play(id){
    let playerSpan = document.getElementById('player')
    let element = document.getElementById(id)
    if (playerSpan.innerText === 'x'){
        playerSpan.innerText = 'o'
        element.innerText = 'x'
        emptyArr[id] = 'x'
    } else {
        playerSpan.innerText === 'o'
        playerSpan.innerText = 'x'
        element.innerText = 'o'
        emptyArr[id] = 'o'
   }
console.log(emptyArr)

let box1 = emptyArr[0];
let box2 = emptyArr[1];
let box3 = emptyArr[2];
let box4 = emptyArr[3];
let box5 = emptyArr[4];
let box6 = emptyArr[5];
let box7 = emptyArr[6];
let box8 = emptyArr[7];
let box9 = emptyArr[8];

if (box1 !== undefined && box1 === box2 && box1 === box3) {
    alert(`${box1} wins`)
    return;
  }
  if (box4 !== undefined && box4 === box5 && box4 === box6) {
    alert(`${box4} wins`)
    return;
  }
  if (box7 !== undefined && box7 === box8 && box7 === box9) {
    alert(`${box7} wins`)
    return;
  }
  if (box1 !== undefined && box1 === box4 && box1 === box7) {
    alert(`${box1} wins`)
    return;
  }
  if (box2 !== undefined && box2 === box5 && box2 === box8) {
    alert(`${box2} wins`)
    return;
  }
  if (box3 !== undefined && box3 === box6 && box3 === box9) {
    alert(`${box3} wins`);
    return;
  }
  if (box1 !== undefined && box1 === box5 && box1 === box9) {
    alert(`${box1} wins`)
    return;
  }
  if (box7 !== undefined && box7 === box5 && box7 === box3) {
    alert(`${box7} wins`)
    return;
  }

  let gameComplete = true;
  for (let i = 0; i <= 8; i++) {
    if (emptyArr[i] === undefined) {
      gameComplete = false;
    }
  }
  if (gameComplete === true) {
    alert("Cat's Game!")
  }
}
