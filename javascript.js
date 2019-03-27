
window.onload = function () {
    year();
    month();
}

// Obtener el año
function year(y) {
    var y = new Date();
    document.getElementById("year").innerHTML = y.getFullYear();
}

// Obtener el mes
function month(m, months){
    var m = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("month").innerHTML = months[m.getMonth()];
}

function next_month(){
    var m = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("month").innerHTML = months[m.getMonth() + 1];
}

function prev_month(){
    var prev = new Date();
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   var prev_mes = document.getElementById("month").innerHTML = month[prev.getMonth() - 1];

    if(prev_mes == month["February"]){
        prev_mes = document.getElementById("month").innerHTML = month[prev.getMonth() - 1];
    } 
}

function day (){
    var d = new Date();
    
}
