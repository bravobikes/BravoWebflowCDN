// Click on Checkout button
$('input[name="irACheckout"]').click(function(){
    if (frameSetCheckBox == true){
        // Add only Frame
    } else {
        // Add Frame
        
        // Add Groupset
        $('input[name="groupset"]').click( function(){
            // Grupo 105
            if (groupsetFinal == 0) {
              $('.add-to-cart-button-groupset105').trigger('click');
            // Grupo Ultegra
            } else if (groupsetFinal == 1) {
              $('.add-to-cart-button-groupsetu').trigger('click');
            }
        
        });   

        // Add Wheels
        $('input[name="rines"]').click( function(){
            // Llantas Aluminio
            if (rinesFinal == 0){
            $('.add-to-cart-button-llantasa').trigger('click');
            // Llantas Carbon
            } else if (rinesFinal == 1){
            $('.add-to-cart-button-llantasc').trigger('click');
            }
        });  

        // Add Manubrios 
        $('input[name="manubrio"]').click(function(){
            // Manubrio Aluminio
            if (manubrioFinal == 0) {
            $('.add-to-cart-button-manubrioa').trigger('click');
            // Manubrio Carbon
            } else if (manubrioFinal == 1) {
            $('.add-to-cart-manubrioc').trigger('click');
            }
            
        });
        // Add Finish
        
        // Add Engravings
    }
})

