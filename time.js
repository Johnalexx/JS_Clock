function updateDate(){
    setInterval(function(){ document.getElementById("display").innerHTML = new Date();; }, 1000);
}
updateDate();