// Bubble & CART

// 0. Declare & Link Variables
// 1. Declare Inputs
// 2. Declare Functions
// 3. Default Values (bubble)
// 4. Event Listeners
// 5. Add to cart
// 6. Clear cart

/*********************************/


/--------0. Declare & Link Variables---------/
// Declaración de variables y valores iniciales & linking Webflow elements to manipulate

// Arreglo de de variantes de ese producto, regresa arreglo con los producto matching el tag "estilo" definido en Webflow.
const LIST_OF_BIKETYPE = $('input[name="ESTILO"]').toArray().splice(0,3);
const LIST_OF_SIZEBIKE = $('input[name="sizeBike"]').toArray().splice(0,6);
const LIST_OF_GROUPSET = $('input[name="groupset"]').toArray().splice(0, 2);
const LIST_OF_RINES = $('input[name="rines"]').toArray().splice(0, 2);
const LIST_OF_MANUBRIO = $('input[name="manubrio"]').toArray().splice(0,2);
const LIST_OF_BASE = $('input[name="base"]').toArray().splice(0,2)
const LIST_OF_DISENO = $('input[name="diseno"]').toArray().splice(0,3)

const checkbox = document.getElementById('framesetOnly');
const checkoutButton = document.getElementById('proceedToCheckout');

// toma elementos que estan atribuidos a esa tag en Webflow  (inner=bubble)

const Precio = document.querySelector('#innerPrecio');
const Peso = document.querySelector('#innerPeso');

const PrecioM= document.querySelector('#innerPrecioM');
const PesoM = document.querySelector('#innerPesoM');

const Fecha = document.getElementById("fechaEntrega");
const FechaM = document.getElementById("fechaEntregaMobile");

const newPrecioR = document.getElementById("precioUpgradeRuedos");
const newPrecioG = document.getElementById("precioUpgradeGrupo");
const newPrecioM = document.getElementById("precioUpgradeManubrio");

/--------1. Decalre Inputs---------/
    
/* TIPO DE CAMBIO */
let conv = 18;
    
/* Pesos */
let CuadroRuta,
CuadroType,
groupsetFinal2,
rinesFinal2,
manubrioFinal2,
baseFinal2;
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
newPrecioG.innerText = "+ " + formatMoney((Precio_G_Ult - 19833)/conv);
    
//manubrio
let Precio_M_Al = 863;
let Precio_M_Carb = 860 + 5000;
newPrecioM.innerText= "+ " + formatMoney((Precio_M_Carb - 860)/conv);

//ruedos
let Precio_R_Al = 6013;
let Precio_R_Carb = 6013 * 2.5;
newPrecioR.innerText = "+ " + formatMoney((Precio_R_Carb - 6013)/conv);

//finish
let Precio_Base_SB = 0;
let Precio_Base_P = 5000;
    
let Precio_Diseno_clean = 0;
let Precio_Diseno_rhombos = 4000;
let Precio_Diseno_sleeve = 8000;
    
let Precio_NA = 0;
let Precio_Bron = 2000;
let Precio_Purp = 2000;
let Precio_Blue = 2000;
let Precio_Plat = 2000;
let Precio_Gold = 5000;
let Precio_Rose = 5000;
let Precio_Viol = 5000;
let Precio_Teal = 5000;
let Precio_Gree = 5000;

//engraving
let Precio_Yes = 0;
let Precio_No = 0;
    
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


/--------2. Default Values (Bubble)---------/
// Setting Default Price

let PRECIO_FRAMESET = Precio_FS_M;
let PRECIO_GRUPO = Precio_G_105;
let PRECIO_RUEDOS = Precio_R_Al;
let PRECIO_MANUBRIO = Precio_M_Al;
let PRECIO_BASE = Precio_Base_SB;
let PRECIO_DISENO = Precio_Diseno_clean;
let PRECIO_COLOR = Precio_NA;
let PRECIO_ENGRAVING = Precio_Yes;

// Setting Default Weight

let PESO_FRAMESET = Peso_FS_M;
let PESO_GRUPO = Peso_G_105;
let PESO_RUEDOS = Peso_R_Al;
let PESO_MANUBRIO = Peso_M_Al;

// Setting Default Shipping Date

let ENTREGA_GRUPO = Fecha_G_105;
let ENTREGA_RUEDOS = Fecha_R_Al;
let ENTREGA_MANUBRIOS = Fecha_M_Al;


/--------3. Declare Functionciones ---------/

function getDelivery() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let Months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    let daysInMonth = [
      31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];
  
    let x, y;
    let bottleNeck = 0;
    bottleNeck = Math.max(ENTREGA_GRUPO, ENTREGA_RUEDOS, ENTREGA_MANUBRIOS);
    let delivery = delay + bottleNeck;
    let shipDay = day + delivery;
  
    while (shipDay > daysInMonth[month]) {
      shipDay -= daysInMonth[month];
      month++;
      if (month >= 12) {
        month = 0;
        year++;
      }
    }
  
    let shipDate = shipDay + " " + Months[month] + " " + year;
    Fecha.innerText = shipDate;
    FechaM.innerText = shipDate;
  }  

function SetPeso() {
    var bubble = PESO_FRAMESET + PESO_GRUPO + PESO_RUEDOS + PESO_MANUBRIO;
    Peso.innerText = (bubble / 1000) + " Kg";
    PesoM.innerText = (bubble / 1000) + " Kg";
}

function formatMoney(num) {
    let n = num.toFixed(2);
    n = n.toString().substring(0, n.length - 4);
    n = "$" + n + "9.00";
    return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
  }  

function SetPrecio() {
    var bubble = PRECIO_FRAMESET + PRECIO_GRUPO + PRECIO_RUEDOS + PRECIO_MANUBRIO + PRECIO_BASE + PRECIO_DISENO + PRECIO_COLOR + PRECIO_ENGRAVING;
    let PrecioUSD = formatMoney(bubble/conv);
    Precio.innerText = PrecioUSD + ' USD';
    PrecioM.innerText = PrecioUSD + ' USD'
}
SetPrecio();
SetPeso();
getDelivery();

// Function to set the 'cart' cookie
function setCartCookie(cartData) {
    const cartDataString = JSON.stringify(cartData);
    setCookie('cart', cartDataString, 30); // Expires in 30 days
}

// Function to get cart data from the 'cart' cookie
function getCartCookie() {
    const cartDataString = getCookie('cart');
    if (cartDataString) {
        return JSON.parse(cartDataString);
    }
    return null;
}

// Function to set a cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Example usage
const cart = getCartCookie();
if (cart) {
    console.log('Cart data loaded from the cookie:', cart);
    // Use the cart data as needed
} else {
    console.log('No valid cart data found in the cookie.');
}

// You can set the 'cart' cookie like this:
// const cart = ['Apple', 'Pear', 'Banana'];
// setCartCookie(cart);




/--------4. Event Listeners---------/

// Conecta front end con back end usando event listeners.
// Tambien actualiza valores del fecha, peso y precio

// BIKE SIZE : xs, s, m, ml, l, xl
// Function to set the selected frame size option and update the cookie
function setSelectedFrameSize(optionId) {
    // Trigger the 'click' event for the selected frame size
    $(`[data-option-id="${optionId}"]`).trigger('click');

    // Update the cookie with the selected frame size
    Cookies.set('selectedFrameSize', optionId);

    // Add logic to update other variables as needed
    if (optionId === 'dae22aa2021e50fb6ce53668f2b6106d') {
        PRECIO_FRAMESET = Precio_FS_XS;
        PESO_FRAMESET = Peso_FS_XS;
        SetPrecio();
        SetPeso();
    } else if (optionId === 'dd14158ca4a9336dca6248d55136aac0') {
        PRECIO_FRAMESET = Precio_FS_S;
        PESO_FRAMESET = Peso_FS_S;
        SetPrecio();
        SetPeso();
    } else if (optionId === '0be3a988f75cbe93f07366322fb6702b') {
        PRECIO_FRAMESET = Precio_FS_M;
        PESO_FRAMESET = Peso_FS_M;
        SetPrecio();
        SetPeso();
    } else if (optionId === 'd8f50d7011fded4e31e20345995aaba8') {
        PRECIO_FRAMESET = Precio_FS_ML;
        PESO_FRAMESET = Peso_FS_ML;
        SetPrecio();
        SetPeso();
    } else if (optionId === '9f2261fe0034594b19c4db965a04e72c') {
        PRECIO_FRAMESET = Precio_FS_L;
        PESO_FRAMESET = Peso_FS_L;
        SetPrecio();
        SetPeso();
    } else if (optionId === 'eea2121024144fa858df57c8345f9128') {
        PRECIO_FRAMESET = Precio_FS_XL;
        PESO_FRAMESET = Peso_FS_XL;
        SetPrecio();
        SetPeso();
    }
}

// Event listener for frame size changes
LIST_OF_SIZEBIKE.forEach((e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            const selectedOptionId = e.id;

            // Call the function to set the selected frame size and update the cookie
            setSelectedFrameSize(selectedOptionId);
        }
    });
});

// Load selected frame size from the cookie and set it during page load
const selectedFrameSizeFromCookie = Cookies.get('selectedFrameSize');
if (selectedFrameSizeFromCookie) {
    setSelectedFrameSize(selectedFrameSizeFromCookie);
}

// BIKE STYLE : Endurance, All Rounder, Race
LIST_OF_BIKETYPE.forEach((e) => {
    e.addEventListener('change', (event) => {
        CuadroType = e.id;
        if (CuadroType == "endurance"){
            $('[data-option-id="37f92c74adc2c4036b9a4d8908557ec7"]').trigger('click');
            SetPrecio();
            SetPeso();               
        } 
        else if (CuadroType == "allrounder"){
            $('[data-option-id="0568e6a72565abf36105fcd1f4d26f7f"]').trigger('click');
            SetPrecio();
            SetPeso();               
        } 
        else if (CuadroType == "race") {
            $('[data-option-id="759d4a4e38b6ffe9e2bfa7ef407a6367"]').trigger('click');
            SetPrecio();
            SetPeso();               
        } 
    });
});

// FRAMESSET ONLY : Yes or No
checkbox.addEventListener('change', function() {
  const elementsToHide = document.querySelectorAll('[hideWrapper]');
  const imagesToHide = document.querySelectorAll('[hideImage]');


  if (checkbox.checked) {
    elementsToHide.forEach(element => {
      element.style.display = 'none';
    });
  } else {
    elementsToHide.forEach(element => {
      element.style.display = 'flex';
    });
    imagesToHide.forEach(element => {
        element.style.display = 'none';
        element.style.opacity = 1;
      });
  }
});


// GROUPSET : 105 y ULTEGRA
LIST_OF_GROUPSET.forEach( (e) => {
    e.addEventListener('change', (event) => {
        groupsetFinal2 = e.value;
        if (groupsetFinal2 == "0"){
            // 105
            $('[data-option-id="7115a172ac0ce02ac1ef40f118d8e3d5"]').trigger('click');
            ENTREGA_GRUPO = Fecha_G_105;
            PRECIO_GRUPO = Precio_G_105;
            PESO_GRUPO = Peso_G_105;
            SetPrecio();
            SetPeso();
            getDelivery();
        } 
        else if (groupsetFinal2 == "1") {
            // Ultegra
            $('[data-option-id="c92f4e47d55eebb09614075d9a281ea6"]').trigger('click');
            ENTREGA_GRUPO = Fecha_G_Ult;
            PRECIO_GRUPO = Precio_G_Ult;
            PESO_GRUPO = Peso_G_Ult;
            SetPrecio();
            SetPeso();
            getDelivery();
        }       
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
            SetPrecio();
            SetPeso();
            getDelivery(); 
        } 
        else if (rinesFinal2 == "1") {
            // Carbon
            $('[data-option-id="057191702dc3b7fc705b1527bee2ad40"]').trigger('click'); 
            ENTREGA_RUEDOS = Fecha_R_Carb;
            PRECIO_RUEDOS = Precio_R_Carb;
            PESO_RUEDOS = Peso_R_Carb;
            SetPrecio();
            SetPeso();
            getDelivery(); 
        }
    });
});

// MANUBRIO : Aluminio y Carbon Aero
 LIST_OF_MANUBRIO.forEach( (e) => {
    e.addEventListener('change', (event) => {
        manubrioFinal2 = e.value;
        if (manubrioFinal2 == "0"){
            // Aluminio
            $('[data-option-id="34d9d4e24fa818fc3db96f74d22f3541"]').trigger('click'); 
            ENTREGA_MANUBRIOS = Fecha_M_Al;
            PRECIO_MANUBRIO = Precio_M_Al;
            PESO_MANUBRIO = Peso_M_Al;
            SetPrecio();
            SetPeso();
            getDelivery();
        } 
        else if (manubrioFinal2 == "1") {
            // Carbon Aero
            $('[data-option-id="41a0ea84e10708ed426c50fb0ff4c905"]').trigger('click');
            ENTREGA_MANUBRIOS = Fecha_M_Carb;
            PRECIO_MANUBRIO = Precio_M_Carb;
            PESO_MANUBRIO = Peso_M_Carb;
            SetPrecio();
            SetPeso();
            getDelivery();
        }   
    });
});

// ACABADOS

    // Base
LIST_OF_BASE.forEach( (e) => {
    e.addEventListener('change', (event) => {
        baseFinal2 = e.value;
        if (baseFinal2 == 0){
            // Brushed
            $('[data-option-id="0e46538b3689bc7aa6d55ce286d6e69d"]').trigger('click'); 
            PRECIO_BASE = Precio_Base_P;
            SetPrecio();
        } 
        else if (baseFinal2 == 1) {
            // Sanblasted
            $('[data-option-id="b2234e0d12e15a8d64f5f102bd75e747"]').trigger('click');
            PRECIO_BASE = Precio_Base_SB; 
            SetPrecio();
        }  
    });
});

    //DISEÑO: Clean, Rombos, Sleeve
// Pertenecen a diferentes grupos de productos en el sistema de Webflow, por eso más variantes
LIST_OF_DISENO.forEach( (e) => {
    e.addEventListener('change', (event) => { 
        var v = e.value;
        if(v == 0){
            // Inverted
            PRECIO_DISENO = Precio_Diseno_sleeve;
            // Brushed
            $('[data-option-id="4671dc6a2bcac5b6415fad6e164462e1"]').trigger('click');  
            // sandblasted
            $('[data-option-id="f96f12a5c0bc992d31ddc399efaaa804"]').trigger('click');
            SetPrecio();
        }else if(v == 2){
            // Clean
            PRECIO_DISENO = Precio_Diseno_clean;
            // Brushed
            $('[data-option-id="5ede1c30deddb05d8fd792eae3a6809e"]').trigger('click'); 
            // sandblasted
            $('[data-option-id="e6c37ed8b12a8df1cf21780de81d8a0d"]').trigger('click');
            SetPrecio();
        }else if(v == 1){
            // Rombos
            PRECIO_DISENO = Precio_Diseno_rhombos;
            // Brushed
            $('[data-option-id="a0ca5fee186b40a2e2bbd94530be2aa0"]').trigger('click'); 
            // sandblasted
            $('[data-option-id="4112093724a2ed0408bc298fb342f40c"]').trigger('click');
            SetPrecio();
        } 
    });
});

// COLOR: Green, Teal, Bronze, Blue, Purple, Gold, Rose, Violet, Platinum, NA
$('input[name="color"]').click( function(){
    colorFinal2 = this.value;
    if (colorFinal2 == "GR"){
        PRECIO_COLOR = Precio_Gree;
        // Brushed
        $('[data-option-id="1d82368092493c4a7aed76d3cfbb5481"]').trigger('click');
        // sandblasted
        $('[data-option-id="845e3b5dd3e734cb02b1cdad642d4f2b"]').trigger('click');
        SetPrecio();
    } else if (colorFinal2 == "TE"){
        PRECIO_COLOR = Precio_Teal;
        // Brushed
        $('[data-option-id="cfb2dda2d3f322d549d662ff81fcab77"]').trigger('click'); 
        // sandblasted
        $('[data-option-id="a29c396c818d2afabaa008dce778fa57"]').trigger('click');
        SetPrecio();
    } else if (colorFinal2 == "BR"){
        PRECIO_COLOR = Precio_Bron;
        // Brushed
        $('[data-option-id="98b2d715a833dfdaa27a8300cfac29cd"]').trigger('click'); 
        // sandblasted
        $('[data-option-id="82e8659e316df363efeeb814fd0b5d1d"]').trigger('click');
        SetPrecio();
    } else if (colorFinal2 == "BL"){
        PRECIO_COLOR = Precio_Blue;
        // Brushed
        $('[data-option-id="254e840b6f2d87460d0d14e9bbc3fe76"]').trigger('click'); 
        // sandblasted
        $('[data-option-id="77f7fac847f37da76b54473f8451f21a"]').trigger('click');
        SetPrecio();
    } else if (colorFinal2 == "PU"){
        PRECIO_COLOR = Precio_Purp;
        // Brushed
        $('[data-option-id="56cad3abca4172f0c0c7c01080d55e87"]').trigger('click'); 
        // sandblasted
        $('[data-option-id="2a14e77c18ab7cfb0ee9164182b607f3"]').trigger('click');
        SetPrecio(); 
    } else if (colorFinal2 == "GO"){
        PRECIO_COLOR = Precio_Gold;
        // Brushed
        $('[data-option-id="f8a33e716e16422cc773b21a73cfd0bc"]').trigger('click'); 
        // sandblasted
        $('[data-option-id="066d49a8c6c6025c4c7cdeec6cc2bf1d"]').trigger('click');
        SetPrecio(); 
    } else if (colorFinal2 == "PL"){
        PRECIO_COLOR = Precio_Plat;
        // Brushed
        $('[data-option-id="fc4a63d06529999ab0e83d11095ff6dd"]').trigger('click'); 
        // sandblasted
        $('[data-option-id="59614829439144b0abae300fb61e0066"]').trigger('click');
        SetPrecio(); 
    } else if (colorFinal2 == "RO"){
        PRECIO_COLOR = Precio_Rose;
        // Brushed
        $('[data-option-id="ec56372be3f38d687f2b77afbbec7502"]').trigger('click'); 
        // sandblasted
        $('[data-option-id="2d5c68b5b3852c4fd63fc089f79fc2db"]').trigger('click');
        SetPrecio(); 
    } else if (colorFinal2 == "VI"){
        PRECIO_COLOR = Precio_Viol;
        // Brushed
        $('[data-option-id="5f86d34fcc34f221fc1511a5fb3685eb"]').trigger('click'); 
        // sandblasted
        $('[data-option-id="ea92d45d62734b294a9d562f0dd129e8"]').trigger('click');
        SetPrecio(); 
    } else if (colorFinal2 == "NA"){
        PRECIO_COLOR = Precio_NA;
        // Brushed
        $('[data-option-id="ea8cb86ee64b94ed751223cd0d9e18ce"]').trigger('click'); 
        // sandblasted
        $('[data-option-id="7b0c87cfd93d248f5b94ce9f35acbf71"]').trigger('click');
        SetPrecio(); 
    }
});

// ENGRAVING: Yes or No

$('input[name="grabado"]').click(function(){
    var isChecked = $(this).is(':checked');
    if (isChecked){
        PRECIO_ENGRAVING = Precio_Yes;
        // Yes
        $('[data-option-id="7efd2aaf6e20547e2de73bda063f4693"]').trigger('click');
        initials = 1;
        SetPrecio(); 
    } else {
        PRECIO_ENGRAVING = Precio_No;
        // No
        $('[data-option-id="9edf06f130f4570e74fbeb568538be66"]').trigger('click');
        SetPrecio();
    }    
});


/*--------5. Add to cart---------*/
// Añadir todos los productos y variantes seleccionadas al carrito



/*En Webflow, un producto se va al carrito una vez que selecciones la variante y des click en "Add to cart", la página tiene más de un producto, por lo que se ocupa un "Add to cart" para cada uno...*/
// Función para que todos los productos se agregen al carrito al mismo tiempo

function Addtocart(cart) {
    var items = [];
    
    // Add selected items to the array in the desired order
    if (checkbox.checked) { //frameset only
        items.push($('.add-to-cart-button-cuadro')[0]);
        if (baseFinal2 == 0) {
            items.push($('.add-to-cart-acabados-b')[0]);
        } else {
            items.push($('.add-to-cart-acabados-s')[0]);
        }
        items.push($('.add-to-cart-button-7')[0]);
    }else{ //full bike
        items.push($('.add-to-cart-button-cuadro')[0]);
        items.push($('.add-to-cart-grupo')[0]);
        items.push($('.add-to-cart-llantas')[0]);
        items.push($('.add-to-cart-button-manubrio')[0]);
        if (baseFinal2 == 0) {
            items.push($('.add-to-cart-acabados-b')[0]);
            } else {
            items.push($('.add-to-cart-acabados-s')[0]);
            }
        items.push($('.add-to-cart-button-7')[0]);
    }
    
    // Trigger the 'click' event for each item in the array
    items.forEach(function(item) {
      item.click();
    });

    saveCartToCookie(cart); //update cookies
};

// Click en boton "checkout" frontend, para ir a función "Addtocart"
$('#irACheckout').click(function(){
    // setTimeout(1500);
    Addtocart();
});

$('#addAgain').click(function(){
    Addtocart();
});

// Function to hide the modal with a move-out effect
function hideModalWithMoveOut() {
    const modal = document.getElementById('cart_wrapper2');
    let positionY = 0;

    function moveOut() {
        if (positionY <= 100) {
            positionY += 5; // Adjust the increment value to control the speed of the move-out
            modal.style.transform = `translateY(${positionY}%)`;
            requestAnimationFrame(moveOut);
        } else {
            modal.style.display = 'none';
            modal.style.transform = 'none';
        }
    }

    requestAnimationFrame(moveOut);
}

// Event handler to close the modal when the close button is clicked
document.getElementById('closeWrapper').addEventListener('click', function() {
    hideModalWithMoveOut();
});

  

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