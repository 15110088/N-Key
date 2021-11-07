import React from "react";
import { Text } from "react-native";
var CryptoJS = require("crypto-js");



export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
export function add(a: number, b: number): Promise<number> {
  return Promise.resolve(a + b);
}


export const  GetNKey =async()=>{
  const key = 'KthdnptcttcnttSTNMT@lovev158942y'
  const iv = 'GDEX1you!fgetTST'
  const cipher = CryptoJS.AES.encrypt('masteryou-'+Date.now(), CryptoJS.enc.Utf8.parse(key), {
      iv: CryptoJS.enc.Utf8.parse(iv),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
  })




  return cipher.ciphertext.toString(CryptoJS.enc.Base64);

}

export const nghiaText=()=>(

    <Text>OK123</Text>
  
)
