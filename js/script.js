


/*
window.onload = function(){};
window.onload = function () {document.onkeyup = tecla;}
function tecla(even){var tec = even.keyCode;}
document.getElementById("").onclick = function(){...}
$('').click(function() {});
---------------------------
mouseover,mouseout,click,mouseleave
onclick,ondblclick,onMouseOver,onMouseMove
display,left,right,top,bottom,
substr,substring,length,innerHTML
style,undefined,push();
confirm(mensaje);prompt(“Texto de la ventana”,”valor inicial caja”);
var.toUpperCase(); combierte a mayuscula var.toLowerCase();
var.charAt(posicion) , obtiene el carácter que se encuentra en la posición indicada:
setInterval(expresion, tiempo);
setTimeout(expresion, tiempo);
isNaN(valor); // devuelve si el valor es numerico o no
indexOf(cadena_buscada, indice); // Devuelve la posición de la primera ocurrencia de 'cadena_buscada' dentro de la cadena actual, a partir de la posición dada por 'indice'. Este último argumento es opcional y, si se omite, la busqueda comienza por el primer carácter de la cadena.
lastIndexOf(cadena_buscada, indice);
toLowerCase(); // Devuelve la cadena en minúsculas.
toUpperCase(); // Devuelve la cadena en minúsculas.
----Array-----
join(separador) // une los elementos de una arreglo con criterio de el separador
reverse() // Invierte el orden de los elementos del array.
----------------
document.getElementsByTagName();
document.getElementsByName();
document.getElementById();
----jQ-----------
evento.preventDefault();
$('').appendTo('');
$('').attr();
$('').each(function(i){});
$('').data();
$('').removeData();
$('').addClass();
$('').removeClass();
$('').toggleClass();
$('').append();
*/$(function() {
var temp1,temp2,temp3;




























/*---------------------------------------------------------------------------------------------------*/
$(".LnPAS8P div").each(function(i) {$this = $(this);$this.css("background",$this.html());});
$(window).scroll(function() {$('#hyaLJDVt0r9AST span').html($('#hyaLJDVt0r9AST').offset().top - 35);/*if ($('').offset().top > #){$('')addClass('');}else{$('').removeClass('');}*/});
document.onmouseover = function(e){getId('getPosX').innerHTML = 'pX - ' + e.pageX;getId('getPosY').innerHTML = 'pY - ' + (e.pageY - getScroll());}

function aCaracter(a,b){var temp,sum = "";var c = ["qwertyuiopasdfghjklzxcvbnm","QWERTYUIOPASDFGHJKLZXCVBNM","0123456789"];if (a == undefined) {a=10;}for (var i = 0; i < a; i++) {if (b == undefined){temp = c[aNumero(2)];temp = temp[aNumero(temp.length - 1)];}else{do{temp = aNumero(2);if (temp == 0 && b.indexOf("q") != -1) {temp = c[temp];temp = temp[aNumero(temp.length - 1)];}else if(temp == 1 && b.indexOf("Q") != -1){temp = c[temp];temp = temp[aNumero(temp.length - 1)];}else if(temp == 2 && b.indexOf("1") != -1){temp = c[temp];temp = temp[aNumero(temp.length - 1)];}else{temp = -1;}}while(temp == -1);}sum += temp;}return sum;}
function aNumero(a,b,c){var temp;if (b == undefined){b = a;a = 0;}do{temp = Math.random()*b;}while(a >= temp);if (c == undefined){temp=Math.round(temp);}else{temp = temp.toFixed(c);}return temp;}
function aBoolian(){if (Math.random()<0.5){return false}else{return true};}
function nCaract(a){return a+"";}
function cNumber(catart){catart +="";var ret = 0;var numer = '0123456789';for (var i = 0; i < catart.length; i++) {for (var j = 0; j < 10; j++){if (catart[i]==numer[j]){ret = (ret*10)+j;}}}return ret;}
function iValue(Selector,V){var temp=document.querySelector(Selector).value;if (V!=undefined){document.querySelector(Selector).value = V;}return temp;}
function setScroll(a,b) {if (a == undefined && b == undefined) {window.scroll(0,document.body.scrollHeight);} else {if (b == undefined) {window.scroll(0,a);} else {window.scroll(a,b);}}}
function getScroll() {return window.pageYOffset}

function getId(id){return document.getElementById(id)}

function relleno(Selector,a) { var c ="", b = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";for (var i = 0; i < a; i++) {c+=b;}document.querySelector(Selector).innerHTML = c;}

function quitarCarat(text,catart){var ret = '';for (var i = 0; i < text.length; i++) {var a = true;for (var j = 0; j < catart.length; j++) {if (text[i]==catart[j]){a = false;}}if (a){ret+=text[i];}}return ret;}
function alertWeb(text){if ($('#alertWeb').css('display')==undefined){$('<section id=\"alertWeb\"></section>').appendTo('body');$('#alertWeb').css({'background':'white','position':'fixed','border':'1px #9e9999 solid','bottom':'20px','width':'300px','right':'20px','color':'black','border-radius':'2px','padding':'2px','z-index':'10000','transition':'all .4s','display':'none'});}var th = $('#alertWeb');th.html(text);th.css({'display':'block','transform':'translateY(100%)','opacity':'0'});setTimeout(function() {$('#alertWeb').css({'transform':'translateY(0)','opacity':'1'});},200);th.click(function(){th.css({'transform':'translateY(100%)','opacity':'0'});setTimeout(function() {th.css('display','none');},300);});}
function seletElem(th,sel){th = $(th);var ret = $(this);if (sel==undefined){sel = th.length;}if (sel<0||sel>th.length){alertWeb('Error Selecion elemento: <br> no existe el elemento '+sel);}else {th.each(function(i){if (i+1 ==sel){ret = $(this);return false;}});}return ret;};function seletElemjQ(th,sel){var ret = $(this);if (sel==undefined){sel = th.length;}if (sel<0||sel>th.length){alertWeb('Error Selecion elemento: <br> no existe el elemento '+sel);}else {th.each(function(i){if (i+1 ==sel){ret = $(this);return false;}});}return ret;}
function sonidoFondo(url){var selt = $('#sonidoFondo');if (selt.css('display')!='block'){$('<video id="sonidoFondo" controls="" autoplay="" name="media"></video>').appendTo('body');selt = $('#sonidoFondo');selt.css({'width':'100px','height': '100px','position': 'fixed','top': '-400px','left': '-400px','opacity': '0','display': 'block'});}selt.html('<source  src=\"'+url+'\">');document.getElementById("sonidoFondo").play();};
/*-----*/
});
