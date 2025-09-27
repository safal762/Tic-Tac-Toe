var buttons=document.querySelectorAll(".clickme");
var reset_button=document.querySelector(".Reset");


var wining_condition=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

 var truns=true;
buttons.forEach(function(val){
        val.addEventListener("click",function(){
            if(truns){
            val.innerHTML="o";
            truns=false;
             val.disabled=true;
            }
            else{
                val.innerHTML="x";
                truns=true;
                 val.disabled=true;
            }    
              winner();  
          });
     
});

function winner(){
    for(let wining_conditions of wining_condition){
    let pos1val= buttons[wining_conditions[0]].innerText;
    let pos1val2= buttons[wining_conditions[1]].innerText;
    let pos1val3= buttons[wining_conditions[2]].innerText;

    if(pos1val!="" && pos1val2!="" && pos1val3!=""){
        if(pos1val===pos1val2 && pos1val===pos1val3){
            document.querySelector(".winner h1").textContent=`winner is ${pos1val}`;
            
        }
    }
}
    }
   

    function resets(){
        reset_button.addEventListener('click',function(){
            buttons.forEach(function(val){
                val.innerHTML="";
                val.disabled=false;
            })
        })
    }

    resets();