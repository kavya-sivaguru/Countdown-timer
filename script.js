var display=document.createElement('div');
display.setAttribute('class', 'show')
document.body.append(display);
var down = 11;
let countdown = () => {
    down = down - 1;
    if(down <= 0){
       down = "Happy Independence Day";
   }   
    display.innerText =down;
}
    setTimeout(countdown, 1000);
    setTimeout(countdown, 2000);
    setTimeout(countdown, 3000);
    setTimeout(countdown, 4000);
    setTimeout(countdown, 5000);
    setTimeout(countdown, 6000);
    setTimeout(countdown, 7000);
    setTimeout(countdown, 8000);
    setTimeout(countdown, 9000);
    setTimeout(countdown, 10000);
    setTimeout(countdown, 11000);
    
   

    
   





