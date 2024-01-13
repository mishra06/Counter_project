var count = 0;
var span = document.getElementById("value");
document.getElementById("btn_plus").addEventListener("click", () =>{
    count+= 1; // count update
    span.innerText = count; 
})

document.getElementById("btn_mins").addEventListener("click", (e) =>{
    if(count -1>=0){
        count-= 1;
        span.innerText = count; 
    }
    else{
        e.target.disabled = true;
    }
    
})

document.getElementById("reset").addEventListener("click", () =>{
    count= 0;
    span.innerText = count;
})