const outputEl = document.querySelector(".text");
const valEl = document.querySelectorAll(".val");

// It adds every value and display at the output
valEl.forEach(function(val){
    val.addEventListener("click",function(){
        outputEl.value += val.value ;
    })
})

// It clears all the digits in the output
$(".AC").on("click",function(){
    outputEl.value = "";
})

// It deletes the last digit in the output
$(".DEL").on("click",function(){
    outputEl.value = outputEl.value.slice(0,-1);
})

// If there is no error, it evaluates the output value or else it shows syntax error as a alert message.
$(".equals").on("click",function(){
    try{
        outputEl.value = eval(outputEl.value);
    }catch(e){
        alert(e);
    }
})
$(document).on("keypress",function(event){
    
    if(event.key=="Enter")
    {
        try{
            outputEl.value = eval(outputEl.value);
        }catch(e){
            alert(e);
        }
        
    }
})
