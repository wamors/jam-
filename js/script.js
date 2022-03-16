document.body.style.backgroundColor= "blue"
let time=document.getElementById('time')
let menit=document.getElementById('menit')
let random=document.getElementById('random')
let garis=document.getElementById('garis')
// random.innerHTML= Math.floor(Math.random() * 10)


let d = 6
let detik = 0
let j = 0
let x = 15
let inter = setInterval(waktu, 1000)
function waktu(){
    detik++
    let hs = detik * d
    x++
    time.innerHTML= x
    garis.style.transform= `rotate(${hs}deg)`
    if(x % 60 == 0) {
        j++
    }
    if(x == 60){
        // clearInterval(inter)
        x = 0
        time.innerHTML= x
    }
    menit.innerHTML = j
}






