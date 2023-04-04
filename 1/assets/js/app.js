function findMinMax() {
    array=Array.isArray=[25,30,80,16,40];
    minValue = Infinity;
  document.querySelector('.array').textContent = array;
    for (item of array) {
        if (item < minValue)
            minValue = item;
    }
  
    document.querySelector('.min').textContent = minValue;
}