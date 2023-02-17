//model

let road ="url(img/road.png)"
// let shopDialog;
let info="";
let driveInterval;

let posX = -100;
let posX2 = 100;

let isMoving = true;
let isMoving2 = true;

let store = document.getElementById('showShop');
// const roadAnimation = document.querySelector(".running");
// const shopClick = document.querySelector(".roadStop");
let buttonTest = document.querySelector('.testBtn');

let cashInPocket = 100;   //hvis man hilser på kompis, kanskje man får cash?

let kaffe = 35;
let tea = 45;
let iceCream = 20;

// let select = document.getElementById("greetKompis");
let v1 = document.getElementById("kulhetBar");

// let option1 = document.getElementById("optionKompis1");
// let option2 = document.getElementById("optionKompis2");
// let option3 = document.getElementById("optionKompis3");

// let v1 = document.getElementById("kulhetBar");



//view
updateView();
function updateView(){
let HTML = '';
HTML += /*HTML*/`
    
      
        <div class="hero">
             <div id="road" class="running" style="background:${road}">
                </div>
            <div>KULHET</div>
            <progress id= "kulhetBar"  value="0" max="100">${v1}</progress>
            <div>Cash: ${cashInPocket} kr</div>
            <div id="shopDialog"></div>
            <button class="testBtn" " onclick="roadStopAnim()">Shop</button>
            <img id="airplane" src="img/airplane-take-off.gif">
            
            <div id="shopping"> </div>
            
            
            
            <div class="car">
                <img onclick="showKompis()" src="img/car.png" id="showShop">
                <div id="kompisDiv"> </div>
            </div>
        </div>
    `;
    document.getElementById("app").innerHTML = HTML;
    
}

//controller

function showKompis() {
    document.querySelector('.running').className = 'stopped';
    document.getElementById("kompisDiv").innerHTML += `
    <div class="kompisen">
        <img id="kompisGif" src="img/kompis2.gif">
        <select id="greetKompis" onchange="checkAnswers2(this.value)">
        <option>Hvordan vil du greete kompis?</option>
        <option value="1">Ja</option>
        <option value="2">Morn</option>
        <option value="3">Skjer</option>
    </div>
    `;
}
updateView();

function roadStopAnim(){
    document.querySelector('.running').className = 'stopped';
    document.getElementById("shopping").innerHTML += ` 
    <div class="butik">
        <img id= "shopping" src="img/shop.png" >
        <select id="shoping2" class="select" onchange="checkAnwsers(this.value)">
        <option>Hva ønsker du å kjøpe?</option> 
        <option value= "1"> Caffe </option>
        <option value= "2"> Tea </option>
        <option value= "3"> Ice Cream</option> 
    </div>`;

}

// function updateKulhet(){
//     v1 += 5;
// }

function checkAnwsers(){
    let value= document.getElementById("shoping2").value;
    // let v1= document.getElementById("kulhetBar").value;

    if (value==1 && v1<95){
        alert("Hello!" + " " + kaffe + " kr Takk");
        cashInPocket = cashInPocket - kaffe;
        v1 = v1+=5;
    }
    else if (value==2){
        alert("Hello!" + " " + tea + " kr Takk");
        cashInPocket= cashInPocket - tea;
        v1 = v1 + 7;
    } else if (cashInPocket < tea) {
        alert("Insufficient funds")
        v1 = v1 - 5;
    }        
    else if (value==3){
        alert("Hello!" + " " + iceCream + " kr Takk");
        cashInPocket = cashInPocket - iceCream;
        
    } else if (cashInPocket < iceCream) {
        alert("Insufficient funds!")
    }
    updateView();

    }

    function checkAnswers2(){
        let value2= document.getElementById('greetKompis').value;
        let v2 = document.getElementById('kulhetBar').value;

        // option1.addEventListener("click", function(){
        //      const value = parseInt(option1.value);
        //      if (value===1){
        //          alert("Denne funker faktisk")
        //          v1.value += 5;
        //      } else if (value === 2){
        //          alert("Ja halla ja")
        //          v1.value += 7;
        //      } else if(value === 3) {
        //          alert(Testings)
        //         v1.value += 5;
        //      }
        //      updateView();
        //  });
    

        if (value2==1 && v2<95){
            alert("Ok.");
            document.getElementById("kulhetBar").value= v2+=5;
    
          }
        else if (value2==2){
            alert("Ja halla ja");
            v2 = v2 + 7;
          }         
        else if (value2==3){
            alert("Pigg av!"); 
          } 
          updateView();
        }
     



// buttonTest.addEventListener('click', () => {
//     isMoving = !isMoving;
//     if (isMoving == false) {
//         document.getElementById("shopping").innerHTML = `
//        `;
//     }
//     else if (isMoving == true) {
//         document.getElementById("shopping").innerHTML = ``;
//     }
    
// })

// store.addEventListener('click', () => {
//     isMoving = !isMoving;
//     if (isMoving == false){
//         document.getElementById('shopping').innerHTML = `
//         <div>
//             <img src="img/shop.png" onclick="shop()" >
//             <select id="shoping2" class="select"  onchange="checkAnwsers(this.value)"> 
//             <option value= "1"> Caffe </option>
//             <option value= "2"> Tea </option>
//             <option value= "3"> Ice Cream</option> 
//         </div>`;
//     }
// }); 

// setInterval(() => {
//     if (isMoving) {
//         xPosition++;
//         store.style.left = xPosition + 'px';

//     if (xPosition > window.innerWidth) {
//         xPosition = -100;
//     }
//     }
// }, 10);


// setInterval(() => {
//     if (isMoving2) {
//         xPosition2++;
//         store.style.left = xPosition2 + 'px';

//     if (xPosition2 > window.innerWidth) {
//         xPosition2 = -100;
//     }
//     }
// }, 10);

// roadAnim.addEventListener("click", () => {
//     roadAnimation.classList.toggle("running");
// });


// let element = document.getElementById('road');
//   let current_margin = 3;
//   setInterval(function(){
//     if(window.innerWidth<=current_margin+100){
//       current_margin = 3;
//     }
//     new_margin = parseInt(current_margin)+1;
//     current_margin = new_margin;
//     element.style.marginLeft = new_margin;
//   },3);

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

// function checkAnwsers(){
//     if (value ==1 ){
//         info= "Caffe er 25kr"
        
//     }

// }


//document.getElementById('something').style.display = none;

//   window. ....?

// randomShopEvent();
// function randomShopEvent(){
//     document.getElementsByClassName('road').style.animation = '';
    
// }

//random events