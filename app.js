const background = document.getElementById("fond")
const button = document.getElementById("button")
const reset = document.getElementById("reset")

let tab = ["black","yellow","purple","blue","red","green"]
let i = 0
button.addEventListener("click",function(){
    
    if(i < tab.length){
        background.style.backgroundColor = tab[i]
        console.log(i)
        i++
        if(i === tab.length ){
            i = 0
        }
    }
})
reset.addEventListener("click",function(){background.style.backgroundColor = "white"})