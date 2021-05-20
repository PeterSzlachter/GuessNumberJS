// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix')
let error = document.querySelector('small')
let form = document.querySelector('form')
let result = document.querySelector('#instructions')
let btn = document.querySelector('.btn')
let max = 1000
let min = 0

let play = true
let count = 0
let choosenNumber

// Etape 2 - Cacher l'erreur
error.style.display = "none"

// Etape 3 - Générer un nombre aléatoire

let randomNumber = Math.floor(Math.random()*1001)
// Etape 6 - Créer la fonction vérifier
function replay() {
  count = 0
  input.placeholder = "Devinez le prix ! (entre 0 et 1 000)"
  input.style.borderColor = "silver"
  let test = document.querySelectorAll('.fini, .moins, .plus')
  console.log(test)
  test.forEach(e => e.remove())
  btn.textContent = "Deviner"
  input.disabled = false
  randomNumber = Math.floor(Math.random()*1001)
  btn.className = "btn btn-primary"
  this.removeEventListener('click', replay, false)
}

function check(number) {
  let div = document.createElement('div')
  if (number < randomNumber)
    {
      div.textContent = `Coup n°${count} ! Vous avec choisi     ${choosenNumber}. C'est plus ${randomNumber}`
      div.className = "instruction plus"
    }
  else if(number > randomNumber)
    {
      div.textContent = `Coup n°${count} ! Vous avec choisi ${choosenNumber}. C'est moins ${randomNumber}`
      div.className = "instruction moins"
    }
  else
    {
     div.textContent = `Coup n°${count} ! Vous avec choisi ${choosenNumber}. Bravo vous avez trouvé ! ${randomNumber}`
      div.className = "instruction fini"
      input.disabled = true
      input.style.borderColor = "green"
      input.placeholder = " Bravo ! Cliquez sur Rejouer !"
      btn.textContent = "Rejouer"
      btn.className = "btn btn-primary replay"
      play = false
      let btnReplay = document.querySelector('.replay')
      console.log(btnReplay)
      btnReplay.addEventListener('click',replay)
      }
  result.prepend(div)
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
  if(isNaN(input.value))
    {
      error.style.display = "block"
      error.textContent = "Vous devez rentrer un nombre !"
    }
  else
    {
      error.style.display = "none"
      input.style.borderColor = "silver"
    }
})
// Etape 5 - Agir à l'envoi du formulaire
 form.addEventListener('submit', (e) => {
   e.preventDefault()
   if (isNaN(input.value) || input.value == "")
     {
       input.style.borderColor = "red"
     }
    else if(input.value > max || input.value < min)
     {
       
      error.textContent = "Vous devez rentrer un nombre entre 0 et 1000 !"
      error.style.display = "block"
     }
   else 
     {
       count++
       input.style.borderColor = "silver"
       choosenNumber = input.value
       input.value = ''
       check(choosenNumber)
     }
 })

 
