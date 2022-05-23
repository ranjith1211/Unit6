
function toggler(i,j,k) {
    let counter = document.getElementById("container")
    var displayCounter = function() {
        if(Number(counter.innerText)===i){
            counter.innerText = j;
        }else if(Number(counter.innerText)===j){
            counter.innerText = k;
        }else{
            counter.innerText=i
        }
    };
    return displayCounter;
    
}

const toggle = toggler(1,2,3)

