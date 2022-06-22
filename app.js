
let hr = document.getElementById("arrow3")

let hr333 = document.getElementById("clocks3")
let hr222 = document.getElementById("clocks2")
let hr111 = document.getElementById("clocks1")

let min = document.getElementById("arrow2")
let sec = document.getElementById("arrow1")





setInterval(   () => {

    let day = new Date()

    let hh = day.getHours() * 30
    let mm = day.getMinutes() * 6
    let ss = day.getSeconds() * 6


    hr.style.transform = `rotate(${hh+(mm/12)}deg)`
    hr333.style.transform = `rotate(${hh+(mm/12)}deg)`



    sec.style.transform = `rotate(${ss}deg)`
    hr111.style.transform = 'rotate(' + ss + 'deg)'




    min.style.transform = `rotate(${mm}deg)`
    hr222.style.transform = `rotate(${mm}deg)`

    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let secouns = document.getElementById("secouns")
    let ampm = document.getElementById("ampm")

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    if (h   < 10) { h   = "0"+h}
    if (m < 10) {m = "0"+m}
    if (s < 10) {s = "0"+s}





    hours.innerHTML = h
    minutes.innerHTML = m
    secouns.innerHTML = s




})






