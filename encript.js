var prodId = getParameterByName('prodId');
/* 
console.log(prodId);  */
const inventario = [

  { nombre:"Victor Joel Huancollo Galindo" ,ci:11107990,num:"# 1000",cargo:"aux" ,dep:"La Paz" ,mun:"La Paz" ,dist:"7"},
  { nombre:"Josue Viktor Morales Choque" ,ci:6957485,num:"# 1001",cargo:"Jefe Circunscripción" ,dep:"La Paz" ,mun:"La Paz" ,dist:"37"},
  { nombre:"Rodrigo Salazar" ,ci:8468662,num:"# 1666",cargo:"aux" ,dep:"La Paz" ,mun:"La Paz" ,dist:"7"},
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
