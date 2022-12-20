"use strict";

const fivePercent = function () {
  let totalAmount = +document.getElementById("total-bill").value;
  let noOfPerson = +document.getElementById("no-of-person").value;

  if (totalAmount > 999) {
    document.querySelector(".tip-amount-display").style.fontSize = "36px";
    document.querySelector(".total-amount-display").style.fontSize = "36px";
  }
  if (noOfPerson === 0) {
    document.getElementById("zero-person").style.opacity = "1";
    document.getElementById("no-of-person").style.borderColor = "red";
  } else {
    document.getElementById("zero-person").style.opacity = "0";
    document.getElementById("no-of-person").style.borderColor = "transparent";
  }
  if (totalAmount === 0) {
    document.getElementById("zero-amount").style.opacity = "1";
    document.getElementById("total-bill").style.borderColor = "red";
  } else {
    document.getElementById("zero-amount").style.opacity = "0";
    document.getElementById("total-bill").style.borderColor = "transparent";
  }
  let tipAmount = 0.05 * totalAmount;
  let amountPerPerson = (totalAmount + tipAmount) / noOfPerson;
  if (totalAmount > 0 && noOfPerson >= 1) {
    document.getElementById("tipPerPerson").innerText = `₹${(
      tipAmount / noOfPerson
    ).toFixed(1)}`;
    document.getElementById(
      "totalPerPerson"
    ).innerText = `₹${amountPerPerson.toFixed(1)}`;
  } else if (totalAmount == String || noOfPerson == String) {
    document.getElementById("tipPerPerson").innerText = "₹0.00";
    document.getElementById("totalPerPerson").innerText = "₹0.00";
  }
};

const tenPercent = function () {
  let totalAmount = +document.getElementById("total-bill").value;
  let noOfPerson = +document.getElementById("no-of-person").value;
  if (totalAmount > 999) {
    document.querySelector(".tip-amount-display").style.fontSize = "36px";
    document.querySelector(".total-amount-display").style.fontSize = "36px";
  }
  if (noOfPerson === 0) {
    document.getElementById("zero-person").style.opacity = "1";
    document.getElementById("no-of-person").style.borderColor = "red";
  } else {
    document.getElementById("zero-person").style.opacity = "0";
    document.getElementById("no-of-person").style.borderColor = "transparent";
  }
  if (totalAmount === 0) {
    document.getElementById("zero-amount").style.opacity = "1";
    document.getElementById("total-bill").style.borderColor = "red";
  } else {
    document.getElementById("zero-amount").style.opacity = "0";
    document.getElementById("total-bill").style.borderColor = "transparent";
  }
  let tipAmount = 0.1 * totalAmount;
  let amountPerPerson = (totalAmount + tipAmount) / noOfPerson;
  if (totalAmount >= 0 && noOfPerson >= 1) {
    document.getElementById("tipPerPerson").innerText = `₹${(
      tipAmount / noOfPerson
    ).toFixed(1)}`;
    document.getElementById(
      "totalPerPerson"
    ).innerText = `₹${amountPerPerson.toFixed(1)}`;
  } else if (totalAmount == String || noOfPerson == String) {
    document.getElementById("tipPerPerson").innerText = "₹0.00";
    document.getElementById("totalPerPerson").innerText = "₹0.00";
  }
};
const fifteenPercent = function () {
  let totalAmount = +document.getElementById("total-bill").value;
  let noOfPerson = +document.getElementById("no-of-person").value;
  if (totalAmount > 999) {
    document.querySelector(".tip-amount-display").style.fontSize = "36px";
    document.querySelector(".total-amount-display").style.fontSize = "36px";
  }
  if (noOfPerson === 0) {
    document.getElementById("zero-person").style.opacity = "1";
    document.getElementById("no-of-person").style.borderColor = "red";
  } else {
    document.getElementById("zero-person").style.opacity = "0";
    document.getElementById("no-of-person").style.borderColor = "transparent";
  }
  if (totalAmount === 0) {
    document.getElementById("zero-amount").style.opacity = "1";
    document.getElementById("total-bill").style.borderColor = "red";
  } else {
    document.getElementById("zero-amount").style.opacity = "0";
    document.getElementById("total-bill").style.borderColor = "transparent";
  }
  let tipAmount = 0.15 * totalAmount;
  let amountPerPerson = (totalAmount + tipAmount) / noOfPerson;
  if (totalAmount > 0 && noOfPerson >= 1) {
    document.getElementById("tipPerPerson").innerText = `₹${(
      tipAmount / noOfPerson
    ).toFixed(1)}`;
    document.getElementById(
      "totalPerPerson"
    ).innerText = `₹${amountPerPerson.toFixed(1)}`;
  } else if (totalAmount == String || noOfPerson == String) {
    document.getElementById("tipPerPerson").innerText = "₹0.00";
    document.getElementById("totalPerPerson").innerText = "₹0.00";
  }
};
const twoFivePercent = function () {
  let totalAmount = +document.getElementById("total-bill").value;
  let noOfPerson = +document.getElementById("no-of-person").value;
  if (totalAmount > 999) {
    document.querySelector(".tip-amount-display").style.fontSize = "36px";
    document.querySelector(".total-amount-display").style.fontSize = "36px";
  }
  if (noOfPerson === 0) {
    document.getElementById("zero-person").style.opacity = "1";
    document.getElementById("no-of-person").style.borderColor = "red";
  } else {
    document.getElementById("zero-person").style.opacity = "0";
    document.getElementById("no-of-person").style.borderColor = "transparent";
  }
  if (totalAmount === 0) {
    document.getElementById("zero-amount").style.opacity = "1";
    document.getElementById("total-bill").style.borderColor = "red";
  } else {
    document.getElementById("zero-amount").style.opacity = "0";
    document.getElementById("total-bill").style.borderColor = "transparent";
  }
  let tipAmount = 0.25 * totalAmount;
  let amountPerPerson = (totalAmount + tipAmount) / noOfPerson;
  if (totalAmount > 0 && noOfPerson >= 1) {
    document.getElementById("tipPerPerson").innerText = `₹${(
      tipAmount / noOfPerson
    ).toFixed(1)}`;
    document.getElementById(
      "totalPerPerson"
    ).innerText = `₹${amountPerPerson.toFixed(1)}`;
  } else if (totalAmount == String || noOfPerson == String) {
    document.getElementById("tipPerPerson").innerText = "₹0.00";
    document.getElementById("totalPerPerson").innerText = "₹0.00";
  }
};
const fiftyPercent = function () {
  let totalAmount = +document.getElementById("total-bill").value;
  let noOfPerson = +document.getElementById("no-of-person").value;
  if (totalAmount > 999) {
    document.querySelector(".tip-amount-display").style.fontSize = "36px";
    document.querySelector(".total-amount-display").style.fontSize = "36px";
  }
  if (noOfPerson === 0) {
    document.getElementById("zero-person").style.opacity = "1";
    document.getElementById("no-of-person").style.borderColor = "red";
  } else {
    document.getElementById("zero-person").style.opacity = "0";
    document.getElementById("no-of-person").style.borderColor = "transparent";
  }
  if (totalAmount === 0) {
    document.getElementById("zero-amount").style.opacity = "1";
    document.getElementById("total-bill").style.borderColor = "red";
  } else {
    document.getElementById("zero-amount").style.opacity = "0";
    document.getElementById("total-bill").style.borderColor = "transparent";
  }
  let tipAmount = 0.5 * totalAmount;
  let amountPerPerson = (totalAmount + tipAmount) / noOfPerson;
  if (totalAmount > 0 && noOfPerson >= 1) {
    document.getElementById("tipPerPerson").innerText = `₹${(
      tipAmount / noOfPerson
    ).toFixed(1)}`;
    document.getElementById(
      "totalPerPerson"
    ).innerText = `₹${amountPerPerson.toFixed(1)}`;
  } else if (totalAmount == String || noOfPerson == String) {
    document.getElementById("tipPerPerson").innerText = "₹0.00";
    document.getElementById("totalPerPerson").innerText = "₹0.00";
  }
};
const customValue = function () {
  let totalAmount = +document.getElementById("total-bill").value;
  const customTip = +document.getElementById("custom").value / 100;
  let noOfPerson = +document.getElementById("no-of-person").value;
  if (totalAmount > 999) {
    document.querySelector(".tip-amount-display").style.fontSize = "36px";
    document.querySelector(".total-amount-display").style.fontSize = "36px";
  }
  if (noOfPerson === 0) {
    document.getElementById("zero-person").style.opacity = "1";
    document.getElementById("no-of-person").style.borderColor = "red";
  } else {
    document.getElementById("zero-person").style.opacity = "0";
    document.getElementById("no-of-person").style.borderColor = "transparent";
  }
  if (totalAmount === 0) {
    document.getElementById("zero-amount").style.opacity = "1";
    document.getElementById("total-bill").style.borderColor = "red";
  } else {
    document.getElementById("zero-amount").style.opacity = "0";
    document.getElementById("total-bill").style.borderColor = "transparent";
  }
  let tipAmount = customTip * totalAmount;
  let amountPerPerson = (totalAmount + tipAmount) / noOfPerson;
  if (totalAmount >= 0 && noOfPerson >= 1) {
    document.getElementById("tipPerPerson").innerText = `₹${(
      tipAmount / noOfPerson
    ).toFixed(1)}`;
    document.getElementById(
      "totalPerPerson"
    ).innerText = `₹${amountPerPerson.toFixed(1)}`;
  } else if (totalAmount == String || noOfPerson == String) {
    document.getElementById("tipPerPerson").innerText = "₹0.00";
    document.getElementById("totalPerPerson").innerText = "₹0.00";
  }
};

const clearFunction = function () {
  document.getElementById("total-bill").value = "";
  document.getElementById("tipPerPerson").innerText = "₹0.00";
  document.getElementById("totalPerPerson").innerText = "₹0.00";
  document.getElementById("no-of-person").value = "";
  document.getElementById("custom").value = "";
  document.getElementById("zero-person").style.opacity = "0";
  document.getElementById("no-of-person").style.borderColor = "transparent";
  document.getElementById("zero-amount").style.opacity = "0";
  document.getElementById("zero-person").style.borderColor = "transparent";
};
