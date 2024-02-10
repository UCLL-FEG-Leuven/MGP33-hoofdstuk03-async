const setTimeoutAsync = msec =>
 	new Promise(resolve => setTimeout(resolve, msec));

const checkbox = document.querySelector("input[type='checkbox']");
const groen = document.getElementById("groen");
 
checkbox.addEventListener('change', async (e) => {
  while (checkbox.checked) {
    try {
      // 3 seconden groen       
      groen.setAttribute('class', 'active');
      await setTimeoutAsync(3000);
      if (!checkbox.checked) break;

      // dan 1,5 seconden oranje
      groen.setAttribute('class', '');
      oranje.setAttribute('class', 'active');  
      await setTimeoutAsync(1500); 
      if (!checkbox.checked) break;

      // en vervolgens 3 seconden rood
      oranje.setAttribute('class', '');
      rood.setAttribute('class', 'active');
      await setTimeoutAsync(3000);
      if (!checkbox.checked) break;

      // en rood weer uitschakelen
      rood.setAttribute('class', '');
    } catch (e) {
      console.error(e);
    }
  }

  // reset
  groen.setAttribute('class', '');
  oranje.setAttribute('class', '');
  rood.setAttribute('class', '');
});