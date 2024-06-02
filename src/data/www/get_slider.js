function sendSliderValue(value) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/slider?value=" + value, true);
  xhr.send();
}

window.onload = function() {
  var slider = document.getElementById("brightnessSlider");
  var output = document.getElementById("sliderValue");

  // Cargar el valor guardado del slider si existe
  var savedValue = localStorage.getItem('sliderValue');
  if (savedValue !== null) {
      slider.value = savedValue;
      output.innerHTML = savedValue + "%";
      sendSliderValue(savedValue);
  } else {
      // Mostrar el valor inicial del slider
      output.innerHTML = slider.value + "%";
  }

  // Actualizar el valor mostrado y enviar datos al mover el slider
  slider.oninput = function() {
      output.innerHTML = this.value + "%";
      sendSliderValue(this.value);
      // Guardar el valor en localStorage
      localStorage.setItem('sliderValue', this.value);
  }
}