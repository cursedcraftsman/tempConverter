function convert() {
    var Input = document.getElementById("temperature").value;
    var temp = document.querySelector('input[name="Type"]:checked').value;
    var ans;

    if (temp === "Celsius") {
        var fahrenheit = (Input * 9/5) + 32;
        ans = Input + "°C is " + fahrenheit + "°F";
    } else {
        var celsius = (Input - 32) * 5/9;
        ans = Input + "°F is " + celsius + "°C";
    }

    var displayElement = document.getElementById("result");
    displayElement.innerHTML = ans;
}