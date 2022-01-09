function callme() {
    console.log("i am bharat");    
}
function mycall(callree) {
    setTimeout(() => {
        console.log("i am not bharat");
callree();

    }, 2000);
    
}
mycall(callme);