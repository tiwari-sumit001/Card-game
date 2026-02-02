// object is kind of  map/dictionary where we have key values pairs
// key left side ,value right side... key me appko spaces dene padenge and ""
var details=["sumit",21,93.5,false];

let x = 
{
    name: "sumit",
    age: 21,
    score:93,
    married: false,
    "nickname":"piyush"
};
// console.log(x);
// console.log(x['age'],['score'],['name'],['married'],['nickname'])
for (const key in x) {
   console.log(key,x[key]);
}