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
}


// Manubrios
// $('input[name="manubrio"]').click(function(){
//     // Manubrio Aluminio
//     if (manubrioFinal == 0) {
//       $('.add-to-cart-button-manubrioa').trigger('click');
//     // Manubrio Carbon
//     } else if (manubrioFinal == 1) {
//       $('.add-to-cart-manubrioc').trigger('click');
//     }
    
//   });
  
  
  //Grupo
//   $('input[name="groupset"]').click( function(){
//       // Grupo 105
//       if (groupsetFinal == 0) {
//         $('.add-to-cart-button-groupset105').trigger('click');
//       // Grupo Ultegra
//       } else if (groupsetFinal == 1) {
//         $('.add-to-cart-button-groupsetu').trigger('click');
//       }
  
//   });   
  
//   //Rines
//   $('input[name="rines"]').click( function(){
//     // Llantas Aluminio
//     if (rinesFinal == 0){
//       $('.add-to-cart-button-llantasa').trigger('click');
//     // Llantas Carbon
//     } else if (rinesFinal == 1){
//       $('.add-to-cart-button-llantasc').trigger('click');
//     }
//   });   
  
//   //Base
//   $('input[name="base"]').click( function(){
//     // baseFinal = brushed
//     if (baseFinal == 0){
//       groupsetFinal
     
//       // baseFinal = sandblasted
//     } else if (baseFinal == 1){
//       groupsetFinal
//     }
//   });
  
//   //Diseno
//   $('input[name="diseno"]').click( function(){
//     var v = this.value;
//     if(v == 2   ){
//         console.log("Invertido")
//         disenoFinal = 0;
//         estiloFinal = 0; 
//     }else if(v == 0){
//         console.log("Clean")
//         disenoFinal = 1;
//         estiloFinal = 1; 
//     }else if(v == 1){
//         console.log("Regular")
//         disenoFinal = 2;
//         estiloFinal = 1; 
//     }
  
//     CambiarImagenColor()
  
//   });
  
  




//   { 
      /* <script>
    var options = options || {};
    options["FORM CLASS NAME"] = {};
    options["FORM CLASS NAME"]["SELECT CLASS NAME"] = "CMS FIELD";
  </script>
  
  $('input[name="irACheckout"]').click(function(){
    manubrioFinal = this.value;
  
    if (frame_set_chk == true){
      // Add only framset with size to cart
  
    } else {
      // Add framset with size to cart
  
      // Add Manubrio to cart
  
      // Add Wheels to cart
  
      // Add Groupset to cart
  
      // Add Des
  
  
  
      if (this.value == aluminio){
        // Add Manubrio Aluminio to Cart
      } else {
        // Add Manubrio Carbon to Cart
      }
  
    }
  
    
  
  });
  
  
  <script>
  
  let clicksEnContinuar = 0;
  
  Webflow.push(function() {
    $('.modal-bg').click(function(e) {
      e.preventDefault();
         $('body').css('overflow', 'auto');
   });
  });
  
  //option-set-473f0c4507fc8a3611c1c56eec28b196 base
  //option-set-e55da3ee4cafe7733d9e69f26fd2889f diseno 
  //option-set-6498b455feb4015a4d504ac123e07fe7 color
  
  //option-set-8c8590cb750905590017c6ea84a82d68 tamano
  //option-set-0b74dfd0408836fafae2da29edc42d19 ruedos
  //option-set-53d2faa7ed87dcfe6f95678373b7be3a grupo
  
  $( document ).ready(function() {
  
          $('#105').click(function(e) {
          $('option-set-8b0874b3c1eb6f928fccda8875ef7e5b :eq(0)').trigger('click');
    });
    
        $('#aluminio').click(function(){
              $('#option-set-010268edf9c5a7a711de03ee2b2d5247 :eq(0)').trigger('click');
          
    });
  
      $('#carbon').click(function(){
              $('#option-set-010268edf9c5a7a711de03ee2b2d5247 :nth-child(1)').trigger('click');
     });
  //Acabado
    $('#sandblast').click(function(){
              $('#option-set-473f0c4507fc8a3611c1c56eec28b196 :nth-child(1)').trigger('click');     
    });
    
    $('#brushed').click(function(){
              $('#option-set-473f0c4507fc8a3611c1c56eec28b196 :eq(0)').trigger('click');       
    });
  
    //Diseno
    $('#rombos').click(function(){
              $('#option-set-e55da3ee4cafe7733d9e69f26fd2889f :eq(0)').trigger('click');       
    });
    
    $('#invertido').click(function(){
              $('#option-set-e55da3ee4cafe7733d9e69f26fd2889f :nth-child(2)').trigger('click');         
    });
    
    $('#none').click(function(){
              $('#option-set-e55da3ee4cafe7733d9e69f26fd2889f :nth-child(3)').trigger('click');             
    }); 
     
  
  //Colores
    $('#NA').click(function(){
          $('#option-set-6498b455feb4015a4d504ac123e07fe7 :eq(0)').trigger('click');
    });
    $('#BL').click(function(){
          $('#option-set-6498b455feb4015a4d504ac123e07fe7 :nth-child(2)').trigger('click');
  
    });
    $('#BR').click(function(){
          $('#option-set-6498b455feb4015a4d504ac123e07fe7 :nth-child(3)').trigger('click');
  
    });
    $('#PU').click(function(){
          $('#option-set-6498b455feb4015a4d504ac123e07fe7 :nth-child(5)').trigger('click');
  
    });
    $('#PL').click(function(){
          $('#option-set-6498b455feb4015a4d504ac123e07fe7 :nth-child(4)').trigger('click');
  
    }); */
// }
  // $('#irACheckout').click(function(){
  //    try{$('.removeproduct').trigger('click')}catch{console.log('No hay productos')}
  // 	setTimeout(() => {
  //  	$('.add-to-cart-button-2').trigger('click');
  //    }, 100);
      
  //  });
         
  // $('#irACheckout').click(function(){
  //   $('.add-to-cart-button-2').trigger('click');
  // })
  
  // });  
    
  // </script>
  
  
  // Groupset:
  // 105
  
  // Ultegra
  // 634c7c19feb1d66de8938d65
