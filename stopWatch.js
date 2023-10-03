
var but_start=document.getElementById("start")
var but_stop=document.getElementById("stop")
var but_restart=document.getElementById("restart")


var hrs=sec=min=ms=0 ,strat_timer 


but_start.addEventListener("click",function(){


    strat_timer=setInterval(() => {
       ms++
       if (ms==100) {
        sec++
        ms=0
       }

       if (sec==60) {
        min++
        sec=0
       }

       if (min==60) {
        hrs++
        min=0
        
       }
       Display()

    }, 10);



    but_stop.addEventListener("click",function(){

        clearInterval(strat_timer)
          
        })

        but_restart.addEventListener("click",function(){

            clearInterval(strat_timer)
            hrs=sec=min=ms=0
            Display()

        })
})


function Display() {

document.getElementById("hrs").textContent=hrs
document.getElementById("min").textContent=min
document.getElementById("sec").textContent=sec
document.getElementById("ms").textContent=ms
    
}

