import React from "react";
import { Text } from "react-native";
var CryptoJS = require("crypto-js");
const axios = require('axios');

const host="https://datdai.stnmt.dongnai.gov.vn:8443/apidatdai2021Qh"
//const host="http://192.169.3.197/Apidatdai"

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
export function add(a: number, b: number): Promise<number> {
  return Promise.resolve(a + b);
}


export const  GetNKey =async()=>{
  const key = 'KthdnptcttcnttSTNMT@lovev158942y'
  const iv = 'GDEX1you!fgetTST'
  const cipher = CryptoJS.AES.encrypt('masteryou-'+Math.floor(Date.now() /1000) , CryptoJS.enc.Utf8.parse(key), {
      iv: CryptoJS.enc.Utf8.parse(iv),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
  })
  console.log(cipher.ciphertext.toString(CryptoJS.enc.Base64))

  return cipher.ciphertext.toString(CryptoJS.enc.Base64);
}

export const  GetSDE =async()=>
{
    const keyhash= await GetNKey();
    const data= await axios.post(host+'/api/SDE/GET',{hash:keyhash}) 
    return data.data;
}


export const  GetToken =()=>{
  const key = 'KthdnptcttcnttSTNMT@lovev158942y'
  const iv = 'GDEX1you!fgetTST'
  const cipher = CryptoJS.AES.encrypt('masteryou-'+Math.floor(Date.now() /1000) , CryptoJS.enc.Utf8.parse(key), {
      iv: CryptoJS.enc.Utf8.parse(iv),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
  })
  return cipher.ciphertext.toString(CryptoJS.enc.Base64);
}


export const  GetIIS =async()=>{
  const keyhash= await GetNKey();
   const data= await axios.post(host+'/api/SDE/GetByID',{hash:keyhash}) 
    return data.data;
}


export const nghiaText=()=>(

    <Text>OK123</Text>
  
)
