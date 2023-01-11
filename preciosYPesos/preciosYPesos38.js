
const innerPrecio = document.querySelector('#innerPrecio')
const innerPeso = document.querySelector('#innerPeso')
const innerPrecioM = document.querySelector('#innerPrecioM')
const innerPesoM = document.querySelector('#innerPesoM')

const LIST_OF_SIZEBIKE = Object.values($('input[name="sizeBike"]')).splice(0,6)
const LIST_OF_GROUPSET = Object.values($('input[name="groupset"]')).splice(0,2)
const LIST_OF_RINES = Object.values($('input[name="rines"]')).splice(0,2)
const LIST_OF_MANUBRIO = Object.values($('input[name="manubrio"]')).splice(0,2)
const LIST_OF_BASE = Object.values($('input[name="base"]')).splice(0,2)
const LIST_OF_DISENO = Object.values($('input[name="diseno"]')).splice(0,3)

let frame_set_chk = false

/* PESOS */

let PESO_FRAMESET = 3100
let PESO_GRUPO = 2418
let PESO_RUEDOS = 1700
let PESO_MANUBRIO = 300
let PESO_TAMANO = 0

// Peso actualizado 7518 gr

/* PRECIOS */

// let PRECIO_FRAMESET = 45000
let PRECIO_FRAMESET = 30583
let PRECIO_GRUPO = 25417
let PRECIO_RUEDOS = 5083
let PRECIO_MANUBRIO = 957
let PRECIO_BASE = 4500
let PRECIO_DISENO = 0
let PRECIO_TAMANO = 0
// Precio total: 80,957

// Precio actualizado: 66540





const frameSetChecBoxPP = document.querySelector('#frameSetChecBox')
console.log(frameSetChecBoxPP.checked + "Afuera")

frameSetChecBoxPP.addEventListener('change', (e)=>{
        frame_set_chk = (e.target.checked)
        console.log(frame_set_chk + "Adentro")
        
        if (frame_set_chk = true){
            var bubble = PRECIO_FRAMESET
            bubble = formatMoney(bubble)
            innerPrecio.innerText = '$' + bubble
            var bubblePeso = PESO_FRAMESET;
            innerPeso.innerText =  bubblePeso/1000 + ' Kg'
            innerPesoM.innerText = bubblePeso/1000 + ' Kg'
        } else {
            console.log("checkmark worked")
            var bubble = PRECIO_FRAMESET + PRECIO_GRUPO + PRECIO_RUEDOS + PRECIO_MANUBRIO + PRECIO_BASE + PRECIO_DISENO + PRECIO_TAMANO;
            bubble = formatMoney(bubble)
            innerPrecio.innerText = '$' + bubble
            var bubblePeso = PESO_FRAMESET + PESO_GRUPO + PESO_RUEDOS + PESO_MANUBRIO + PRECIO_TAMANO;
            innerPeso.innerText =  bubblePeso/1000 + ' Kg'
            innerPesoM.innerText = bubblePeso/1000 + ' Kg'
        }
        
    
})

const asdf = $('input[name="sizeBike"]')
const asdf12 = $('input[name="groupset"]')

LIST_OF_SIZEBIKE.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PESO_TAMANO = parseInt(event.target.getAttribute('peso'), 10) 
            PRECIO_TAMANO = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
            SetPeso();
        }    
});
})


LIST_OF_GROUPSET.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PESO_GRUPO = parseInt(event.target.getAttribute('peso'), 10) 
            PRECIO_GRUPO = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
            SetPeso();
        }    
});
})

LIST_OF_RINES.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PESO_RUEDOS = parseInt(event.target.getAttribute('peso'), 10) 
            PRECIO_RUEDOS = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
            SetPeso();
        }    
});
})

LIST_OF_MANUBRIO.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PESO_MANUBRIO = parseInt(event.target.getAttribute('peso'), 10) 
            PRECIO_MANUBRIO = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
            SetPeso();
        }    
});
})

LIST_OF_BASE.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PRECIO_BASE = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
            SetPeso();
        }    
});
})

LIST_OF_DISENO.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PRECIO_DISENO = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
            SetPeso();
        }    
});
})

function formatMoney(number) {
    return number.toLocaleString('en-US');
  }

function SetPrecio(){
    console.log('set precio')
    // var bubble = PRECIO_GRUPO + PRECIO_RUEDOS + PRECIO_MANUBRIO + PRECIO_BASE + PRECIO_DISENO + PRECIO_TAMANO;
    var bubble = PRECIO_FRAMESET + PRECIO_GRUPO + PRECIO_RUEDOS + PRECIO_MANUBRIO + PRECIO_BASE + PRECIO_DISENO + PRECIO_TAMANO;
    bubble = formatMoney(bubble)
    innerPrecio.innerText = '$' + bubble
    innerPrecioM.innerText = '$' + bubble

}

function SetPeso(){
    var bubble = PESO_FRAMESET + PESO_GRUPO + PESO_RUEDOS + PESO_MANUBRIO + PRECIO_TAMANO;
    innerPeso.innerText = bubble/1000 + ' Kg'
    innerPesoM.innerText = bubble/1000 + ' Kg'
}