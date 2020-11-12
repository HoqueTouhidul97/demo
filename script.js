function pinGenerator(id1,id2){
    const pinGeneratorButton = document.getElementById(id2)
    pinGeneratorButton.addEventListener('click',function(){
        let max = 18;
        let min = 2;
        let result = Math.random() * (max - min) + min;
        let pin = Math.round(result);
        document.getElementById(id1).value = pin
        if(pin >10){
        document.getElementById(id1).style.backgroundColor = 'red' ; 
      }
    })
}
pinGenerator('pin-display','pin-generator-button')

  