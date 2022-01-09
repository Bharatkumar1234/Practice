// function sayhell0() {
//     var a=10;
    
//     setTimeout(() => {
//         console.log(a);    
//     }, 2000);
//     saybye();
    
//     console.log("bharat");
// }
// function saybye() {
// var b=30;
// console.log(b);    
// }

// sayhell0();
// var b=confirm("i am bharat")
// let a=new Promise((resolve,reject)=>{
// if (b==true) {
//     resolve("i am bharat malepati")
    
// } else {
//     reject("i am not bharat")
// }
// })
// a.then((c)=>{
//     console.log(c);
// }).catch((c)=>{
//     console.log(c);
// })
// function createData(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             reslove('data created')
//         }, 5000);
//     })
// }

// async function showData() {

//     console.log('process started');
//    await createData().then((res)=>{
//         console.log(res);
//     })
//     setTimeout(()=>{
//         console.log('showdata');
//     },2000);

    
// }

// showData()
function user() {
    var a=document.getElementById('bharat')
    var b=document.getElementById('balu');
    console.log(a.value);
    console.log(b.value);
};
user()
