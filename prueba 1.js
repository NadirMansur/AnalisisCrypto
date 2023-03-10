'use strict'
let valorCrypto = {};
let ethData;

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
        ethData = data.data.ETH;
        return ethData;
    });
}

// EJECUCION DE GET PRICE.
getEthPrice().then(data => {
   ethData = data;
//    console.log("El valor crypto es:", valorCrypto);
    console.log("El valor de ethData es:", ethData);
}).catch(error => {
   console.error("Error al obtener el precio de ETH:", error);
}); 

 
 // console.log("Pepe tenia un jarrito y un jarrito tenia a pepe, pepe se vio en el jarrito y el jarrito tenia a pepe");
 //console.log("el valor crypto es " + valorCrypto);
 console.log("el valor de ethData es " + ethData);
 