let generateButton = document.querySelector(".generate-button");
generateButton.addEventListener("click", generateSlots);

let firstSlot = document.querySelector(".slot:first-child");
let middleSlot = document.querySelector(".slot:nth-child(2)");
let lastSlot = document.querySelector(".slot:last-child");

let playerMoney = document.querySelector("[data-money]");
updateMoney();

let playerBet = document.querySelector("[data-bet]");

function generateNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

function generateSlots() {
  let a = parseInt(playerMoney.getAttribute("data-money"));
  let currentBet = parseInt(playerBet.value);
  if (currentBet > a) {
    return;
  }
  console.log(a);
  console.log(currentBet);
  let result = a - currentBet;
  if (result < 0) {
    result = 0;
    // warn player: there is no money!
    return;
  }
  playerMoney.setAttribute("data-money", result);
  updateMoney();

  playerBet.getAttribute("data-bet");
  firstSlot.innerHTML = generateNumber();
  middleSlot.innerHTML = generateNumber();
  lastSlot.innerHTML = generateNumber();

  if (
    parseInt(firstSlot.innerHTML) === parseInt(middleSlot.innerHTML) &&
    parseInt(firstSlot.innerHTML) === parseInt(lastSlot.innerHTML) &&
    parseInt(firstSlot.innerHTML) === 1
  ) {
    //vinst
    a += currentBet * 2;
    playerMoney.setAttribute("data-money", a);
    updateMoney();
  }
  //equal
  if (
    parseInt(firstSlot.innerHTML) === parseInt(middleSlot.innerHTML) &&
    parseInt(firstSlot.innerHTML) === parseInt(lastSlot.innerHTML) &&
    parseInt(firstSlot.innerHTML) === 2
  ) {
    //vinst
    a += currentBet * 5;
    playerMoney.setAttribute("data-money", a);
    updateMoney();
  }
  if (
    parseInt(firstSlot.innerHTML) === parseInt(middleSlot.innerHTML) &&
    parseInt(firstSlot.innerHTML) === parseInt(lastSlot.innerHTML) &&
    parseInt(firstSlot.innerHTML) === 3
  ) {
    //vinst
    a += currentBet * 10;
    playerMoney.setAttribute("data-money", a);
    updateMoney();
  }
  // sequence 123
  if (
    parseInt(firstSlot.innerHTML) === 1 &&
    parseInt(middleSlot.innerHTML) === 2 &&
    parseInt(lastSlot.innerHTML) === 3
  ) {
    a += currentBet * 3;
    playerMoney.setAttribute("data-money", a);
    updateMoney();
  }
  // 321
  if (
    parseInt(firstSlot.innerHTML) === 3 &&
    parseInt(middleSlot.innerHTML) === 2 &&
    parseInt(lastSlot.innerHTML) === 1
  ) {
    a += currentBet * 3;
    playerMoney.setAttribute("data-money", a);
    updateMoney();
  }

  //323
  if (
    parseInt(firstSlot.innerHTML) === 3 &&
    parseInt(middleSlot.innerHTML) === 2 &&
    parseInt(lastSlot.innerHTML) === 3
  ) {
    a += currentBet * 4;
    playerMoney.setAttribute("data-money", a);
    updateMoney();
  }
}

function updateMoney() {
  playerMoney.innerHTML = playerMoney.getAttribute("data-money");
}
