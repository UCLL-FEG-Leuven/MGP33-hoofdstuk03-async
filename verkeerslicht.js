const checkbox = document.querySelector("input[type='checkbox']");
const groen = document.getElementById("groen");
 
checkbox.addEventListener('change', (e) => {
  if (checkbox.checked) {
    groen.setAttribute('class', 'active');
  } else {
    groen.setAttribute('class', '');
  }
});