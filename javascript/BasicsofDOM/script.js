let x = document.getElementById("ele1");
let y = document.getElementById("ele2");
let z = document.getElementById("ele3");

x.addEventListener("click",function(){
    x.style.color = "darkyellow"
x.style.backgroundColor = "skyblue"
})
 

y.addEventListener("mouseleave",function(){
    y.style.color = "red"
y.style.backgroundColor = "yellow"
}) 

y.addEventListener("mouseremove",function(){
    y.style.color = "blue"
y.style.backgroundColor = "purple"
}) 
y.addEventListener("click",function(){
    z.style.color = "green"
z.style.backgroundColor = "orange"
})


z.addEventListener("click",function(){
    x.style.color = "purple"
x.style.backgroundColor = "orange"
x.innerHTML="xlaret"
}) 