var btnAction = document.querySelector(".action");
var cash = document.querySelector(".cash");
var cashGiven = document.querySelector("#cashGiven");
var billamount = document.querySelector("#billamount");
var table = document.querySelector(".table");
var change = document.querySelector(".change");
var returnDiv = document.querySelector(".returnDiv");
var notesArr = [2000, 500, 100, 20, 10, 5, 1];
var returnArr = [0, 0, 0, 0, 0, 0, 0];

btnAction.addEventListener("click", () => {
  if (btnAction.innerText === "Next") {
    if (isaNummber(Number(billamount.value))) {
      cash.classList.toggle("hidden");
      btnAction.innerHTML = "Check";
    } else {
      change.innerHTML = "Enter Valid Integer Bill amount";
    }
  } else if (btnAction.innerText === "Check") {
    if (
      isaNummber(Number(billamount.value)) &&
      isaNummber(Number(cashGiven.value))
    ) {
      var balanceAmount = Number(cashGiven.value) - Number(billamount.value);
      if (balanceAmount === 0) {
        returnDiv.classList.add("hidden");
        change.innerText = `Customer gave exact amount. No Return amount`;
      } else if (balanceAmount > 0) {
        returnArr = [0, 0, 0, 0, 0, 0, 0];
        var remainingAmount = balanceAmount;
        for (var i = 0; i < notesArr.length; i++) {
          returnArr[i] = Number.parseInt(remainingAmount / notesArr[i]);
          remainingAmount = remainingAmount - returnArr[i] * notesArr[i];
        }
        updateTable(returnArr);
        returnDiv.classList.remove("hidden");
      } else {
        returnDiv.classList.add("hidden");
        change.innerText = `Customer still need's to give ${
          Number(billamount.value) - Number(cashGiven.value)
        } or more`;
      }
    } else {
      change.innerHTML = "Enter Valid Integer for Bill and CASH amount";
    }
  }
});

function isaNummber(checkElement) {
  if (checkElement > 0 && Number.isInteger(checkElement)) {
    change.innerHTML = "";
    return true;
  } else {
    return false;
  }
}

function updateTable(givenArr) {
  tbody = table.tBodies[0];
  for (var i = 0; i < givenArr.length; i++) {
    tbody.rows[i].cells[1].innerText = givenArr[i];
  }
}
var btnAction = document.querySelector(".action");
var cash = document.querySelector(".cash");
var cashGiven = document.querySelector("#cashGiven");
var billamount = document.querySelector("#billamount");
var table = document.querySelector(".table");
var change = document.querySelector(".change");
var returnDiv = document.querySelector(".returnDiv");
var notesArr = [2000, 500, 100, 20, 10, 5, 1];
var returnArr = [0, 0, 0, 0, 0, 0, 0];

btnAction.addEventListener("click", () => {
  if (btnAction.innerText === "Next") {
    if (isaNummber(Number(billamount.value))) {
      cash.classList.remove("hidden");
      btnAction.innerHTML = "Check";
    } else {
      change.innerHTML = "Enter Valid Integer Bill amount";
    }
  } else if (btnAction.innerText === "Check") {
    if (
      isaNummber(Number(billamount.value)) &&
      isaNummber(Number(cashGiven.value))
    ) {
      var balanceAmount = Number(cashGiven.value) - Number(billamount.value);
      if (balanceAmount === 0) {
        returnDiv.classList.add("hidden");
        change.innerText = `Customer gave exact amount. No Return amount`;
      } else if (balanceAmount > 0) {
        returnArr = [0, 0, 0, 0, 0, 0, 0];
        var remainingAmount = balanceAmount;
        for (var i = 0; i < notesArr.length; i++) {
          returnArr[i] = Number.parseInt(remainingAmount / notesArr[i]);
          remainingAmount = remainingAmount - returnArr[i] * notesArr[i];
        }
        updateTable(returnArr);
        returnDiv.classList.remove("hidden");
      } else {
        returnDiv.classList.add("hidden");
        change.innerText = `Customer still need's to give ${
          Number(billamount.value) - Number(cashGiven.value)
        } or more`;
      }
    } else {
      change.innerHTML = "Enter Valid Integer for Bill and CASH amount";
    }
  }
});

function isaNummber(checkElement) {
  if (checkElement > 0 && Number.isInteger(checkElement)) {
    change.innerHTML = "";
    return true;
  } else {
    return false;
  }
}

function updateTable(givenArr) {
  tbody = table.tBodies[0];
  for (var i = 0; i < givenArr.length; i++) {
    tbody.rows[i].cells[1].innerText = givenArr[i];
  }
}
