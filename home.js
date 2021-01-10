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

function showContent(classname){
    var elements = document.getElementsByClassName(classname);

    console.log(elements[0])
    for(let j=0; j<=elements.length; j++){
        typeWriter(elements[j].id)
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

function typeWriter1(classname){
    var elements = document.getElementsByClassName(classname);
    console.log(elements[0])
    var length = elements.length;
    var element;
    for(let j=0; j<=length; j++){
        element = elements[j];
        var txt = element.innerHTML;
        console.log(txt);
        element.innerHTML = '';
        element.style.display = 'block'
        var speed = 70;
        let i = 0;
        type(j, i, speed, txt, element);    
    }
}
    
function type(j, i, speed, txt, element){
        console.log(txt.length)
        console.log(j)
        if(i < txt.length){
        console.log(i);
        element.innerHTML += txt.charAt(i);
        console.log(element.innerHTML)
        i++
        setTimeout(() => type, speed);  
        }
    }   

    


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  