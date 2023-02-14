//model
let posY = 0;
let posX = 0;
let pX = "px";
let road ="url(img/road.png)"
let shopDialog;
let info="";
let driveInterval;
let roadAnim = document.getElementById('road');


//view
updateView();
function updateView(){
let HTML = '';
HTML += /*HTML*/`
    
      
        <div class="hero">
            <div id="road" style="background:${road}${posX}${posY}${pX}">
                <img src="img/road.png" style="position:absolute;"></div>
            <div>KULHET</div>
            <progress value="25"></progress>
            <div id="shopDialog"> </div>
            <div id="infoDiv"> ${info} </div>
            <img src="img/shop.png" onclick="shop()" id="shopping">
            <div class="car">
                <img src="img/car.png">
            </div>
        </div>
    `;
    document.getElementById("app").innerHTML = HTML;
}

//controller

let element = document.getElementById('road');
  let current_margin = 3;
  setInterval(function(){
    if(window.innerWidth<=current_margin+100){
      current_margin = 3;
    }
    new_margin = parseInt(current_margin)+1;
    current_margin = new_margin;
    element.style.marginLeft = new_margin;
  },3);

// function startDriving() {
//     setInterval(function(){
//         posX += 5;
//         roadAnim.style.marginLeft = posX + "px";
//     }, 1000)

//     updateView();
//     shop();
    // driveInterval = setInterval(driving, 1);
//}

//setInterval(function(){
   // posX += 5;
   // let asd = document.getElementById(noe);
   // asd.style.left = posX + "px";
//}, 1000)
//})

// function driving(){
//     posX++;
//     updateView();
// }

// shop();
function shop(){
    
    // document.getElementById('road').style.animationPlayState = 'paused';
    document.getElementById('shopDialog').innerHTML = /*HTML*/`
    <select class="select"  onchange="checkAnwsers(this.value)"> 
    <option value= "1"> Caffe </option>
    <option value= "2"> Tea </option>
    <option value= "3"> Ice Cream</option>
    


    

    


    // Shop something something <br> 
    // Shop items (coffee, ice, something?) <br>
    // something else
    `;

    
}

function checkAnwsers(){
    if (value ==1 ){
        info= "Caffe er 25kr"
        
    }

}


//document.getElementById('something').style.display = none;

//   window. ....?

// randomShopEvent();
// function randomShopEvent(){
//     document.getElementsByClassName('road').style.animation = '';
    
// }

//random events