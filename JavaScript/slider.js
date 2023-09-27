
//1
const slider = document.getElementById('prisSlider');
const value1Display = document.getElementById('value1');
const value2Display = document.getElementById('value2');
let prevValue1 = 0;
let prevValue2 = 0;

//2
slider.addEventListener('input', function() {

  //3
  const value1 = parseInt(slider.value);
  const value2 = parseInt(slider.value) * 700;

  const values = [value1, value2];
  updateOutputValues(values);

  prevValue1 = value1;
  prevValue2 = value2;
});

//4
function updateOutputValues(values) {
  for (let i = 0; i < values.length; i++) {
    if (i === 0) {
      value1Display.textContent = values[i];
    } else if (i === 1) {
      value2Display.textContent = (values[i] >= 0) ? values[i] : 0;
    }
  }
}

