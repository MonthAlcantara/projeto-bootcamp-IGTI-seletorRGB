function mudanca() {
  var red = document.getElementById('rangeR').value;
  var green = document.getElementById('rangeG').value;
  var blue = document.getElementById('rangeB').value;
  var rgb = 'Rgb(' + red + ',' + green + ',' + blue + ')';

  document.getElementById('inputR').value = red;
  document.getElementById('inputG').value = green;
  document.getElementById('inputB').value = blue;
  document.getElementById('resultado').style.background = rgb;
}

document.getElementById('rangeR').addEventListener('input', mudanca);
document.getElementById('rangeG').addEventListener('input', mudanca);
document.getElementById('rangeB').addEventListener('input', mudanca);
