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
