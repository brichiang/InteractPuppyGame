var selection = document.getElementById("selectContainer"),
    container = document.getElementById("container"),
    chiSelect = document.getElementById("chiSelect"),
    pugSelect = document.getElementById("pugSelect"),
    start = document.getElementById("start"),
    chi = document.getElementById("chi"),
    pug = document.getElementById("pug"),
    house = document.getElementById("house"),
    chickenBut = document.getElementById("box1"),
    meatBut = document.getElementById("box2"),
    carrotBut = document.getElementById("box3"),
    appleBut = document.getElementById("box4"),
    textbox = document.getElementById("textbox"),
    text = document.getElementById("text");
var chiBark = new Audio();
var pugBark = new Audio();
var lightswitch = new Audio();
var drop = new Audio();
var rooster = new Audio();
var crickets = new Audio();
chiBark.src = "Sound/chiBark.mp3";
pugBark.src = "Sound/pugBark.mp3";
lightswitch.src = "Sound/switch.mp3";
drop.src = "Sound/drop.mp3";
rooster.src = "Sound/Rooster.mp3";
crickets.src = "Sound/crickets.mp3";

//selection for the dog
chiSelect.addEventListener("click", function(){
    chiSelect.src = "SVG/chiSelected.svg";
    pugSelect.src = "SVG/pugSelect.svg";
    start.style.display = "block";
    chi.style.display = "block";
    pug.style.display = "none";
});

pugSelect.addEventListener("click", function(){
    pugSelect.src = "SVG/pugSelected.svg";
    chiSelect.src = "SVG/chiSelect.svg";
    start.style.display = "block";
    pug.style.display = "block";
    chi.style.display = "none";
});

start.addEventListener("click", function(){
    selection.style.display = "none";
});

function houseImg(house) {
    if(house.src.match("SVG/dayhouse.svg")) house.src = "SVG/nighthouse.svg";
    else house.src = "SVG/dayhouse.svg";
}

function chichange(chi) {
    chi.src = "SVG/chi2.svg";
}
function chiback(chi) {
    chi.src = "SVG/chi1.svg";
}

function pugchange(pug) {
    pug.src = "SVG/pug2.svg";
}
function pugback(pug) {
    pug.src = "SVG/pug1.svg";
}

function chickenClick(){
    document.getElementById("chickenDis").addEventListener("click", function(){
        document.getElementById("dis").innerHTML = "";
        textbox.style.display = "block";
        text.innerHTML = "Yummy~!";
    });
}

function meatClick(){
    document.getElementById("meatDis").addEventListener("click", function(){
        document.getElementById("dis").innerHTML = "";
        textbox.style.display = "block";
        text.innerHTML = "Love It!";
    });
}

function carrotClick(){
    document.getElementById("carrotDis").addEventListener("click", function(){
        document.getElementById("dis").innerHTML = "";
        textbox.style.display = "block";
        text.innerHTML = "Ewww...";
    });
}

function appleClick(){
    document.getElementById("appleDis").addEventListener("click", function(){
        document.getElementById("dis").innerHTML = "";
        textbox.style.display = "block";
        text.innerHTML = "I'll Accept Apple.";
    });
}

chickenBut.addEventListener("click", function(){
   var chicken = document.createElement("img");
    var display = document.createElement("div");
    container.appendChild(display);
    display.appendChild(chicken);
    chicken.id = "chickenDis";
    display.id = "dis";
    chicken.src = "SVG/chicken.svg";
    chicken.style.position = "absolute";
    chicken.style.height = "70px";
    chicken.style.right = "100px";
    chicken.style.bottom = "150px";
    chicken.style.cursor = "pointer";
    chickenClick();
});

meatBut.addEventListener("click", function(){
   var meat = document.createElement("img"); 
    container.appendChild(meat);
    meat.id = "meatDis";
    meat.src = "SVG/meat.svg";
    meat.style.position = "absolute";
    meat.style.height = "55px";
    meat.style.right = "100px";
    meat.style.bottom = "160px";
    meat.style.cursor = "pointer";
    meatClick();
});

carrotBut.addEventListener("click", function(){
   var carrot = document.createElement("img");
    container.appendChild(carrot);
    carrot.id = "carrotDis";
    carrot.src = "SVG/carrot.svg";
    carrot.style.position = "absolute";
    carrot.style.height = "30px";
    carrot.style.right = "90px";
    carrot.style.bottom = "160px";
    carrot.style.cursor = "pointer";
    carrotClick();
});

appleBut.addEventListener("click", function(){
   var apple = document.createElement("img"); 
    container.appendChild(apple);
    apple.id = "appleDis";
    apple.src = "SVG/apple.svg";
    apple.style.position = "absolute";
    apple.style.height = "55px";
    apple.style.right = "120px";
    apple.style.bottom = "160px";
    apple.style.cursor = "pointer";
    appleClick();
});

document.getElementById("cross").addEventListener("click", function(){
    textbox.style.display = "none";
});

document.getElementById("sun").addEventListener("click", function(){
    document.getElementById("sun").style.top = "-200px";
    document.getElementById("moon").style.top = "0px";
    container.style.backgroundImage = "url(SVG/night.svg)";
    textbox.style.display = "block";
    text.innerHTML = "Goodnight!";
});

document.getElementById("moon").addEventListener("click", function(){
    document.getElementById("moon").style.top = "-200px";
    document.getElementById("sun").style.top = "0px";
    container.style.backgroundImage = "url(SVG/day.svg)";
    textbox.style.display = "block";
    text.innerHTML = "Goodmorning!";
});