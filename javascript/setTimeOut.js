// print 1 to 10  but delay of  1 sec without after each number get printed
// setTimeout(function(){
//     console.log("himani");
// },2*1000);
// setTimeout(function(){
//     console.log("sumit");
// },4*1000);
// setTimeout(function(){
//     console.log("sakschi");
// },6*1000);

for(let i = 1;i<=10;i++){
    setTimeout(function(){
    console.log(11-i);
},i*500)


}