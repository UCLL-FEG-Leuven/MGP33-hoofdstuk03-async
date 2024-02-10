const setTimeoutAsync = msec =>
 	new Promise(resolve => setTimeout(resolve, msec));

const checkbox = document.querySelector("input[type='checkbox']");
const groen = document.getElementById("groen");
 
checkbox.addEventListener('change', (e) => {  
  if (checkbox.checked) {    
    setInterval(() => {
      // 3 seconden groen
      groen.setAttribute('class', 'active');
      setTimeoutAsync(3000)
        .then(() => {
          // dan 1,5 seconden oranje
          groen.setAttribute('class', '');
          oranje.setAttribute('class', 'active');  
          return setTimeoutAsync(1500); 
        })
        .then(() => {
          // en vervolgens 3 seconden rood
          oranje.setAttribute('class', '');
          rood.setAttribute('class', 'active');
          return setTimeoutAsync(3000);
        })
        .then(() => {
          // en weer groen
          rood.setAttribute('class', '');
          groen.setAttribute('class', 'active');
        });
    }, 8000);
  }
});