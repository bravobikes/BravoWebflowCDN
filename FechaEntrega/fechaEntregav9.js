

const fechaEntrega = document.getElementById("fechaEntrega")

//Declaracion de variables  
let grupoEntrega = 0
let ruedosEntrega = 0
let manubrioEntrega = 0

//Declaracion de fecha actual
const newDate = new Date

//Declaracion de array
const arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

fechaEntrega.innerText = ((arrayMeses[newDate.getMonth() + 2] + ' ' + newDate.getFullYear()));
console.log((arrayMeses[newDate.getMonth()] + ' ' + newDate.getFullYear()))

function getDelivery() {

    let month = newDate.getMonth()
    let year = newDate.getFullYear()
    month = month + 2
    month = month + grupoEntrega + ruedosEntrega + manubrioEntrega

    if(month>11){
        month = month - 11 
        year +=1
    }
    
    var day = (arrayMeses[month] + " " + year)

    fechaEntrega.innerText = day
    console.log(day)
}



$('#105').click(function(){
    grupoEntrega = 0
    getDelivery()
  });

$('#ultegra').click(function(){
    grupoEntrega = 1
    getDelivery()
  });

$('#aluminio').click(function(){
    ruedosEntrega = 0
    getDelivery()
  
  });  

  $('#carbon').click(function(){
    ruedosEntrega = 1
    getDelivery()
  
  });  

  $('#standard').click(function(){
    manubrioEntrega = 0
    getDelivery()
  });  

  $('#aero').click(function(){
    manubrioEntrega = 1
    getDelivery()
  });