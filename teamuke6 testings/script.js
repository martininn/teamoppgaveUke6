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
