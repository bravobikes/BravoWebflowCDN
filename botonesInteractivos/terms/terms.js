const grabados = document.getElementById('grabado');

if grabados 

$('input[name="grabado"]').click(function(){
    var isChecked = $(this).is(':checked');
    if (isChecked){
        PRECIO_ENGRAVING = Precio_Yes;
        // Yes
        $('[data-option-id="7efd2aaf6e20547e2de73bda063f4693"]').trigger('click');
        SetPrecio(); 
    } else {
        PRECIO_ENGRAVING = Precio_No;
        // No
        $('[data-option-id="9edf06f130f4570e74fbeb568538be66"]').trigger('click');
        SetPrecio();
    }    
});