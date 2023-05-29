const LIST_OF_BIKETYPE = Object.values($('input[name="ESTILO"]')).splice(0,3)
// var cartempty = true
const CartWrapper = document.getElementById('cart_wrapper2')
// const CartBitton = document.getElementById('close-cart-button')
// var runOnce = true

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
})

// Cuadro Type
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
}) 

//Grupo
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
 

//Rines
$('input[name="rines"]').click( function(){
    rinesFinal = this.value;
    console.log("rinesFinal: " + rinesFinal)
    if (rinesFinal == "0"){
        // Aluminio
        $('#option-set-010268edf9c5a7a711de03ee2b2d5247 :eq(0)').trigger('click'); 
    } else if (rinesFinal == "1") {
        // Carbon
        $('#option-set-010268edf9c5a7a711de03ee2b2d5247 :eq(2)').trigger('click'); 
    }   
});


// Manubrio
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

})


// Acabados
//Base
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

//Diseno
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

//Color
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

// Engraving
$('input[name="engraving"]').click(function(){
    engravingFinal = this.value;
    console.log("engravingFinal: " + engravingFinal)

    if (engravingFinal == "0"){
        // Yes
        $('#option-set-5f9971c1ef384760b92f0ca2093c81ce :eq(1)').trigger('click'); 
    } else if (engravingFinal == "1") {
        // No
        $('#option-set-5f9971c1ef384760b92f0ca2093c81ce :eq(0)').trigger('click'); 
    }    

})



// Click on Checkout button
$('#irACheckout').click(function(){
    
    // setTimeout(1500);

    Addtocart()

    
})

function clearCart(){
    $("[data-wf-cart-action=remove-item]").each(function () {
        // click the underlaying html element, not the jquery object
        $(this)[0].click();
    });
}

function Addtocart(){
    if (frame_set_chk == true){
        // Add to cart Cuadro 
        $('.add-to-cart-button-cuadro').trigger('click');

        // add to cart brushed
        if (baseFinal == 0){
            $('.add-to-cart-acabados-b').trigger('click');
        // add to cart sandblasted
        } else if (baseFinal ==1){
            $('.add-to-cart-acabados-s').trigger('click');
        }

        if (document.getElementById('inicialesCheckbox').checked == true){
            $('#AddToCartEngraving').trigger('click')
        }

        cartempty = false

       
    } else {
    
        // Add to cart Cuadro 
        $('.add-to-cart-button-cuadro').trigger('click');

        // Add to cart groupset
        $('.add-to-cart-grupo').trigger('click');

        // Add to cart llantas
        $('.add-to-cart-llantas').trigger('click');

        // Add to cart manubrio
        $('.add-to-cart-button-manubrio').trigger('click');
        
        // add to cart grabados
        $('.add-to-cart-button-7').trigger('click');

        // add to cart brushed
        if (baseFinal == 0){
            $('.add-to-cart-acabados-b').trigger('click');

        // add to cart sandblasted
        } else{
            $('.add-to-cart-acabados-s').trigger('click');
        }
            

        //if (document.getElementById('inicialesCheckbox').checked == true){
            //$('#AddToCartEngraving').trigger('click')
       // }
        // Add Engravings
    }
};
// 

// CartWrapper.addEventListener("click", function() {
//     console.log("Cart Wrapper")

//     // isHidden = $(closecartbutton2).is(':visible')
//     // console.log(isHidden)
//     // if (isHidden == true){
//         // $('.removeproduct').trigger('click');
//         $("[data-wf-cart-action=remove-item]").each(function () {
//             // click the underlaying html element, not the jquery object
//             $(this)[0].click();
//         });
//         // document.location.reload(true)
//     // }   
//   }, { once: true })

// //   Remove items from cart
// $('#close-cart-button2').click(function() {
//     console.log("click close cart ")
//     // $('.removeproduct').trigger('click');
//     $("[data-wf-cart-action=remove-item]").each(function () {
//         // click the underlaying html element, not the jquery object
//         $(this)[0].click();
//     });
//     // document.location.reload(true)
// }, { once: true })


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
