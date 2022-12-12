//corre solo una vez cuando inicia el programa
function setup(){
    createCanvas(200,200);
    
}
function draw(){
    clear();
    background(125);
    var teclaPulsada= keyCode;
    console.log ("keycode:" + keyCode);
    textSize(50);


    switch (teclaPulsada) {
        case 38:
            text("arriba",100,100);
            break;
        
        case 40:
            text("abajo", 100,100);
            break;

        case 37:
            text("izquierda", 100,100);
            break;
        
        case 39:
            ellipse(100,100,50,50)
            text("derecha",100,100);
            break;

        default:
            break;
    } 
   
   }
  