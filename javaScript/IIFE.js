// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function chai(){
    console.log(`DB CONNECTION`)
})();

// ( ()=>{
//     console.log(`DB CONNECTION TWO`);
// })()

// unNamed IIFE
( (name)=>{
    console.log(`DB CONNECTION TWO,${name}`);
})("Lalbabu")








