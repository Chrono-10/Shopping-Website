function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");

var btn1 = document.getElementById("addCart1");
var btn2 = document.getElementById("addCart2");
var btn3 = document.getElementById("addCart3");
var btn4 = document.getElementById("addCart4");
var btn5 = document.getElementById("addCart5");
var btn6 = document.getElementById("addCart6");
var btn7 = document.getElementById("addCart7");
var btn8 = document.getElementById("addCart8");

var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");
var span4 = document.getElementById("span4");
var span5 = document.getElementById("span5");
var span6 = document.getElementById("span6");
var span7 = document.getElementById("span7");
var span8 = document.getElementById("span8");


btn1.onclick = function () {
    modal1.style.display = "block";
}
btn2.onclick = function () {
    modal2.style.display = "block";
}
btn3.onclick = function () {
    modal3.style.display = "block";
}
btn4.onclick = function () {
    modal4.style.display = "block";
}
btn5.onclick = function () {
    modal5.style.display = "block";
}
btn6.onclick = function () {
    modal6.style.display = "block";
}
btn7.onclick = function () {
    modal7.style.display = "block";
}
btn8.onclick = function () {
    modal8.style.display = "block";
}

span1.onclick = function () {
    modal1.style.display = "none";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
span3.onclick = function () {
    modal3.style.display = "none";
}
span4.onclick = function () {
    modal4.style.display = "none";
}
span5.onclick = function () {
    modal5.style.display = "none";
}
span6.onclick = function () {
    modal6.style.display = "none";
}
span7.onclick = function () {
    modal7.style.display = "none";
}
span8.onclick = function () {
    modal8.style.display = "none";
}

var message = document.getElementById("myMessage");

var btn = document.getElementById("join");

var span = document.getElementsByClassName("closes")[0];
 
btn.onclick = function () {
    message.style.display = "block";
}

span.onclick = function () {
    message.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        message.style.display = "none";
    }
}