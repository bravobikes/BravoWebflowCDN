/* ------------------ CAMBIO DE ACABADO ---------------------- */

const subdot1 = document.querySelector('#subdot1');
const subdot2 = document.querySelector('#subdot2');
const subdot3 = document.querySelector('#subdot3');
let diapositivaActual = 1;

subdot1.addEventListener('click', ()=>{
update(1);	
        switch (diapositivaActual) {
          case 1:
      break;
          case 2:
      diapositivaActual = 1;
                $('#flechaIzquierda').trigger('click');
      
      break;
          case 3:
      diapositivaActual = 1;
      $('#flechaIzquierda').trigger('click');
                $('#flechaIzquierda').trigger('click');
      break;          
  }
});

subdot2.addEventListener('click', ()=>{
update(2);	
        switch (diapositivaActual) {
          case 1:
      diapositivaActual = 2;          
          $('#flechaDerecha').trigger('click');
      break;
          case 2:          
      break;
          case 3:
      diapositivaActual = 2;          
      $('#flechaIzquierda').trigger('click');
      break;          
  }
});

subdot3.addEventListener('click', ()=>{
update(3);	
        switch (diapositivaActual) {
          case 1:
      diapositivaActual = 3;          
                $('#flechaIzquierda').trigger('click');
      break;
          case 2:
      diapositivaActual = 3;          
                $('#flechaDerecha').trigger('click');
      break;
          case 3:

      break;          
  }
});

const progress = document.getElementById("progress1");
const stepCircles = document.querySelectorAll(".circle");
let currentActive = 1;


//change 1 to 3
function update(currentActive) {
stepCircles.forEach((circle, i) => {
if (i < currentActive) {
  circle.classList.add("active");
} else {
  circle.classList.remove("active");
}
});
const activeCircles = document.querySelectorAll(".active");
progress.style.width =
((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + "%";  
}



/* ------------------ LAYOUT GEOMETRIA ---------------------- */

var geometrias = ['Endurance', 'Allrounder', 'Race']

var elem = document.querySelector('#geometriaBici');

const enduranceActive = document.querySelector('.enduranceactive')
const endurence = document.querySelector('.endurence')
const allrounderActive = document.querySelector('.allrounderactive')
const allrounder = document.querySelector('.allrounder')
const raceActive = document.querySelector('.raceactive')
const race = document.querySelector('.race')

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.geometria');
  target.innerHTML = geometrias[newValue];
  switch(newValue){
    case '0':
      enduranceActive.style.display = 'block'
      endurence.style.display =  'none'

      allrounderActive.style.display = 'none'
      allrounder.style.display = 'block'

      raceActive.style.display = 'none'
      race.style.display = 'block'

      break;
    case '1':
      enduranceActive.style.display = 'none'
      endurence.style.display = 'block'

      allrounderActive.style.display = 'block'
      allrounder.style.display = 'none'

      raceActive.style.display = 'none'
      race.style = 'block'

      break;
    case '2':
      enduranceActive.style.display = 'none'
      endurence.style.display = 'block'

      allrounderActive.style.display = 'none'
      allrounder.style.display = 'block'

      raceActive.style.display = 'block'
      race.style.display = 'none'

      break;                
  }
}

elem.addEventListener("input", rangeValue);



/* ------------------ LAYOUT SIZE ---------------------- */

// top labels de sizes inputs
//let sizeOutput = document.getElementById("sizeOutput")
//$('input[name="sizeBike"]').click(function(){
//sizeOutput.innerText =  this.value;
//});

// Get hover bubble element
const xs = document.getElementById("rangeXS");
const s = document.getElementById("rangeS"); 
const m = document.getElementById("rangeM"); 
const ml = document.getElementById("rangeML"); 
const l = document.getElementById("rangeL"); 
const xl = document.getElementById("rangeXL");

// Recommended ranges for 
xs.setAttribute("tl", "156-168");
s.setAttribute("tl", "164-174");
m.setAttribute("tl", "170-180");
ml.setAttribute("tl", "176-186");
l.setAttribute("tl", "184-194");
xl.setAttribute("tl", "190-200");

//Popups de sizes inputs
let elemSizeArray = document.querySelectorAll(".radio-button-field-2");

elemSizeArray.forEach(function(elem){
	elem.addEventListener('mouseover',function(){	
		$(this).append('<span id="spantitle" class="">'+'Recommended range: '+ $(this).attr("tl") + ' cm' + '</span>');})
});
elemSizeArray.forEach(function(elem){
	elem.addEventListener('mouseout',function(){	
  	  $("#spantitle").remove();})
});

var sizeButtons = ["XS", "S", "M", "ML", "L", "XL"];

sizeButtons.forEach(function(size) {
    var labelElement = document.getElementById("size" + size);
    var inputElement = document.getElementById(size);

    labelElement.addEventListener("mouseover",function(){
        labelElement.classList.add("hover")
    })

    labelElement.addEventListener("mouseout",function(){
        labelElement.classList.remove("hover")
    })


    setDefaultSize()

    function setDefaultSize() {
        var defaultSize = document.getElementById("sizeM")
        defaultSize.click()
    }
    
    labelElement.addEventListener("click", function() {
        inputElement.click();
    });

    inputElement.addEventListener("click", function() {
        // Add the "active" class to both the clicked input button and the corresponding label
        inputElement.classList.add("active");
        labelElement.classList.add("active");

        // Remove the "active" class from other input buttons and labels
        sizeButtons.forEach(function(otherSize) {
            if (otherSize !== size) {
                var otherLabel = document.getElementById("size" + otherSize);
                var otherInput = document.getElementById(otherSize);
                otherInput.classList.remove("active");
                otherLabel.classList.remove("active");
            }
        });
    });
});

/* ------------------ DYNAMIC FINISH HEADER ---------------------- */

  document.addEventListener('DOMContentLoaded', function () {
    // Color Options
    const colorOptions = document.querySelectorAll('#colorBase input[type="radio"]');
    const dynamicHeading = document.getElementById('colorHeading');
    let selectedColorId = 'NA'; // Default color is "None" or "Neutral"

    // Design Options
    const designOptions = document.querySelectorAll('#diseno input[type="radio"]');
    const designHeading = document.getElementById('designHeading');
    let selectedDesignId = 'clean'; // Set "clean" as the default design

    // Finish Options
    const finishOptions = document.querySelectorAll('#base input[type="radio"]');
    const finishHeading = document.getElementById('finishHeading');
    let selectedFinishId = 'sandblast'; // Set "sandblast" as the default finish

    // Set default titles
    dynamicHeading.textContent = 'Neutral';
    designHeading.textContent = 'Clean';
    finishHeading.textContent = 'Sandblast';

    // Update function for Color Heading
    function updateColorHeading() {
      let selectedColor;
      switch (selectedColorId) {
        case 'NA':
          selectedColor = 'Neutral';
          break;
        case 'BR-2':
          selectedColor = 'Brown';
          break;
        case 'PU-2':
          selectedColor = 'Purple';
          break;
        case 'BL':
          selectedColor = 'Blue';
          break;
        case 'PL-2':
          selectedColor = 'Platinum';
          break;
        case 'GO':
          selectedColor = 'Gold';
          break;
        case 'RO':
          selectedColor = 'Rose';
          break;
        case 'VI':
          selectedColor = 'Violet';
          break;
        case 'TE':
          selectedColor = 'Teal';
          break;
        case 'GR-2':
          selectedColor = 'Green';
          break;
        default:
          selectedColor = 'Unknown';
      }

      dynamicHeading.textContent = selectedColor;
    }

    // Update function for Design Heading
    function updateDesignHeading() {
      let selectedDesign;
      switch (selectedDesignId) {
        case 'inverted':
          selectedDesign = 'Inverted';
          break;
        case 'rhombus':
          selectedDesign = 'Rhombus';
          break;
        case 'clean':
          selectedDesign = 'Clean';
          break;
        default:
          selectedDesign = 'Unknown';
      }

      designHeading.textContent = selectedDesign;
    }

    // Update function for Finish Heading
    function updateFinishHeading() {
      let selectedFinish;
      switch (selectedFinishId) {
        case 'sandblast':
          selectedFinish = 'Sandblast';
          break;
        case 'brushed':
          selectedFinish = 'Brushed';
          break;
        default:
          selectedFinish = 'Unknown';
      }

      finishHeading.textContent = selectedFinish;
    }

    colorOptions.forEach(function (colorOption) {
      colorOption.addEventListener('change', function () {
        selectedColorId = colorOption.getAttribute('id');
        updateColorHeading();
      });
    });

    designOptions.forEach(function (designOption) {
      designOption.addEventListener('change', function () {
        selectedDesignId = designOption.getAttribute('id');
        updateDesignHeading();
      });
    });

    finishOptions.forEach(function (finishOption) {
      finishOption.addEventListener('change', function () {
        selectedFinishId = finishOption.getAttribute('id');
        updateFinishHeading();
      });
    });
  });


/* ------------------ Chekout Button ---------------------- */
    document.getElementById('irACheckout').addEventListener('click', function() {
    var button = this;

    // Delay the addition of the "glow" class by 1 second
    setTimeout(function() {
        button.classList.add('glow');
        button.textContent = "Review..."
    }, 1000);
    });