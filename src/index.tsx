import React from "react";
import { Text } from "react-native";
var CryptoJS = require("crypto-js");
const axios = require('axios');
//new version
const host="https://datdai.stnmt.dongnai.gov.vn:8443/apidatdai2021Qh"
const xxxxxx = 'intyou'
const xx = 'GDEX1you!fgetTST'


const xxxx=(xxxxx:any)=>{
  return xxxxx.replace('var','ttcnttSTNMT')
}
export const nghiaText=()=>(

  <Text>OK123</Text>

)
export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
export function add(a: number, b: number): Promise<number> {
  return Promise.resolve(a + b);
}

const convert=(xxxxx:any)=>{
  return xxxxx.replace('int','master')
}

const xxx = 'Kthdnptcvar@lovev158942y'
export const  GetNKey =async()=>{
  var kit = xxxx(xxx);
  var chat=convert(xxxxxx)
  const cipher = CryptoJS.AES.encrypt(chat+'-'+Math.floor(Date.now() /1000) , CryptoJS.enc.Utf8.parse(kit), {
      iv: CryptoJS.enc.Utf8.parse(xx),
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
  var kit = xxxx(xxx);
  var chat=convert(xxxxxx)
  const cipher = CryptoJS.AES.encrypt(chat+'-'+Math.floor(Date.now() /1000) , CryptoJS.enc.Utf8.parse(kit), {
      iv: CryptoJS.enc.Utf8.parse(xx),
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



