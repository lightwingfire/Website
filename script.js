
let background = 0;

function mouth() {
    // alert("You clicked the 'mouth'");
    const elem = document.getElementById('mouth');
    if(elem.style.visibility == "visible"){
        elem.style.visibility = "hidden";
    }else{
        elem.style.visibility = "visible";
    }
    
  }
function mouth2(){
    
}

function changeBackground(){
    background = background + 1;
    if (background > 10) {
        background = 0;
    }
    if (background == 0){
        document.body.style.background = "white";
    } else if (background == 1){
        document.body.style.background = "black";
    } else if (background == 2){
        document.body.style.background = "red";
    } else if (background == 3){
        document.body.style.background = "orange";
    }else if (background == 4){
        document.body.style.background = "yellow";
    }else if (background == 5){
        document.body.style.background = "green";
    }else if (background == 6){
        document.body.style.background = "blue";
    } else if (background == 7){
        document.body.style.background = "indigo";
    } else if (background == 8){
        document.body.style.background = "violet";
    }
    
}