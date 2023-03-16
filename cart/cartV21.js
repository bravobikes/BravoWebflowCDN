const LIST_OF_SIZEBIKE = Object.values($('input[name="sizeBike"]')).splice(0,6)
const LIST_OF_BIKETYPE = Object.values($('input[name="ESTILO"]')).splice(0,3)


// Default value tamaño de cuadro

// var CuadroRuta = XS
$('#option-set-36f477ffcc77809c3424e746653bfbf0 :eq(8)').trigger('click');    
console.log("Click Cuadro Ruta")
// var CuadroType = allrounder
$('#option-set-44ab38aa9ec3274b93476adb8a90137d :eq(2)').trigger('click');     
console.log("Click Cuadro Type")

// 105
$('#option-set-8b0874b3c1eb6f928fccda8875ef7e5b :eq(0)').trigger('click'); 

// Llantas Aluminio
$('#option-set-010268edf9c5a7a711de03ee2b2d5247 :eq(0)').trigger('click'); 

// Manubrio Aluminio
$('#option-set-86ceabcd24d69345c43f8fbea81df71a :eq(0)').trigger('click'); 

baseFinal = 1
v = 2
         

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
    if (groupsetFinal = "0"){
        // 105
        $('#option-set-8b0874b3c1eb6f928fccda8875ef7e5b :eq(0)').trigger('click'); 
    } else if (groupsetFinal = "1") {
        // Ultegra
        $('#option-set-8b0874b3c1eb6f928fccda8875ef7e5b :eq(2)').trigger('click'); 
    }    
});
 

//Rines
$('input[name="rines"]').click( function(){
    rinesFinal = this.value;
    if (rinesFinal = "0"){
        // Aluminio
        $('#option-set-010268edf9c5a7a711de03ee2b2d5247 :eq(0)').trigger('click'); 
    } else if (rinesFinal = "1") {
        // Carbon
        $('#option-set-010268edf9c5a7a711de03ee2b2d5247 :eq(2)').trigger('click'); 
    }   
});


// Manubrio
$('input[name="manubrio"]').click(function(){
    manubrioFinal = this.value;
    if (manubrioFinal = "0"){
        // Aluminio
        $('#option-set-86ceabcd24d69345c43f8fbea81df71a :eq(0)').trigger('click'); 
    } else if (manubrioFinal = "1") {
        // Ultegra
        $('#option-set-86ceabcd24d69345c43f8fbea81df71a :eq(2)').trigger('click'); 
    }    

})
}) 

// Acabados
//Base
$('input[name="base"]').click( function(){
    baseFinal = this.value;
    if (baseFinal = 0){
        // Brushed
        $('#option-set-473f0c4507fc8a3611c1c56eec28b196 :eq(1)').trigger('click'); 
    } else if (baseFinal = 1) {
        // Sanblasted
        $('#option-set-473f0c4507fc8a3611c1c56eec28b196 :eq(2)').trigger('click'); 
    }
    
});

//Diseno
$('input[name="diseno"]').click( function(){
    var v = this.value;
    if(v == 2   ){
        console.log("Invertido")
        // Invertidos
        $('#option-set-e55da3ee4cafe7733d9e69f26fd2889f :eq(2)').trigger('click'); 
    }else if(v == 0){
        console.log("Clean")
        // None
        $('#option-set-e55da3ee4cafe7733d9e69f26fd2889f :eq(4)').trigger('click'); 
    }else if(v == 1){
        console.log("Regular")
        // Rombos
        $('#option-set-e55da3ee4cafe7733d9e69f26fd2889f :eq(1)').trigger('click'); 
    }

    CambiarImagenColor()

});

//Color
$('input[name="color"]').click( function(){
    colorFinal = this.value;
    // console.log(colorFinal)

});



// Click on Checkout button
$('#irACheckout').click(function(){
    if (frame_set_chk == true){

        $('.add-to-cart-button-cuadro').trigger('click');

       
    } else {
    
        // Add to cart Cuadro 
        $('.add-to-cart-button-cuadro').trigger('click');

        // Add to cart groupset
        $('.add-to-cart-acabados').trigger('click');

        // Add to cart llantas
        $('.add-to-cart-acabados').trigger('click');

        // Add to cart manubrio
        $('.add-to-cart-acabados').trigger('click');


       


            // if (groupsetFinal == 0) {
            //     if (rinesFinal == 0){
            //         if (manubrioFinal == 0) {
            //             $('.add-to-cart-g1lama').trigger('click');
            //         } else if (manubrioFinal == 1) {
            //             $('.add-to-cart-g1lamc').trigger('click');
            //         }

            //     } else if (rinesFinal == 1){
            //         if (manubrioFinal == 0) {
            //             $('.add-to-cart-g1lcma').trigger('click');
            //         } else if (manubrioFinal == 1) {
            //             $('.add-to-cart-g1lcmc').trigger('click');
            //         }
            //     }                      
            // } 
            

            
        // Add Finish
        
        // Add Engravings
    }
})

// Remove items from cart
$('#close-cart-button').click(function() {
    $('.removeproduct').trigger('click');
// 	$('.w-commerce-commercecartitem a').each(function() {
//     $(this).click(function() {
//            this.click();
//         }).click()
//   });
})



// // 
// // 
// // 
// // Brushed
// $('#option-set-473f0c4507fc8a3611c1c56eec28b196 :eq(1)').trigger('click'); 


// // Sanblasted
// $('#option-set-473f0c4507fc8a3611c1c56eec28b196 :eq(2)').trigger('click'); 




// // Rombos
// $('#option-set-e55da3ee4cafe7733d9e69f26fd2889f :eq(1)').trigger('click'); 

// // Invertidos
// $('#option-set-e55da3ee4cafe7733d9e69f26fd2889f :eq(2)').trigger('click'); 

// // None
// $('#option-set-e55da3ee4cafe7733d9e69f26fd2889f :eq(4)').trigger('click'); 



// // Neutral
// $('#option-set-6498b455feb4015a4d504ac123e07fe7 :eq(1)').trigger('click'); 

// // azul
// $('#option-set-6498b455feb4015a4d504ac123e07fe7 :eq(2)').trigger('click'); 

// // Cobre
// $('#option-set-6498b455feb4015a4d504ac123e07fe7 :eq(4)').trigger('click'); 

// // Platino
// $('#option-set-6498b455feb4015a4d504ac123e07fe7 :eq(6)').trigger('click'); 

// // Morado
// $('#option-set-6498b455feb4015a4d504ac123e07fe7 :eq(8)').trigger('click'); 


    // Blue
    // BL
    
    // Bronze
    // BR
   
    // Gold
    // GO
     
    // Green
    // GR
   
    // Platinum
    // PL
    
    // Purple
    // PU
    
    // Rose
    // RO
   
    // Teal
    // TE
   
    // Violet
    // VI
    
    // None
    // NA
   