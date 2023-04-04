import React from "react";
import addDocument from "./addDocument";

const formValidation = async (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#nameInput");
  const emailInput = document.querySelector("#emailInput");
  const messageInput = document.querySelector("#messageInput");

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert("There is required information missing");
    return;
  }

  addDocument(nameInput.value, emailInput.value, messageInput.value);

  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
};

export default formValidation;
