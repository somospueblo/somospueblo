var prodId = getParameterByName('prodId');
/* 
console.log(prodId);  */
const inventario = [

  { nombre:"Victor Joel Huancollo Galindo" ,ci:11107990,num:"# 1000",cargo:"aux" ,dep:"La Paz" ,mun:"La Paz" ,dist:"7"},
  { nombre:"Rafael Arcangel Quispe Flores" ,ci:3412812,num:"# 1002",cargo:"Presidente" ,dep:"La Paz" ,mun:"Nuestra Señora de La Paz" ,dist:"2"},
  { nombre:"Josue Viktor Morales Choque" ,ci:6957485,num:"# 1001",cargo:"Jefe Circunscripción" ,dep:"La Paz" ,mun:"La Paz" ,dist:"37"},
  { nombre:"Rodrigo Salazar" ,ci:8468662,num:"# 1666",cargo:"aux" ,dep:"La Paz" ,mun:"La Paz" ,dist:"7"},
  { nombre:"CARLOS HUMBERTO CALDERÓN ARGOTE" ,ci:6133193,num:"# 1020",cargo:"STAFF/REDES" ,dep:"La Paz" ,mun:"La Paz" ,dist:"-"},
{ nombre:"MARY ALEJANDRA LUCÍA VELASCO" ,ci:4938524,num:"# 1021",cargo:"STAFF/REDES" ,dep:"La Paz" ,mun:"La Paz" ,dist:"-"},
{ nombre:"CRISTIAN MERCADO LOPEZ" ,ci:9614211,num:"# 1022",cargo:"STAFF/REDES" ,dep:"La Paz" ,mun:"La Paz" ,dist:"-"},
{ nombre:"JHOJAN EMANUEL TERRAZAS FLORES" ,ci:9135350,num:"# 1023",cargo:"STAFF/REDES" ,dep:"La Paz" ,mun:"La Paz" ,dist:"-"},
{ nombre:"LUIS MIGUEL CARITA CUTILLI" ,ci:6728967,num:"# 1024",cargo:"STAFF/REDES" ,dep:"La Paz" ,mun:"La Paz" ,dist:"-"},
{ nombre:"MARIO ANTONIO USNAYO NINACHOQUE" ,ci:8448980,num:"# 1025",cargo:"STAFF/REDES" ,dep:"La Paz" ,mun:"La Paz" ,dist:"-"},

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
