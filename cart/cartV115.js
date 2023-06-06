// CART

// Triggers de backend productos al seleccionar opciones frontend
// "Add to cart" button, agrega todas las opciones previas de prodcutos y las sube al carrito

/*************************************************************************************************/

// Arreglo de de variantes de ese producto, regresa arreglo con los producto matching el tag "estilo" definido en Webflow.
const LIST_OF_BIKETYPE = Object.values($('input[name="ESTILO"]')).splice(0,3)

// var cartempty = true
const CartWrapper = document.getElementById('cart_wrapper2')
const Checkbox = document.getElementById('checkbox')
// const CartBitton = document.getElementById('close-cart-button')
// var runOnce = true


/*--------Option Triggers---------*/


// Al seleccionar opción en frontend, trigger la opción en las variantes
// BIKE SIZE : xs, s, m, ml, l, xl
LIST_OF_SIZEBIKE.forEach( (e) => {
    e.addEventListener('change', (event) => {
        CuadroRuta = e.id   
        if (CuadroRuta == "XS"){
            // xs
            $('[data-option-id="dae22aa2021e50fb6ce53668f2b6106d"]').trigger('click');              
        } else if (CuadroRuta == "S"){
            // s
            $('[data-option-id="dd14158ca4a9336dca6248d55136aac0"]').trigger('click');
        } else if (CuadroRuta == "M") {
            // m
            $('[data-option-id="0be3a988f75cbe93f07366322fb6702b"]').trigger('click'); 
        } else if (CuadroRuta == "ML") {
            // ml
            $('[data-option-id="d8f50d7011fded4e31e20345995aaba8"]').trigger('click'); 
        } else if (CuadroRuta == "L") {
            // l
            $('[data-option-id="9f2261fe0034594b19c4db965a04e72c"]').trigger('click'); 
        } else if (CuadroRuta == "XL"){
            // xl
            $('[data-option-id="eea2121024144fa858df57c8345f9128"]').trigger('click'); 
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
            $('[data-option-id="37f92c74adc2c4036b9a4d8908557ec7"]').trigger('click');               
        } else if (CuadroType == "allrounder"){
            // s
            $('[data-option-id="0568e6a72565abf36105fcd1f4d26f7f"]').trigger('click');               
        } else if (CuadroType == "race") {
            // m
            $('[data-option-id="759d4a4e38b6ffe9e2bfa7ef407a6367"]').trigger('click');               
        } 
    });
});

// Al seleccionar opción en frontend, trigger la opción en las variantes
// GROUPSET : 105 y ULTEGRA
$('input[name="groupset"]').click( function(){
    groupsetFinal = this.value;
    console.log("groupset: " + groupsetFinal)
    if (groupsetFinal == "0"){
        // 105
        $('#option-set-8b0874b3c1eb6f928fccda8875ef7e5b :eq(0)').trigger('click'); 
    } else if (groupsetFinal == "1") {
        // Ultegra
        $('#option-set-8b0874b3c1eb6f928fccda8875ef7e5b :eq(2)').trigger('click'); 
    }    
});
 
// Al seleccionar opción en frontend, trigger la opción en las variantes
// RINES : Aluminio y Carbon
$('input[name="rines"]').click( function(){
    rinesFinal = this.value;
    console.log("rinesFinal: " + rinesFinal)
    if (rinesFinal == "0"){
        // Aluminio
        $('[data-option-id="a0ac23b8e59be2d465b267d81172ad5c"]').trigger('click'); 
    } else if (rinesFinal == "1") {
        // Carbon
        $('[data-option-id="057191702dc3b7fc705b1527bee2ad40"]').trigger('click'); 
    }   
});

// Al seleccionar opción en frontend, trigger la opción en las variantes
// MANUBRIO : Aluminio y Ultegra
$('input[name="manubrio"]').click(function(){
    manubrioFinal = this.value;
    console.log("manubrioFinal: " + manubrioFinal)
    if (manubrioFinal == "0"){
        // Aluminio
        $('[data-option-id="34d9d4e24fa818fc3db96f74d22f3541"]').trigger('click'); 
    } else if (manubrioFinal == "1") {
        // Ultegra
        $('[data-option-id="41a0ea84e10708ed426c50fb0ff4c905"]').trigger('click'); 
    }    
});

// Al seleccionar opción en frontend, trigger la opción en las variantes
// ACABADOS

// BASE: Brushed y Sandblasted
$('input[name="base"]').click( function(){
    baseFinal = this.value;
    if (baseFinal == 0){
        // Brushed
        $('#option-set-a54fde2b7ca48ae7ff0c18cbad1cdd79 :eq(0)').trigger('click'); 
    } else if (baseFinal == 1) {
        // Sanblasted
        $('#option-set-845a8a0c20f6a95a40c063725084c7a4 :eq(0)').trigger('click'); 
    }
});

//DISEÑO: Invertidos, Rombos, None
// Pertenecen a diferentes grupos de productos en el sistema de Webflow, por eso más variantes
$('input[name="diseno"]').click( function(){
    var v = this.value;
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



/*--------Add items to cart---------*/


// Click en boton "checkout" frontend, para ir a función "Addtocart"
$('#irACheckout').click(function(){
    // setTimeout(1500);
    Addtocart()
});

//FALTA FUNCIÓN CLEAR CART

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