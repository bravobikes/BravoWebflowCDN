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
            $('#option-set-36f477ffcc77809c3424e746653bfbf0 :eq(8)').trigger('click');              
        } else if (CuadroRuta == "S"){
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
        } else if (CuadroRuta == "XL"){
            // xl
            $('#option-set-36f477ffcc77809c3424e746653bfbf0 :eq(6)').trigger('click'); 
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
        $('#option-set-86ceabcd24d69345c43f8fbea81df71a :eq(0)').trigger('click'); 
    } else if (manubrioFinal == "1") {
        // Ultegra
        $('#option-set-86ceabcd24d69345c43f8fbea81df71a :eq(2)').trigger('click'); 
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