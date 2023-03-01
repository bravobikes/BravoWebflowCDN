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
$('input[name="irACheckout"]').click(function(){
    if (frameSetCheckBox == true){
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

