"use strict";  
  
const fs = require("fs");  
const jwt = require("jsonwebtoken");  
  
const privateKey = fs.readFileSync("AutheKey_CapExedKid.p8").toString();  
const teamId = "CapExdTeam"; 
const keyId = "CapExedKid";  
  
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
