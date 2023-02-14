//model
let posY = 0;
let posX = 0;
let pX = "px";

//view
updateView();
function updateView(){
let HTML = '';
HTML += /*HTML*/`
    <div>KULHET</div>
        <progress></progress>
        <div class="hero">
            <div class="road"></div>

            <div class="car">
                <img src="img/car.png">
            </div>
        </div>
    `;
    document.getElementById("app").innerHTML = HTML;
}

//controller

function driving(){
    posX++;
    updateView();
}


//   window. ....?

randomShopEvent();
function randomShopEvent(){
    
}

//random events