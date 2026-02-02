let arr = [4,-55,-32,1]
console.log(arr);
arr=arr.sort((a,b)=> b-a);// decreasing keley

console.log(arr);
//custom sort bhi kar sakte hai means decreasing me bhi 
arr = arr.sort();
//java ka built in sort function bekaar hai -3,-4 me aage -3 then -4 lik dega
arr = arr.sort((a,b)=> a-b)// isley aaise likhna padega acche se sorting keley
console.log(arr); // actual sort