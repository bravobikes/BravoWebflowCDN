/*--------0. Declare & Link Variables---------*/
        // Declaración de variables y valores iniciales & linking Webflow elements to manipulate
   
        // Arreglo de de variantes de ese producto, regresa arreglo con los producto matching el tag "estilo" definido en Webflow.
        const LIST_OF_BIKETYPE = ["endurance","all rounder","race"];
        const LIST_OF_SIZEBIKE = ["xsmall","small","med","m-l","large","xlarge"];
        const LIST_OF_GROUPSET = ["105","ultegra"];
        const LIST_OF_RINES = ["alum","carbon"];
        const LIST_OF_MANUBRIenduranceO = ["alum","carbon"];
        const LIST_OF_BASE = ["sandblast","brushed"];
        const LIST_OF_DISENO = ["a","b","c"];

        //const Checkbox = document.getElementById('checkbox');

    // toma elementos que estan atribuidos a esa tag en Webflow  (inner=bubble)

        var Precio = 0;
        var Peso = 0;

        var PrecioM = 0;
        var PesoM = 0;

        var Fecha =0;
        var FechaM = 0;


/*--------1. Decalre Inputs---------*/
    
    /* TIPO DE CAMBIO */
        let conv = 18

    /* Pesos */
        // en gramos

        //framset
            let Peso_FS_XS = 3100-100;
            let Peso_FS_S = 3100-50;
            let Peso_FS_M = 3100;
            let Peso_FS_ML = 3100+25;
            let Peso_FS_L = 3100+75;
            let Peso_FS_XL = 3100+125;

        //grupo
            let Peso_G_105 = 2418;
            let Peso_G_Ult = 2418-300;

        //manubrio
            let Peso_M_Al = 300 ;
            let Peso_M_Carb = 300-10;

        //ruedos
            let Peso_R_Al = 1700;
            let Peso_R_Carb = 1700-300;

    /* PRECIOS */
        // en pesos

        //framset
            let Precio_FS_XS = 50297-1000;
            let Precio_FS_S = 50297-500;
            let Precio_FS_M = 50297;
            let Precio_FS_ML = 50297+250;
            let Precio_FS_L = 50297+750;
            let Precio_FS_XL = 50297+1250;

        //grupo
            let Precio_G_105 = 19833;
            let Precio_G_Ult = 19833+12000;

        //manubrio
            let Precio_M_Al = 863;
            let Precio_M_Carb = 860+5000;

        //ruedos
            let Precio_R_Al = 6013;
            let Precio_R_Carb = 6013*2.5;

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
            let delay = 7

        //grupo
            let Fecha_G_105 = 21
            let Fecha_G_Ult = 35

        //manubrio
            let Fecha_M_Al = 10 
            let Fecha_M_Carb = 42

        //ruedos
            let Fecha_R_Al = 10
            let fecha_R_Carb = 28


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
    Fecha = shipDate;
    FechaM = shipDate;
}

function SetPeso() {
    var bubble = PESO_FRAMESET + PESO_GRUPO + PESO_RUEDOS + PESO_MANUBRIO;
    Peso = (bubble / 1000) + " Kg";
    PesoM = (bubble / 1000) + " Kg";
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
    Precio = PrecioUSD + ' USD';
    PrecioM = PrecioUSD + ' USD'
}