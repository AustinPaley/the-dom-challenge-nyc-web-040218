const counter = document.getElementById("counter")
let count = parseInt(counter.innerHTML)
let goUp = document.getElementById('+')
let goDown = document.getElementById('-')
let like = document.getElementById("<3")
const uList = document.getElementsByClassName('likes')
const pause = document.querySelector('#pause')
const submit = document.getElementById('submit')
let allLikes = {}
const list = document.getElementById('list')



document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM fully loaded and parsed");
  })

let countIncrease = setInterval(function(){counter.innerText = ++count},1000)

goDown.addEventListener('click', function(){
  counter.innerText = --count
})

goUp.addEventListener('click', function(){
  counter.innerText = ++count
})
pause.addEventListener('click', function(){
  if (pause.innerText === "Pause"){
    pause.innerText = "Resume"
    goUp.disabled = true
    goDown.disabled = true
    like.disabled = true
    submit.disabled = true
    countIncrease = clearInterval(countIncrease)
  } else {
    pause.innerText = "Pause"
    goUp.disabled = false
    goDown.disabled = false
    like.disabled = false
    submit.disabled = false
    countIncrease = setInterval(function(){counter.innerText = ++count},1000)

  }

})

like.addEventListener('click',function () {
  let likeCount = 0
  if(!allLikes[count]){
    allLikes[count] = 0
    ++allLikes[count]
    let li = document.createElement('li')
    // li.setAttribute("id", count)
    li.id = count
    li.innerText = `Number: ${count} || Likes: ${allLikes[count]}`
    uList[0].appendChild(li)
  } else {
    ++allLikes[count]
    let countLi = document.getElementById(count)
    countLi.innerText = `Number: ${count} || Likes: ${allLikes[count]}`
  }
})
submit.addEventListener('click',function(e){
  e.preventDefault()
  const input = document.getElementById('input').value
  let div = document.createElement('div')
  list.appendChild(div)
  div.innerText = `${input}`
})
