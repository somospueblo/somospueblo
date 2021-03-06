var prodId = getParameterByName('prodId');
/* 
console.log(prodId);  */
const inventario = [

{ nombre:"JOSUE VIKTOR MORALES CHOQUE" ,ci:6957485,num:"# 1001",cargo:"COL SERGIO VILLEGAS" ,dep:"COL SERGIO VILLEGAS" ,mun:"COL SERGIO VILLEGAS" ,dist:"COL SERGIO VILLEGAS"},
{ nombre:"FERNANDO F.A. BOLLATI BUTRON" ,ci:3449966,num:"# 1002",cargo:"VICEPRESIDENTE ,dep:"INSTITUTO AMERICANO" ,mun:"-" ,dist:"-"},
{ nombre:"YAZZEL YAMIL DUK ESCOBAR" ,ci:13608507,num:"# 1003",cargo:"AREA LEGAL ,dep:"ESC PANAMA" ,mun:"-" ,dist:"-"},
{ nombre:"VICTOR JOEL HUANCOLLO GALINDO" ,ci:11107990,num:"# 1004",cargo:"AREA INFORMATICA ,dep:"ESC SERGIO SUAREZ" ,mun:"-" ,dist:"-"},
{ nombre:"AIRTON SOTO PARDO" ,ci:8469891,num:"# 1005",cargo:"SECRETARIO GENERAL ,dep:"WALDO BALLIVIAN" ,mun:"-" ,dist:"-"},
{ nombre:"CARLOS CALDERON ARGOTE" ,ci:6133193,num:"# 1006",cargo:"SECRETARIO DE COMUNICACIÓN ,dep:"COL GERMAN BUSCH" ,mun:"-" ,dist:"-"},
{ nombre:"ANDREA DAVALOS QUIROGA" ,ci:5943404,num:"# 1007",cargo:"SECRETARIA DE ACTAS ,dep:"COL COPACABANA" ,mun:"-" ,dist:"-"},
{ nombre:"BORIS ARISPE FERRUINO" ,ci:4894063,num:"# 1008",cargo:"ENCARGADO DE REDES ,dep:"-" ,mun:"-" ,dist:"-"},
{ nombre:"JORGE CALANCHA MAREÑO" ,ci:4899062,num:"# 1009",cargo:"RECURSOS HUMANOS ,dep:"COL GREGORIO REYNOLDS" ,mun:"-" ,dist:"-"},
{ nombre:"DANIELA BUENO FERNANDEZ" ,ci:4032096,num:"# 1010",cargo:"TESORERA ,dep:" ESC 6 DE AGOSTO" ,mun:"-" ,dist:"-"},
{ nombre:"FELIX ARIAS RUBIN DE CELIS" ,ci:8463219,num:"# 1011",cargo:"CULTURAS Y DEPORTES ,dep:" ESC FRANCISCO DE MIRANDA" ,mun:"-" ,dist:"-"},
{ nombre:"FERNANDO CARPIO" ,ci:4777364,num:"# 1012",cargo:"PLANIFICACION ,dep:"ESC CHASQUIPAMPA" ,mun:"-" ,dist:"-"},
{ nombre:"ALEXIS LOZA " ,ci:6159947,num:"# 1013",cargo:"DIRECCION PRODUCCION ,dep:"-" ,mun:"-" ,dist:"-"},
{ nombre:"BETTY TIVERO QUISPE" ,ci:4327421,num:"# 1014",cargo:"SECRETARIA DE GENERO ,dep:"COL CANADA" ,mun:"-" ,dist:"-"},
{ nombre:"EDMAR YANA VILLARROEL" ,ci:5960411,num:"# 1015",cargo:"LOGISTICA ,dep:"COL CRISTO REY" ,mun:"-" ,dist:"-"},
{ nombre:"-" ,ci:12345,num:"# 1016",cargo:"- ,dep:"La Paz" ,mun:"-" ,dist:"-"},
 

];
var item = inventario.find(item => item.ci === parseInt(prodId, 10));
console.log(item);  

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
 
 function getMiembro() {
  document.getElementById("nombres").innerHTML = item.nombre;
  document.getElementById("cis").innerHTML = item.ci;
  document.getElementById("num").innerHTML = item.num;
  
  document.getElementById("cargos").innerHTML = item.cargo;
  document.getElementById("deps").innerHTML = item.dep;
  document.getElementById("muns").innerHTML = item.mun;
  document.getElementById("dists").innerHTML = item.dist;
} 
