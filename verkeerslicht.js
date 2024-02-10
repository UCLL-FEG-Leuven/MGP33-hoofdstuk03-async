const checkbox = document.querySelector("input[type='checkbox']");
const groen = document.getElementById("groen");
 
checkbox.addEventListener('change', (e) => {  
  if (checkbox.checked) {    
    setInterval(() => {       
      groen.setAttribute('class', 'active');
      setTimeout(() => {
        groen.setAttribute('class', '');
        oranje.setAttribute('class', 'active');
        setTimeout(() => {
          oranje.setAttribute('class', '');
          rood.setAttribute('class', 'active');
          setTimeout(() => {
            rood.setAttribute('class', '');
            groen.setAttribute('class', 'active');
          }, 3000);
        }, 1500);
      }, 3000);
    }, 8000);
  }
});