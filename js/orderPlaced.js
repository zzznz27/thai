function onLoad() {
    document.getElementById("orderContainer").style.display = "block";

    document.getElementById("orderContainer").style.animationName = "bounceInDown";
    document.getElementById("orderContainer").style.animationDuration = "2s";
    document.getElementById("body").style.overflow = "hidden";
    // document.getElementById("orderContainer").style.animationDelay = "2s";
    // document.getElementById("orderContainer").style.animationName = "spin, depth";
    // document.getElementById("orderContainer").style.animationDuration = "3s";
    // document.getElementById("orderContainer").style.animationTimingFunction = "linear";
    // document.getElementById("orderContainer").style.animationIterationCount = "infinite";



}

function addBorder() {
    document.getElementById("close").style.border = 'solid';
    document.getElementById("close").style.borderColor = 'lightgray';
    document.getElementById("close").style.borderWidth = '1px';

}


function remBorder() {

    document.getElementById("close").style.borderColor = 'white';
}