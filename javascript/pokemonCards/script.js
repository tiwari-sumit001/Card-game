
let main = document.getElementById("main");
let arr = ['https://i.pinimg.com/736x/9e/7f/8c/9e7f8cd40ab894b4c348d7fa9ea4d360.jpg',   
'https://i.pinimg.com/736x/a1/da/c6/a1dac6ff3201c499f2b2a68a2ee4a092.jpg', 
'https://i.pinimg.com/1200x/8d/bf/12/8dbf1216799a2fac752a6d2a0a604785.jpg', 
'https://i.pinimg.com/1200x/77/ff/2d/77ff2d1f63872cbcd51e32ea40691e6a.jpg', 
'https://i.pinimg.com/736x/3d/aa/08/3daa081a3171d832d0a149cc6578604e.jpg',
'https://i.pinimg.com/1200x/71/d5/24/71d524591771d3313f97b3259b074ed2.jpg',
'https://i.pinimg.com/1200x/5f/e4/c4/5fe4c442fa7bf5e9b1799f47c2b07e45.jpg',
'https://i.pinimg.com/1200x/63/2a/ad/632aad37da6ef794ded5a52ea30802dc.jpg'];
let s = "";
for(let i = 1;i<=65;i++){
    let r =Math.floor(Math.random()*arr.length);
    s+= `<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;





