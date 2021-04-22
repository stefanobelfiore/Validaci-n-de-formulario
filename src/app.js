/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  checkNumberCard();
  isValidName();
  checkNumberCvc();
  checkNumberAmount();
  isValidLastName();
  isValidCity();
  isValidState();
  checkPostalCode();
  isValidMessage();
};

function checkNumberCard() {
  const INPUTCARD = document.querySelector("#inputCard");
  INPUTCARD.addEventListener("focusout", event => {
    if (
      checkOnlyNumber(INPUTCARD.value) &&
      INPUTCARD.value.length >= 16 &&
      INPUTCARD.value.length <= 20
    ) {
      validInputStyle(INPUTCARD);
    } else {
      invalidInputStyle(INPUTCARD);
    }
  });
}

function checkNumberCvc() {
  const INPUTCVC = document.querySelector("#inputCvc");
  INPUTCVC.addEventListener("focusout", event => {
    if (checkOnlyNumber(INPUTCVC.value) && INPUTCVC.value.length === 3) {
      validInputStyle(INPUTCVC);
    } else {
      invalidInputStyle(INPUTCVC);
    }
  });
}

function checkNumberAmount() {
  const INPUTAMOUNT = document.querySelector("#inputAmount");
  INPUTAMOUNT.addEventListener("focusout", event => {
    if (checkOnlyNumber(INPUTAMOUNT.value) && INPUTAMOUNT.value.length === 1) {
      validInputStyle(INPUTAMOUNT);
    } else {
      invalidInputStyle(INPUTAMOUNT);
    }
  });
}

function isValidName() {
  const INPUTFIRSTNAME = document.querySelector("#inputFirstName");
  INPUTFIRSTNAME.addEventListener("focusout", event => {
    checkOnlyString(INPUTFIRSTNAME.value)
      ? validInputStyle(INPUTFIRSTNAME)
      : invalidInputStyle(INPUTFIRSTNAME);
  });
}

function isValidLastName() {
  const INPUTLASTNAME = document.querySelector("#inputLastName");
  INPUTLASTNAME.addEventListener("focusout", event => {
    checkOnlyString(INPUTLASTNAME.value)
      ? validInputStyle(INPUTLASTNAME)
      : invalidInputStyle(INPUTLASTNAME);
  });
}

function isValidCity() {
  const INPUTCITY = document.querySelector("#inputCity");
  INPUTCITY.addEventListener("focusout", event => {
    checkOnlyString(INPUTCITY.value)
      ? validInputStyle(INPUTCITY)
      : invalidInputStyle(INPUTCITY);
  });
}

function isValidState() {
  const INPUTSTATE = document.querySelector("#inputState");
  INPUTSTATE.addEventListener("focusout", event => {
    checkOnlyString(INPUTSTATE.value)
      ? validInputStyle(INPUTSTATE)
      : invalidInputStyle(INPUTSTATE);
  });
}

function checkPostalCode() {
  const INPUTPOSTALCODE = document.querySelector("#inputPostalCode");
  INPUTPOSTALCODE.addEventListener("focusout", event => {
    if (
      checkOnlyNumber(INPUTPOSTALCODE.value) &&
      INPUTPOSTALCODE.value.length >= 2 &&
      INPUTPOSTALCODE.value.length <= 10
    ) {
      validInputStyle(INPUTPOSTALCODE);
    } else {
      invalidInputStyle(INPUTPOSTALCODE);
    }
  });
}

function isValidMessage() {
  const INPUTMESSAGE = document.querySelector("#inputMessage");
  INPUTMESSAGE.addEventListener("focusout", event => {
    if (INPUTMESSAGE.value.length >= 1) {
      validInputStyle(INPUTMESSAGE);
    } else {
      invalidInputStyle(INPUTMESSAGE);
    }
  });
}

function isTotalTrue() {
  const SUMMITBUTTON = document.querySelector("#summitButton");
  SUMMITBUTTON.addEventListener("focusout", event => {
    if (document.querySelectorAll("#")) {
      alert("There is one ore more invalid imputs");
    }
  });
}

function invalidInputStyle(input) {
  console.log(input);
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
}
function validInputStyle(input) {
  console.log("input");
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
}
const checkOnlyString = text => {
  return /^[a-zA-Z]+$/.test(text);
};
const checkOnlyNumber = number => {
  return /^([0-9])*$/.test(number);
};
