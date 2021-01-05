function togglemenu(){
    var togglevalue = document.getElementsByClassName("left-panel")[0];
    console.log(togglevalue)
    console.log(togglevalue.style.display)
    if(togglevalue.style.display == 'none'){
        togglevalue.style.display = ''
    }
    else{
        togglevalue.style.display = 'none'
    }
}


function typeWriter(id){
    var i = 0;
    var element = document.getElementById(id);
    var txt = element.innerHTML;
    console.log(txt);
    element.innerHTML = '';
    element.style.display = 'block'
    var speed = 70;
    type();
    function type(){
        if(i < txt.length){
        element.innerHTML += txt.charAt(i);
        console.log(element.innerHTML)
        i++
        setTimeout(type, speed);  
        }
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }