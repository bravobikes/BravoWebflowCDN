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

        // Add only Frame
    } else {
        console.log("checkbox false")
        // Add Frame
        
        // Add Groupset
            // Grupo 105
            console.log(groupsetFinal)
            if (groupsetFinal == 0) {
              $('.add-to-cart-button-groupset105').trigger('click');
            // Grupo Ultegra
            } else if (groupsetFinal == 1) {
              $('.add-to-cart-button-groupsetu').trigger('click');
            }
        

        // Add Wheels
            // Llantas Aluminio
            console.log(rinesFinal)
            if (rinesFinal == 0){
            $('.add-to-cart-button-llantasa').trigger('click');
            // Llantas Carbon
            } else if (rinesFinal == 1){
            $('.add-to-cart-button-llantasc').trigger('click');
            }

        // Add Manubrios 
            // Manubrio Aluminio
            console.log(manubrioFinal)
            if (manubrioFinal == 0) {
            $('.add-to-cart-button-manubrioa').trigger('click');
            // Manubrio Carbon
            } else if (manubrioFinal == 1) {
            $('.add-to-cart-manubrioc').trigger('click');
            }
            
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