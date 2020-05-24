"use strict";  
  
const fs = require("fs");  
const jwt = require("jsonwebtoken");  
  
const privateKey = fs.readFileSync("AuthKey_<KeyId>.p8").toString();  
const teamId = "<TeamId>"; 
const keyId = "<KeyId>";  
  
const jwtToken = jwt.sign({}, privateKey, {  
  algorithm: "ES256",  
  expiresIn: "180d",  
  issuer: teamId,  
  header: {  
    alg: "ES256",  
    kid: keyId  
  }  
});  
  
console.log(jwtToken);  
