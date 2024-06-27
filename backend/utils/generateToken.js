const express = require("express");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_KEY);
  return token;
};

module.exports = generateToken;
