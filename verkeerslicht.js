const checkbox = document.querySelector("input[type='checkbox']");
const groen = document.getElementById("groen");
 
setInterval(() => {
  if (checkbox.checked) {
    groen.setAttribute('class', 'active');
  }
}, 1000);