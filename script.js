function removeButton(element){
    element.remove();
};


function signOut(element){
    element.innerText = "Sign out!"
}

function selectCard(){
    var element = document.querySelector("#card");
    console.log(element);

    element.innerHTML = element.innerHTML + "<div class='box'>1</box>";
}



function rand255(){
    return Math.floor(Math.random() * 256);
}

function randColor(){
    // "background-color: rgb(255, 255, 255)"
    // string interpolation
    return `background-color: rgb(${rand255()}, ${rand255()}, ${rand255()})`;
}

var header = document.querySelector("#header");
var main = document.querySelector("#main");


function randomizeBackground(){
    header.setAttribute("style", randColor());
    main.setAttribute("style", randColor());
}

var timeout = setInterval(function(){
    randomizeBackground();
}, 1000);

function stopColors(){
    clearInterval(timeout);
}