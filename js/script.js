function convertToHours(){

    var minutes = document.getElementById("userInput").value;

    var hours2dec = minutes / 60;

    document.getElementById("result").innerHTML = hours2dec.toFixed(2) + " Hours";

}







