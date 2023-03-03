LIST_OF_SIZEBIKE.forEach( (e) => {
    e.addEventListener('change', (event) => {
        CuadroRuta = e.id
});
})


$('input[name="manubrio"]').click(function(){
    manubrioFinal = this.value;

});
//Grupo
$('input[name="groupset"]').click( function(){
    groupsetFinal = this.value;

});   

//Rines
$('input[name="rines"]').click( function(){
    rinesFinal = this.value;
});       

// Click on Checkout button
$('#irACheckout').click(function(){
    if (frame_set_chk == true){
        console.log("checkbox true")
        console.log(CuadroRuta)

        if (CuadroRuta == "XS"){
            // xs
            $('.add-to-cart-button-xs').trigger('click');
        } else if (CuadroRuta == "S"){
            // s
            $('.add-to-cart-button-s').trigger('click');
        } else if (CuadroRuta == "M") {
            // m
            $('.add-to-cart-button-m').trigger('click');
        } else if (CuadroRuta == "ML") {
            // ml
            $('.add-to-cart-button-ml').trigger('click');
        } else if (CuadroRuta == "L") {
            // l
            $('.add-to-cart-button-l').trigger('click');
        } else if (CuadroRuta == "XL"){
            // xl
            $('.add-to-cart-button-xl').trigger('click');
        }
       
    } else {
        console.log("checkbox false")
        console.log(CuadroRuta)

        if (CuadroRuta == "XS"){
            // xs
            $('.add-to-cart-button-xs').trigger('click');
        } else if (CuadroRuta == "S"){
            // s
            $('.add-to-cart-button-s').trigger('click');
        } else if (CuadroRuta == "M") {
            // m
            $('.add-to-cart-button-m').trigger('click');
        } else if (CuadroRuta == "ML") {
            // ml
            $('.add-to-cart-button-ml').trigger('click');
        } else if (CuadroRuta == "L") {
            // l
            $('.add-to-cart-button-l').trigger('click');
        } else if (CuadroRuta == "XL"){
            // xl
            $('.add-to-cart-button-xl').trigger('click');
        }

            
       
                if (groupsetFinal == 0) {
                    if (rinesFinal == 0){
                        if (manubrioFinal == 0) {
                            $('.add-to-cart-g1lama').trigger('click');
                        } else if (manubrioFinal == 1) {
                            $('.add-to-cart-g1lamc').trigger('click');
                        }

                    } else if (rinesFinal == 1){
                        if (manubrioFinal == 0) {
                            $('.add-to-cart-g1lcma').trigger('click');
                        } else if (manubrioFinal == 1) {
                            $('.add-to-cart-g1lcmc').trigger('click');
                        }
                    }  
                        
                } 
                // else if (groupsetFinal == 1) {
                //     if (rinesFinal == 0){
                       
                //     } else if (rinesFinal == 1){

                //     }      

                // }

            
        // Add Finish
        
        // Add Engravings
    }
})

// Remove items from cart
$('#close-cart-button').click(function() {
	$('.w-commerce-commercecartitem a').each(function() {
    $(this).click(function() {
           this.click();
        }).click()
  });
})