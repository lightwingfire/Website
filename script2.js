var colors = ['#1A1423', '#3D314A', '#684756', '#EEE5E9', '#AB8476'];
var boxes = document.querySelectorAll(".box");

for (i = 0; i < boxes.length; i++) {
    // Pick a random color from the array 'colors'.
    boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    boxes[i].style.display = 'inline-box';
}



function expan(idOfArticle,idOfText){
    const doc = document.getElementById(idOfArticle);
    const txt = document.getElementById(idOfText);
    // if(window.innerWidth< 1000){
        console.log(100);
        console.log(doc.style.flexGrow);
        if (doc.style.flexGrow == 2){
            doc.style.flexGrow = 0;
            txt.style.display ="none";
        }else{
            doc.style.flexGrow = 2;
            
            txt.style.display = "inline-block";
        }
    // }else{
    //     if (doc.style.width == "50%"){
    //         doc.style.width = "23%";
    //         txt.style.display ="none";
    //     }else{
    //         doc.style.width = "50%";
    //         txt.style.display = "inline-block";
    //     }
    // }
    
}

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 10;

function typeWriter(r) {


    // document.getElementById("tr").style.width = "50%";
    // if (i == 0){
    //     txt = document.getElementById(r).innerHTML;
    //     txtlnght = txt.length
    // document.getElementById(r).innerHTML = "";
    // }
    
    // document.getElementById(r).style.visibility = "visible";
    // if (i < txtlnght) {
    //     document.getElementById(r).innerHTML += txt.charAt(i);
    //     i++;
    //     setTimeout(typeWriter, speed,r);
    //     console.log(r);
    // }
    // else if (i >= txtlnght) {
    //     i = 0;
    //     console.log("redo");
    //     return;
    // }

}