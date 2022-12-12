var x= 50;
var y= 50 ;
var total=100;

function setup(){
    console.log("setup");
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(900,600);
    background(255,0,0);

    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);

}

//corre continuamente después de la función setup
function draw(){
     
    while(total>0) {

    if (total% 10 ==0) {

    y=y+ 50; 
    x=50;
} else {
    x=x+50;
}
  ellipse(x,y,25,25);
  total=total-1;

    
   }
}
      //instrucciones a ejecutar en bucle







