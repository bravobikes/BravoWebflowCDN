// CART

// 0. Variable declaration & linking Webflow elements
// 1. Precios y pesos
// 2. Fecha entrega
// 3. Option triggers
// 4. Add to cart
// 5. Clear cart

/*************************************************************************************************/


/*--------0. Variable declaration---------*/
// Declaración de variables y valores iniciales & linking Webflow elements to manipulate

// Arreglo de de variantes de ese producto, regresa arreglo con los producto matching el tag "estilo" definido en Webflow.
const LIST_OF_BIKETYPE = $('input[name="ESTILO"]').toArray().splice(0,3);
const LIST_OF_SIZEBIKE = $('input[name="sizeBike"]').toArray().splice(0,6);
const LIST_OF_GROUPSET = $('input[name="rines"]').toArray().splice(0, 2);
const LIST_OF_RINES = Array.from($('input[name="rines"]'));
const LIST_OF_MANUBRIO = $('input[name="manubrio"]').toArray().splice(0,2);
const LIST_OF_BASE = $('input[name="base"]').toArray().splice(0,2)
const LIST_OF_DISENO = $('input[name="diseno"]').toArray().splice(0,3)

// var cartempty = true
//const CartWrapper = document.getElementById('cart_wrapper2')

// checkbox grabados
const Checkbox = document.getElementById('checkbox')

// toma elementos que estan atribuidos a esa tag - textbox de precio y peso en bubble Webflow
const innerPrecio = document.querySelector('#innerPrecio')
const innerPeso = document.querySelector('#innerPeso')
const innerPrecioM = document.querySelector('#innerPrecioM')
const innerPesoM = document.querySelector('#innerPesoM')
// text elements arriba de bubble
const fechaEntrega = document.getElementById("fechaEntrega")
const fechaEntregaMobile = document.getElementById("fechaEntregaMobile")

//Declaracion de variables  
let grupoEntrega = 0
let ruedosEntrega = 0
let manubrioEntrega = 0

//Declaracion de fecha actual
const newDate = new Date
//Declaracion de array
const arrayMeses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//verificar si se estan usando... (preciosypeso)
const asdf = $('input[name="sizeBike"]')
const asdf12 = $('input[name="groupset"]')

/* PESOS */
let PESO_FRAMESET = 3100
let PESO_GRUPO = 2418
let PESO_RUEDOS = 1700
let PESO_MANUBRIO = 300


/* PRECIOS */
let PRECIO_FRAMESET = 50297
let PRECIO_GRUPO = 19833
let PRECIO_RUEDOS = 6013
let PRECIO_MANUBRIO = 863
let PRECIO_BASE = 0
let PRECIO_DISENO = 0


/*--------1. Precios y pesos---------*/
// Suma en vivo desplegada en la "bubble" de los precios y pesos del producto

// Temp Conversion rate
conv = 18.50
var temp =  PRECIO_FRAMESET + PRECIO_GRUPO + PRECIO_RUEDOS + PRECIO_MANUBRIO + PRECIO_BASE + PRECIO_DISENO;
PrecioUSD = formatMoney(temp/conv)
console.log(PrecioUSD)
innerPrecio.innerText = PrecioUSD + ' USD'
innerPrecioM.innerText= PrecioUSD + ' USD'

function formatMoney(number) {
    // return number.toLocaleString('en-US');
    console.log(number)
    let n = number.toFixed(2);
    num = n.toString().substring(0, n.length - 4);
    console.log(num)
    number = num + "9.99"
    console.log(number)

    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
function SetPrecio(){
    console.log('set precio')
    var bubble = PRECIO_FRAMESET + PRECIO_GRUPO + PRECIO_RUEDOS + PRECIO_MANUBRIO + PRECIO_BASE + PRECIO_DISENO;
    // var bubble = PRECIO_FRAMESET + PRECIO_GRUPO + PRECIO_RUEDOS + PRECIO_MANUBRIO + PRECIO_BASE + PRECIO_DISENO + PRECIO_TAMANO;
    PrecioUSD = formatMoney(bubble/conv)
    innerPrecio.innerText = PrecioUSD + ' USD'
    innerPrecioM.innerText= PrecioUSD + ' USD'
}
function SetPeso(){
    // var bubble = PESO_FRAMESET + PESO_GRUPO + PESO_RUEDOS + PESO_MANUBRIO + PRECIO_TAMANO;
    var bubble = PESO_FRAMESET + PESO_GRUPO + PESO_RUEDOS + PESO_MANUBRIO;
    innerPeso.innerText = bubble/1000 + ' Kg'
    innerPesoM.innerText = bubble/1000 + ' Kg'
}


/*--------2. Fecha entrega---------*/
// Calculo de la fecha estimada de entrega

fechaEntrega.innerHTML = ((arrayMeses[newDate.getMonth() + 2] + ' ' + newDate.getFullYear()));
fechaEntregaMobile.innerHTML = ((arrayMeses[newDate.getMonth() + 2] + ' ' + newDate.getFullYear()));
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
    fechaEntregaMobile.innerText = day
    console.log(day)
}


/*--------3. Option Triggers---------*/
// Al seleccionar opción en frontend, event trigger la opción en las variantes

// BIKE SIZE : xs, s, m, ml, l, xl
LIST_OF_SIZEBIKE.forEach((e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target);
            PESO_FRAMESET = parseInt(event.target.getAttribute('peso'), 10);
            PRECIO_FRAMESET = parseInt(event.target.getAttribute('precio'), 10);
            SetPrecio();
            SetPeso();

            CuadroRuta = e.id;
            if (CuadroRuta == "XS") {
                // xs
                $('#option-set-36f477ffcc77809c3424e746653bfbf0 :eq(8)').trigger('click');
            } else if (CuadroRuta == "S") {
                // s
                $('#option-set-36f477ffcc77809c3424e746653bfbf0 :eq(1)').trigger('click');
            } else if (CuadroRuta == "M") {
                // m
                $('#option-set-36f477ffcc77809c3424e746653bfbf0 :eq(2)').trigger('click');
            } else if (CuadroRuta == "ML") {
                // ml
                $('#option-set-36f477ffcc77809c3424e746653bfbf0 :eq(10)').trigger('click');
            } else if (CuadroRuta == "L") {
                // l
                $('#option-set-36f477ffcc77809c3424e746653bfbf0 :eq(4)').trigger('click');
            } else if (CuadroRuta == "XL") {
                // xl
                $('#option-set-36f477ffcc77809c3424e746653bfbf0 :eq(6)').trigger('click');
            }
        }
    });
});

// Al seleccionar opción en frontend, trigger la opción en las variantes
// BIKE STYLE : Endurance, All Rounder, Race
LIST_OF_BIKETYPE.forEach( (e) => {
    e.addEventListener('change', (event) => {
        CuadroType = e.id
        if (CuadroType == "endurance"){
            // xs
            $('#option-set-44ab38aa9ec3274b93476adb8a90137d :eq(1)').trigger('click');               
        } else if (CuadroType == "allrounder"){
            // s
            $('#option-set-44ab38aa9ec3274b93476adb8a90137d :eq(2)').trigger('click');               
        } else if (CuadroType == "race") {
            // m
            $('#option-set-44ab38aa9ec3274b93476adb8a90137d :eq(4)').trigger('click');               
        } 
    });
});

// Al seleccionar opción en frontend, trigger la opción en las variantes
// GROUPSET : 105 y ULTEGRA
LIST_OF_GROUPSET.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PESO_GRUPO = parseInt(event.target.getAttribute('peso'), 10) 
            PRECIO_GRUPO = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
            SetPeso();
            
            groupsetFinal = e.value;
            console.log("groupset: " + groupsetFinal)
            if (groupsetFinal == "0"){
                // 105
                $('#option-set-8b0874b3c1eb6f928fccda8875ef7e5b :eq(0)').trigger('click');
                grupoEntrega = 0
                getDelivery()
            } else if (groupsetFinal == "1") {
                // Ultegra
                $('#option-set-8b0874b3c1eb6f928fccda8875ef7e5b :eq(2)').trigger('click');
                grupoEntrega = 1
                getDelivery() 
            }  
        } 
    });
});
 
// Al seleccionar opción en frontend, trigger la opción en las variantes
// RINES : Aluminio y Carbon
LIST_OF_RINES.forEach((e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target);
            PESO_RUEDOS = parseInt(event.target.getAttribute('peso'), 10);
            PRECIO_RUEDOS = parseInt(event.target.getAttribute('precio'), 10);
            SetPrecio();
            SetPeso();

            rinesFinal = e.value;
            console.log("rinesFinal: " + rinesFinal);
            if (rinesFinal == "0") {
                // Aluminio
                $('#option-set-010268edf9c5a7a711de03ee2b2d5247 :eq(0)').trigger('click');
                ruedosEntrega = 0;
                getDelivery();
            } else if (rinesFinal == "1") {
                // Carbon
                $('#option-set-010268edf9c5a7a711de03ee2b2d5247 :eq(2)').trigger('click');
                ruedosEntrega = 1;
                getDelivery();
            }
        }
    });
});

// Al seleccionar opción en frontend, trigger la opción en las variantes
// MANUBRIO : Aluminio y Carbon Aero
LIST_OF_MANUBRIO.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PESO_MANUBRIO = parseInt(event.target.getAttribute('peso'), 10) 
            PRECIO_MANUBRIO = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
            SetPeso();;
            
            manubrioFinal = e.value;
            console.log("manubrioFinal: " + manubrioFinal)
            if (manubrioFinal == "0"){
                // Aluminio
                $('#option-set-86ceabcd24d69345c43f8fbea81df71a :eq(0)').trigger('click');
                manubrioEntrega = 0
                getDelivery() 
            } else if (manubrioFinal == "1") {
                // Carbon Aero
                $('#option-set-86ceabcd24d69345c43f8fbea81df71a :eq(2)').trigger('click');
                manubrioEntrega = 1
                getDelivery() 
            }  
        } 
    });
});

// Al seleccionar opción en frontend, trigger la opción en las variantes
// ACABADOS
LIST_OF_BASE.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PRECIO_BASE = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
            SetPeso();
            
            baseFinal = e.value;
            if (baseFinal == 0){
                // Brushed
                $('#option-set-a54fde2b7ca48ae7ff0c18cbad1cdd79 :eq(0)').trigger('click'); 
            } else if (baseFinal == 1) {
                // Sanblasted
                $('#option-set-845a8a0c20f6a95a40c063725084c7a4 :eq(0)').trigger('click'); 
            }  
        } 
    });
});

//DISEÑO: Invertidos, Rombos, None
// Pertenecen a diferentes grupos de productos en el sistema de Webflow, por eso más variantes
LIST_OF_DISENO.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PRECIO_DISENO = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
            SetPeso();
            
            var v = e.value;
            if(v == 0   ){
                console.log("Invertido")
                // Invertidos
                // brushed
                $('#option-set-9ba2cdc21b51ddff49c66de5ae8a7730 :eq(2)').trigger('click'); 
                // sandblasted
                $('#option-set-36fcfacf2c4b0114bbb751a1680cf542 :eq(2)').trigger('click'); 
            }else if(v == 2){
                console.log("Clean")
                // None
                // brushed
                $('#option-set-9ba2cdc21b51ddff49c66de5ae8a7730 :eq(4)').trigger('click'); 
                // sandblasted
                $('#option-set-36fcfacf2c4b0114bbb751a1680cf542 :eq(4)').trigger('click'); 
            }else if(v == 1){
                console.log("Regular")
                // Rombos
                // brushed
                $('#option-set-9ba2cdc21b51ddff49c66de5ae8a7730 :eq(0)').trigger('click'); 
                // sandblasted
                $('#option-set-36fcfacf2c4b0114bbb751a1680cf542 :eq(0)').trigger('click'); 
            } 
        } 
    });
});

// COLOR: Green, Teal, Bronze, Blue, Purple, Gold, Rose, Violet, Navy Blue, NA
$('input[name="color"]').click( function(){
    colorFinal = this.value;
    // console.log(colorFinal)
    if (colorFinal == "GR"){
        // brushed
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(8)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(8)').trigger('click'); 
    } else if (colorFinal == "TE"){
        // brushed
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(16)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(16)').trigger('click'); 
    } else if (colorFinal == "BR"){
        // brushed
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(4)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(4)').trigger('click'); 
    } else if (colorFinal == "BL"){
        // brushed
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(2)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(2)').trigger('click'); 
    } else if (colorFinal == "PU"){
        // brushed
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(12)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(12)').trigger('click'); 
    } else if (colorFinal == "GO"){
        // brushed
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(6)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(6)').trigger('click'); 
    } else if (colorFinal == "PL"){
        // brushed
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(10)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(10)').trigger('click'); 
    } else if (colorFinal == "RO"){
        // brushed
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(14)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(14)').trigger('click'); 
    } else if (colorFinal == "VI"){
        // brushed
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(18)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(18)').trigger('click'); 
    } else if (colorFinal == "NA"){
        // brushed
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(0)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(0)').trigger('click'); 
    }
});


// Al seleccionar opción en frontend, trigger la opción en las variantes
// ENGRAVING: Yes or No

$('input[name="grabado"]').click(function(){
    var isChecked = $(this).is(':checked');
    if (isChecked){
        // Yes
        $('[data-option-id="7efd2aaf6e20547e2de73bda063f4693"]').trigger('click'); 
    } else {
        // No
        $('[data-option-id="9edf06f130f4570e74fbeb568538be66"]').trigger('click');
    }    
});


/*--------4. Add to cart---------*/
// Añadir todos los productos y variantes seleccionadas al carrito

// Click en boton "checkout" frontend, para ir a función "Addtocart"
$('#irACheckout').click(function(){
    // setTimeout(1500);
    Addtocart()
});

/*En Webflow, un producto se va al carrito una vez que selecciones la variante y des click en "Add to cart", la página tiene más de un producto, por lo que se ocupa un "Add to cart" para cada uno...*/
// Función para que todos los productos se agregen al carrito al mismo tiempo
function Addtocart(){
    // Add to cart Cuadro 
    $('.add-to-cart-button-cuadro').trigger('click');
    // Add to cart groupset
    $('.add-to-cart-grupo').trigger('click');
    // Add to cart llantas
    $('.add-to-cart-llantas').trigger('click');
    // Add to cart manubrio
    $('.add-to-cart-button-manubrio').trigger('click');
    
    // add to cart brushed
    if (baseFinal == 0){
        $('.add-to-cart-acabados-b').trigger('click');
    // add to cart sandblasted
    } else{
        $('.add-to-cart-acabados-s').trigger('click');
    }
    
    // add to cart grabados
    $('.add-to-cart-button-7').trigger('click');
};

var observer = new MutationObserver(function(mutationsList, observer) {
    for (var mutation of mutationsList){
        // console.log("Style change")
        // console.log($(document.getElementById('close-cart-button2')).is(':visible'))
        if($(document.getElementById('close-cart-button2')).is(':visible') == false ){
            $("[data-wf-cart-action=remove-item]").each(function () {
                // click the underlaying html element, not the jquery object
                $(this)[0].click();
            });
        }

    }
});
observer.observe(document.getElementById('cart_wrapper2'), { attributes: true});


/*--------5. Clear cart---------*/
// Borrar todos los productos/variantes del carrito con un solo remove button

// Add event listener to the "remove" button
const removeButton = document.getElementById('remove-button');
removeButton.addEventListener('click', removeAllItemsFromCart);

// Function to remove all items from the cart
function removeAllItemsFromCart() {
  // Select all items in the cart
  const cartItems = document.querySelectorAll('[data-wf-cart-action="remove-item"]');

  // Trigger the click event on each item to remove it from the cart
  cartItems.forEach(item => {
    item.click();
  });
}