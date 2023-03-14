'use strict'
// Importa la biblioteca de Firebase
import firebase from "firebase/app";
import "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBs3jC5ZUrlZ43rj2FdNGtg8SKQZk_aRJo",
    authDomain: "analisiscrypo.firebaseapp.com",
    databaseURL: "https://analisiscrypo-default-rtdb.firebaseio.com",
    projectId: "analisiscrypo",
    storageBucket: "analisiscrypo.appspot.com",
    messagingSenderId: "484519512287",
    appId: "1:484519512287:web:b175b5f54cf6768ba0c16a"
  };
const app = initializeApp(firebaseConfig);

const database = firebase.database();

let ethData;
let ethDataArray = [];

function getEthPrice(){
const apiKey = 'f742c3d3-4ebf-4a5d-b030-8db6ad804a3a';
const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETH`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
            'Content-Type': 'application/json',
        },
    })

    .then(response => response.json())
    .then(data => {
        ethData = {
            ...data.data.ETH,
            date: new Date().toISOString() // Obtener la fecha y hora actual en formato ISO string
        };
        return ethData;
    });
}

// EJECUCION DE GET PRICE.
//for(let i=0; i<3;i++){
    getEthPrice().then(data => {
    ethData = data;
    ethDataArray.push(ethData);
    // console.log("ethDataArray dentro de getEthPrice es:");
    //console.log(ethDataArray);
//    console.log("El valor crypto es:", valorCrypto);
//   console.log((i+1));
console.log("El valor de ethData dentro de getEthPrice es:", ethData.quote.USD.price);
console.log("la hora de obtencin del precio fue: ", ethData.date);
//console.log(ethData);

ethDataArray.forEach(element => {
      console.log("dentro del GetEthPrice forEach element: " + ethDataArray.name + " vale " + element.quote.USD.price);
     });

}).catch(error => {
   console.error("Error al obtener el precio de ETH:", error);
}); 
//}


 
 // console.log("Pepe tenia un jarrito y un jarrito tenia a pepe, pepe se vio en el jarrito y el jarrito tenia a pepe");
 