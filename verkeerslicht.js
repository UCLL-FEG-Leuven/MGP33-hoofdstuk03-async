const setTimeoutAsync = msec =>
 	new Promise(resolve => setTimeout(resolve, msec));

const checkbox = document.querySelector("input[type='checkbox']");
const groen = document.getElementById("groen");
 
checkbox.addEventListener('change', async (e) => {  
  if (checkbox.checked) {    
    setInterval(async () => {
      // 3 seconden groen
      groen.setAttribute('class', 'active');
      await setTimeoutAsync(3000);

      // dan 1,5 seconden oranje
      groen.setAttribute('class', '');
      oranje.setAttribute('class', 'active');  
      await setTimeoutAsync(1500); 

      // en vervolgens 3 seconden rood
      oranje.setAttribute('class', '');
      rood.setAttribute('class', 'active');
      await setTimeoutAsync(3000);

      // en weer groen
      rood.setAttribute('class', '');
      groen.setAttribute('class', 'active');
    }, 8000);
  }
});