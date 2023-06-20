// Bubble & CART

// 0. Declare & Link Variables
// 1. Declare Inputs
// 2. Declare Functions
// 3. Default Values (bubble)
// 4. Event Listeners
// 5. Add to cart
// 6. Clear cart

/*************************************************************************************************/


/*--------0. Declare & Link Variables---------*/
// Declaración de variables y valores iniciales & linking Webflow elements to manipulate

// Arreglo de de variantes de ese producto, regresa arreglo con los producto matching el tag "estilo" definido en Webflow.
const LIST_OF_BIKETYPE = $('input[name="ESTILO"]').toArray().splice(0,3);
const LIST_OF_SIZEBIKE = $('input[name="sizeBike"]').toArray().splice(0,6);
const LIST_OF_GROUPSET = $('input[name="groupset"]').toArray().splice(0, 2);
const LIST_OF_RINES = $('input[name="rines"]').toArray().splice(0, 2);
const LIST_OF_MANUBRIO = $('input[name="manubrio"]').toArray().splice(0,2);
const LIST_OF_BASE = $('input[name="base"]').toArray().splice(0,2)
const LIST_OF_DISENO = $('input[name="diseno"]').toArray().splice(0,3)

const Checkbox = document.getElementById('checkbox');

// toma elementos que estan atribuidos a esa tag en Webflow  (inner=bubble)

const Precio = document.querySelector('#innerPrecio');
const Peso = document.querySelector('#innerPeso');

const PrecioM= document.querySelector('#innerPrecioM');
const PesoM = document.querySelector('#innerPesoM');

const Fecha = document.getElementById("fechaEntrega");
const FechaM = document.getElementById("fechaEntregaMobile");


/*--------1. Decalre Inputs---------*/
    
/* TIPO DE CAMBIO */
let conv = 18;
    
/* Pesos */
let CuadroRuta,
CuadroType,
groupsetFinal2,
rinesFinal2,
manubrioFinal2;
// en gramos
    
//frameset
let Peso_FS_XS = 3100 - 100;
let Peso_FS_S = 3100 - 50;
let Peso_FS_M = 3100;
let Peso_FS_ML = 3100 + 25;
let Peso_FS_L = 3100 + 75;
let Peso_FS_XL = 3100 + 125;
    
//grupo
let Peso_G_105 = 2418;
let Peso_G_Ult = 2418 - 300;
    
//manubrio
let Peso_M_Al = 300;
let Peso_M_Carb = 300 - 10;
    
//ruedos
let Peso_R_Al = 1700;
let Peso_R_Carb = 1700 - 300;
    
/* PRECIOS */
// en pesos
    
//framset
let Precio_FS_XS = 50297 - 1000;
let Precio_FS_S = 50297 - 500;
let Precio_FS_M = 50297;
let Precio_FS_ML = 50297 + 250;
let Precio_FS_L = 50297 + 750;
let Precio_FS_XL = 50297 + 1250;
    
//grupo
let Precio_G_105 = 19833;
let Precio_G_Ult = 19833 + 12000;
    
//manubrio
let Precio_M_Al = 863;
let Precio_M_Carb = 860 + 5000;
    
//ruedos
let Precio_R_Al = 6013;
let Precio_R_Carb = 6013 * 2.5;
    
//finish
let Precio_Base_SB = 0;
let Precio_Base_P = 5000;
    
let Precio_Diseno_clean = 0;
let Precio_Diseno_rhombos = 4000;
let Precio_Diseno_sleeve = 8000;
    
let Precio_NA = 0;
let Precio_Bron = 500;
let Precio_Purp = 1000;
let Precio_Blue = 1500;
let Precio_Plat = 2000;
let Precio_Gold = 2500;
let Precio_Rose = 5000;
let Precio_Viol = 6000;
let Precio_Teal = 7000;
let Precio_Gree = 8000;
    
/* Tiempos de Entrega */
// en dias
    
//saturation delay
let delay = 7;
    
//grupo
let Fecha_G_105 = 21;
let Fecha_G_Ult = 35;
    
//manubrio
let Fecha_M_Al = 10;
let Fecha_M_Carb = 42;
    
//ruedos
let Fecha_R_Al = 10;
let Fecha_R_Carb = 28;


/*--------2. Default Values (Bubble)---------*/
// Setting Default Price

let PRECIO_FRAMESET = Precio_FS_M;
let PRECIO_GRUPO = Precio_G_105;
let PRECIO_RUEDOS = Precio_R_Al;
let PRECIO_MANUBRIO = Precio_M_Al;
let PRECIO_BASE = Precio_Base_SB;
let PRECIO_DISENO = Precio_Diseno_rhombos;
let PRECIO_COLOR = Precio_Bron;

// Setting Default Weight

let PESO_FRAMESET = Peso_FS_M;
let PESO_GRUPO = Peso_G_105;
let PESO_RUEDOS = Peso_R_Al;
let PESO_MANUBRIO = Peso_M_Al;

// Setting Default Shipping Date

let ENTREGA_GRUPO = Fecha_G_105;
let ENTREGA_RUEDOS = Fecha_R_Al;
let ENTREGA_MANUBRIOS = Fecha_M_Al;


/*--------3. Declare Functionciones ---------*/

function getDelivery() {
    let today = new Date;
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let Months = ["January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"];
    
    let x, y;
    let bottleNeck = 0;
    bottleNeck = Math.max(ENTREGA_GRUPO, ENTREGA_RUEDOS, ENTREGA_MANUBRIOS);
    let delivery = delay + bottleNeck;
    let shipDay = day + delivery;
    
    for (let i = 1; i <= 12; i++){
        x = 30 * i;
        if (shipDay > x){
            month += 1;
            y = i;
        }
    }
    if(month > 11){
        month = month - 11; 
        year +=1;
    } else if (month > 23) {
        month = month - 11; 
        year +=2;
    }
    shipDay = day + delivery - x;
    shipDay = shipDay - 30 * y+365;

    let shipDate = shipDay + " " + Months[month] + " " + year;
    Fecha.text = shipDate;
    FechaM.text = shipDate;
}

function SetPeso() {
    var bubble = PESO_FRAMESET + PESO_GRUPO + PESO_RUEDOS + PESO_MANUBRIO;
    Peso.text = (bubble / 1000) + " Kg";
    PesoM.text = (bubble / 1000) + " Kg";
}

function formatMoney(num) {
    let n = num.toFixed(2);
    n = n.toString().substring(0, n.length - 4);
    n = n + "9.99";
    return n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function SetPrecio() {
    var bubble = PRECIO_FRAMESET + PRECIO_GRUPO + PRECIO_RUEDOS + PRECIO_MANUBRIO + PRECIO_BASE + PRECIO_DISENO + PRECIO_COLOR;
    let PrecioUSD = formatMoney(bubble/conv);
    Precio.text = PrecioUSD + ' USD';
    PrecioM.text = PrecioUSD + ' USD'
}

/*--------4. Event Listeners---------*/

// Conecta front end con back end usando event listeners.
// Tambien actualiza valores del fecha, peso y precio

// BIKE SIZE : xs, s, m, ml, l, xl
LIST_OF_SIZEBIKE.forEach((e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            CuadroRuta = e.id;
            if (CuadroRuta == "XS") {
                $('[data-option-id="dae22aa2021e50fb6ce53668f2b6106d"]').trigger('click');  
                PRECIO_FRAMESET = Precio_FS_XS;
                PESO_FRAMESET = Peso_FS_XS;
            } 
            else if (CuadroRuta == "S") {
                $('[data-option-id="dd14158ca4a9336dca6248d55136aac0"]').trigger('click');
                PRECIO_FRAMESET = Precio_FS_S;
                PESO_FRAMESET = Peso_FS_S;
            } 
            else if (CuadroRuta == "M") {
                $('[data-option-id="0be3a988f75cbe93f07366322fb6702b"]').trigger('click');
                PRECIO_FRAMESET = Precio_FS_M;
                PESO_FRAMESET = Peso_FS_M;
            } 
            else if (CuadroRuta == "ML") {
                $('[data-option-id="d8f50d7011fded4e31e20345995aaba8"]').trigger('click');
                PRECIO_FRAMESET = Precio_FS_ML;
                PESO_FRAMESET = Peso_FS_ML;
            } 
            else if (CuadroRuta == "L") {
                $('[data-option-id="9f2261fe0034594b19c4db965a04e72c"]').trigger('click');
                PRECIO_FRAMESET = Precio_FS_L;
                PESO_FRAMESET = Peso_FS_L;
            } 
            else if (CuadroRuta == "XL") {
                $('[data-option-id="eea2121024144fa858df57c8345f9128"]').trigger('click');
                PRECIO_FRAMESET = Precio_FS_XL;
                PESO_FRAMESET = Peso_FS_XL;
            }
        }
        SetPrecio();
        SetPeso();    
    });
});

// BIKE STYLE : Endurance, All Rounder, Race
LIST_OF_BIKETYPE.forEach((e) => {
    e.addEventListener('change', (event) => {
        CuadroType = e.id;
        if (CuadroType == "endurance"){
            $('[data-option-id="37f92c74adc2c4036b9a4d8908557ec7"]').trigger('click');               
        } 
        else if (CuadroType == "allrounder"){
            $('[data-option-id="0568e6a72565abf36105fcd1f4d26f7f"]').trigger('click');               
        } 
        else if (CuadroType == "race") {
            $('[data-option-id="759d4a4e38b6ffe9e2bfa7ef407a6367"]').trigger('click');               
        } 
    });
});


// GROUPSET : 105 y ULTEGRA
LIST_OF_GROUPSET.forEach( (e) => {
    e.addEventListener('change', (event) => {
        groupsetFinal2 = e.id;
        if (groupsetFinal2 == "0"){
            // 105
            $('[data-option-id="7115a172ac0ce02ac1ef40f118d8e3d5"]').trigger('click');
            ENTREGA_GRUPO = Fecha_G_105;
            PRECIO_GRUPO = Precio_G_105;
            PESO_GRUPO = Peso_G_105;
        } 
        else if (groupsetFinal2 == "1") {
            // Ultegra
            $('[data-option-id="c92f4e47d55eebb09614075d9a281ea6"]').trigger('click');
            ENTREGA_GRUPO = Fecha_G_Ult;
            PRECIO_GRUPO = Precio_G_Ult;
            PESO_GRUPO = Peso_G_Ult;
        }  
        SetPrecio();
        SetPeso();
        getDelivery();
    });
});

// RINES : Aluminio y Carbon
LIST_OF_RINES.forEach((e) => {
    e.addEventListener('change', (event) => {
        rinesFinal2 = e.value;
        if (rinesFinal2 == "0") {
            // Aluminio
            $('[data-option-id="a0ac23b8e59be2d465b267d81172ad5c"]').trigger('click');
            ENTREGA_RUEDOS = Fecha_R_Al;
            PRECIO_RUEDOS = Precio_R_Al;
            PESO_RUEDOS = Peso_R_Al;
        } 
        else if (rinesFinal2 == "1") {
            // Carbon
            $('[data-option-id="057191702dc3b7fc705b1527bee2ad40"]').trigger('click'); 
            ENTREGA_RUEDOS = Fecha_R_Carb;
            PRECIO_RUEDOS = Precio_R_Carb;
            PESO_RUEDOS = Peso_R_Carb;
        }
        SetPrecio();
        SetPeso();
        getDelivery(); 
    });
});

// MANUBRIO : Aluminio y Carbon Aero
 LIST_OF_MANUBRIO.forEach( (e) => {
    e.addEventListener('change', (event) => {
        manubrioFinal2 = e.value;
        if (manubrioFinal2 == "0"){
            // Aluminio
            $('[data-option-id="34d9d4e24fa818fc3db96f74d22f3541"]').trigger('click'); 
            ENTREGA_MANUBRIO = Fecha_M_Al;
            PRECIO_MANUBRIO = Precio_M_Al;
            PESO_MANUBRIO = Peso_M_Al;
        } 
        else if (manubrioFinal2 == "1") {
            // Carbon Aero
            $('[data-option-id="41a0ea84e10708ed426c50fb0ff4c905"]').trigger('click');
            ENTREGA_MANUBRIO = Fecha_M_Carb;
            PRECIO_MANUBRIO = Precio_M_Carb;
            PESO_MANUBRIO = Peso_M_Carb;
        }   

        SetPrecio();
        SetPeso();
        getDelivery();
    });
});

// ACABADOS

    // Base
LIST_OF_BASE.forEach( (e) => {
    e.addEventListener('change', (event) => {
        baseFinal2 = e.value;
        if (baseFinal2 == 0){
            // Polished
            $('#option-set-a54fde2b7ca48ae7ff0c18cbad1cdd79 :eq(0)').trigger('click'); 
            PRECIO_BASE = Precio_Base_P;
        } 
        else if (baseFinal2 == 1) {
            // Sanblasted
            $('#option-set-845a8a0c20f6a95a40c063725084c7a4 :eq(0)').trigger('click');
            PRECIO_BASE = Precio_Base_SB; 
        }  
    });
});

    //DISEÑO: Clean, Rombos, Sleeve
// Pertenecen a diferentes grupos de productos en el sistema de Webflow, por eso más variantes
LIST_OF_DISENO.forEach( (e) => {
    e.addEventListener('change', (event) => { 
        var v = e.value;
        if(v == 0){
            // Sleeve
            PRECIO_DISENO = Precio_Diseno_sleeve;
            // Polished
            $('#option-set-9ba2cdc21b51ddff49c66de5ae8a7730 :eq(2)').trigger('click');  
            // sandblasted
            $('#option-set-36fcfacf2c4b0114bbb751a1680cf542 :eq(2)').trigger('click'); 
        }else if(v == 2){
            // Clean
            PRECIO_DISENO = Precio_Diseno_clean;
            // Polished
            $('#option-set-9ba2cdc21b51ddff49c66de5ae8a7730 :eq(4)').trigger('click'); 
            // sandblasted
            $('#option-set-36fcfacf2c4b0114bbb751a1680cf542 :eq(4)').trigger('click'); 
        }else if(v == 1){
            // Rombos
            PRECIO_DISENO = Precio_Diseno_rhombos;
            // Polished
            $('#option-set-9ba2cdc21b51ddff49c66de5ae8a7730 :eq(0)').trigger('click'); 
            // sandblasted
            $('#option-set-36fcfacf2c4b0114bbb751a1680cf542 :eq(0)').trigger('click'); 
        } 
    });
});

// COLOR: Green, Teal, Bronze, Blue, Purple, Gold, Rose, Violet, Platinum, NA
$('input[name="color"]').click( function(){
    colorFinal2 = this.value;
    if (colorFinal2 == "GR"){
        PRECIO_COLOR = Precio_Gree;
        // Polished
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(8)').trigger('click');
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(8)').trigger('click'); 
    } else if (colorFinal2 == "TE"){
        PRECIO_COLOR = Precio_Teal;
        // Polished
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(16)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(16)').trigger('click'); 
    } else if (colorFinal2 == "BR"){
        PRECIO_COLOR = Precio_Bron;
        // Polished
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(4)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(4)').trigger('click'); 
    } else if (colorFinal2 == "BL"){
        PRECIO_COLOR = Precio_Blue;
        // Polished
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(2)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(2)').trigger('click'); 
    } else if (colorFinal2 == "PU"){
        PRECIO_COLOR = Precio_Purp;
        // Polished
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(12)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(12)').trigger('click'); 
    } else if (colorFinal2 == "GO"){
        PRECIO_COLOR = Precio_Gold;
        // Polished
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(6)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(6)').trigger('click'); 
    } else if (colorFinal2 == "PL"){
        PRECIO_COLOR = Precio_Plat;
        // Polished
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(10)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(10)').trigger('click'); 
    } else if (colorFinal2 == "RO"){
        PRECIO_COLOR = Precio_Rose;
        // Polished
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(14)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(14)').trigger('click'); 
    } else if (colorFinal2 == "VI"){
        PRECIO_COLOR = Precio_Viol;
        // Polished
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(18)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(18)').trigger('click'); 
    } else if (colorFinal2 == "NA"){
        PRECIO_COLOR = Precio_NA;
        // Polished
        $('#option-set-d924613d9676c191dd581a3d639b1006 :eq(0)').trigger('click'); 
        // sandblasted
        $('#option-set-d13184b7b9189fc150d84a0811fa8c94 :eq(0)').trigger('click'); 
    }
});

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


/*--------5. Add to cart---------*/
// Añadir todos los productos y variantes seleccionadas al carrito

// Click en boton "checkout" frontend, para ir a función "Addtocart"
$('#irACheckout').click(function(){
    // setTimeout(1500);
    Addtocart();
});

/*En Webflow, un producto se va al carrito una vez que selecciones la variante y des click en "Add to cart", la página tiene más de un producto, por lo que se ocupa un "Add to cart" para cada uno...*/
// Función para que todos los productos se agregen al carrito al mismo tiempo

function Addtocart(){
    $('.add-to-cart-button-cuadro').trigger('click');
    $('.add-to-cart-grupo').trigger('click');
    $('.add-to-cart-llantas').trigger('click');
    $('.add-to-cart-button-manubrio').trigger('click');    
    
    if (baseFinal2 == 0){
        $('.add-to-cart-acabados-b').trigger('click');
    } else{
        $('.add-to-cart-acabados-s').trigger('click');
    }
    
    // add to cart grabados
    $('.add-to-cart-button-7').trigger('click');
};

var observer = new MutationObserver(function(mutationsList, observer) {
    for (var mutation of mutationsList){
        if($(document.getElementById('close-cart-button2')).is(':visible') == false ){
            $("[data-wf-cart-action=remove-item]").each(function () {
                // click the underlaying html element, not the jquery object
                $(this)[0].click();
            });
        }
    }
});

observer.observe(document.getElementById('cart_wrapper2'), { attributes: true});


/*--------6. Clear cart---------*/
// Borrar todos los productos/variantes del carrito con un solo remove button

// Add event listener to the "remove" button
const removeButton = document.getElementById('remove-button');

removeButton.addEventListener('click', removeAllItemsFromCart);

function removeAllItemsFromCart() {
    // Select all items in the cart
    const cartItems = document.querySelectorAll('[data-wf-cart-action="remove-item"]');

    // Trigger the click event on each item to remove it from the cart
    cartItems.forEach(item => {
        item.click();
    });
}