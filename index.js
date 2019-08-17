const $ = require('jquery');
const $ = require('binance');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var vr_sym = {};
var vr_sympairs = {};
var yeni_coin = '';
var vr_krnmetre = 2*1000;
var vr_karmarji = '';
var vr_buyprecision;
var vr_residueth

var sat_coin = {
  "eflag" : false,
  "coin"  : "",
  "coinp" : "",
  "qty"   : "",
}

var vr_yuksel,vr_dus;
var vr_coinmcap = {};

//get symbols onload
var ourRequestx = new XMLHttpRequest();
ourRequestx.open('GET','https://api.binance.com/api/v3/ticker/price',true);
ourRequestx.onload = function(){
    var vr_sym_l = {};
    ourDatax = JSON.parse(ourRequestx.responseText);
    for(k=0;k<ourDatax.length;k++){
        //Update Symbol Pairs
        vr_sympairs[ourDatax[k]["symbol"]] = ourDatax[k]["price"];
        
        //Update and Check for new symbols
        if(ourDatax[k]["symbol"].substr(ourDatax[k]["symbol"].length - 4, ourDatax[k]["symbol"].length) == 'USDT'){
            if(!vr_sym_l[ourDatax[k]["symbol"].substr(0,ourDatax[k]["symbol"].length - 4)]){
               vr_sym_l[ourDatax[k]["symbol"].substr(0,ourDatax[k]["symbol"].length - 4)] = '1';
               }
        }
        else{
            if(!vr_sym_l[ourDatax[k]["symbol"].substr(0,ourDatax[k]["symbol"].length - 3)]){
               vr_sym_l[ourDatax[k]["symbol"].substr(0,ourDatax[k]["symbol"].length - 3)] = '1';
               }
        }
    }
    vr_sym = vr_sym_l;
}
ourRequestx.send();

//get sıra(ranks) CoinMarketCapten
var ourRequestc = new XMLHttpRequest();
ourRequestc.open('GET',"https://api.coinmarketcap.com/v1/ticker/?limit=2000",true);
ourRequestc.onload = function(){
     ourDatac = JSON.parse(ourRequestc.responseText);
     for(y=0;y<ourDatac.length;y++){
         vr_coinmcap[ourDatac[y]["symbol"]] = ourDatac[y]["rank"];
     }
}
ourRequestc.send();
