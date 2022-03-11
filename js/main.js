const counter = document.querySelector('.number')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const reset = document.querySelector('.reset')
const plusClick1 = document.querySelector('.plusclick1')
const plusClick10 = document.querySelector('.plusclick10')
const plusClick100 = document.querySelector('.plusclick100')
const plusClick1000 = document.querySelector('.plusclick1000')
const plusClick10000 = document.querySelector('.plusclick10000')
const plusClickRandom = document.querySelector('.plusclickrandom')

let num = 0;
let click = 1;

minus.disabled = true
reset.disabled = true
plusClick1.disabled = true
plusClick10.disabled = true
plusClick100.disabled = true
plusClick1000.disabled = true
plusClick10000.disabled = true
plusClickRandom.disabled = true

function render(){
    counter.innerHTML = num

    if(num > 0){
        minus.disabled = false
        reset.disabled = false
        plusClick1.disabled = false
        plusClick10.disabled = false
        plusClick100.disabled = false
        plusClick1000.disabled = false
        plusClick10000.disabled = false
        plusClickRandom.disabled = false
    }else if(num <= 0){
        minus.disabled = true
        reset.disabled = true
        plusClick1.disabled = true
        plusClick10.disabled = true
        plusClick100.disabled = true
        plusClick1000.disabled = true
        plusClick10000.disabled = true
        plusClickRandom.disabled = true
    }
}


plus.addEventListener('click', function(){

    num = num + click

    console.log("Plus", num)
    render()
    
})


minus.addEventListener('click', function(){

    if(num > 0){
      num = num - click
        console.log("Minus", num)
        render()
    }

})
reset.addEventListener('click', function(){


      num = 0
      console.log("Reset", num)
      render()


})
plusClick1.addEventListener('click', function(){

  if(num >= 100){
      num = num - 100
      click +=1
      console.log("Plus 1 click", num)
      alert("Plus 1 click")
      render()
  }

})
plusClick10.addEventListener('click', function(){

  if(num >= 1000){
      num = num - 1000
      click +=10
      console.log("Plus 10 click", num)
      alert("Plus 10 click")
      render()
  }

})
plusClick100.addEventListener('click', function(){

  if(num >= 10000){
      num = num - 10000
      click +=100
      console.log("Plus 100 click", num)
      alert("Plus 100 click")
      render()
  }

})
plusClick1000.addEventListener('click', function(){

  if(num >= 100000){
      num = num - 100000
      click +=1000
      console.log("Plus 1.000 click", num)
      alert("Plus 1.000 click")
      render()
  }

})
plusClick10000.addEventListener('click', function(){

  if(num >= 1000000){
      num = num - 1000000
      click +=10000
      console.log("Plus 10.000 click", num)
      alert("Plus 10.000 click")
      render()
  }

})
plusClickRandom.addEventListener('click', function(){

  if(num >= 100){
    let clickRandom = Number(prompt("Введите сколько хотите кликов"))
    if(num -  100 * clickRandom  < 0){
  alert("Недостаточно кликов")
  }else{
    num = num - clickRandom * 100
    click += clickRandom
    console.log("Plus " + clickRandom + " click", num)
    alert("Plus " + clickRandom + " click")
    render()
        } 
  }
})