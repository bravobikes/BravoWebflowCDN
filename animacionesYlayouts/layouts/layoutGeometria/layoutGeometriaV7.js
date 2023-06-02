
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