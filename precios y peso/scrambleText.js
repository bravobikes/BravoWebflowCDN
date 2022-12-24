class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }

//Mis constantes
const next = () => {
    phrases[0] = precioFinal
    fx.setText(phrases[counter]).then(() => {
    setTimeout(800)
  })
  counter = (counter + 1) % phrases.length
}

const phrases = ['']
const el = document.querySelector('#innerPrecio')
const fx = new TextScramble(el)

//Mis variables
var btnActualizadores = document.querySelectorAll('.actualizarprecio') 
let counter = 0

var precioBase = 60000
var precioAlumunioAP = 0
var precioCarbonAP = 0
var precio105AP = 10000
var precioultranegraAP = 0

var precioFinal 

//Botones Actualizadores

$('#aluminioAP').click(function(){
    precioFinal = precioAlumunioAP + precioBase
    next();
  });
$('#carbonAP').click(function(){
    precioFinal = precioCarbonAP + precioBase
    next();
  });      
$('#105AP').click(function(){
    precioFinal = precio105AP + precioBase
    next();
  });
$('#ultranegraAP').click(function(){
    precioFinal = precioultranegraAP + precioBase
    next();
  });      