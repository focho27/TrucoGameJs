




class Truco{
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    
}
class Carta{
     numero;
     valor;
     nombre;
    constructor(numero, valor, nombre){
        this.numero = numero;
        this.valor = valor;
        this.nombre = nombre;
    };

    get getNumero(){
        return this.numero;
    }
    get getValor(){
        return this.valor;
    }
    get getNombre(){
        return this.nombre;
    }
    
}

class Copa extends Carta{
    constructor(numero,valor,nombre){
        super(numero,valor,nombre);
    }
    
    toString(){
        const lista  = `Carta ${this.getNumero} || ${this.getNombre}`;
        return lista;
    } 

}

class Oro extends Carta{
    constructor(numero,valor,nombre){
        super(numero,valor,nombre);
    }
    
    toString(){
        const lista  = `Carta ${this.getNumero} || ${this.getNombre}`;
        return lista;
    } 
}

class Espada extends Carta{
    constructor(numero,valor,nombre){
        super(numero,valor,nombre);
    }
    
    toString(){
        const lista  = `Carta ${this.getNumero} || ${this.getNombre}`;
        return lista;
    } 
}

class Basto extends Carta{
    constructor(numero,valor,nombre){
        super(numero,valor,nombre);
    }
    toString(){
        const lista  = `Carta ${this.getNumero} || ${this.getNombre}`;
        return lista;
    } 
   
}

const cartasEspada = {
   
    1: carta = new Espada(1,14,"Espada"),
    2: carta = new Espada(2,9,"Espada"),
    3: carta = new Espada(3,10,"Espada"),
    4: carta = new Espada(4,1,"Espada"),
    5: carta = new Espada(5,2,"Espada"),
    6: carta = new Espada(6,3,"Espada"),
    7: carta = new Espada(7,12,"Espada"),
    10: carta = new Espada(10,5,"Espada"),
    11: carta = new Espada(11,6,"Espada"),
    12: carta = new Espada(12,7,"Espada")
};
const cartasBasto = {
    1: carta = new Basto(1,13,"Basto"),
    2: carta = new Basto(2,9,"Basto"),
    3: carta = new Basto(3,10,"Basto"),
    4: carta = new Basto(4,1,"Basto"),
    5: carta = new Basto(5,2,"Basto"),
    6: carta = new Basto(6,3,"Basto"),
    7: carta = new Basto(7,4,"Basto"),
    10: carta = new Basto(10,5,"Basto"),
    11: carta = new Basto(11,6,"Basto"),
    12: carta = new Basto(12,7,"Basto") 
};
const cartasOro = {
    1: carta = new Oro(1,8,"Oro"),
    2: carta = new Oro(2,9,"Oro"),
    3: carta = new Oro(3,10,"Oro"),
    4: carta = new Oro(4,1,"Oro"),
    5: carta = new Oro(5,2,"Oro"),
    6: carta = new Oro(6,3,"Oro"),
    7: carta = new Oro(7,11,"Oro"),
    10: carta = new Oro(10,5,"Oro"),
    11: carta = new Oro(11,6,"Oro"),
    12: carta = new Oro(12,7,"Oro")
};
const cartasCopa = {
    1: carta = new Copa(1,8,"Copa"),
    2: carta = new Copa(2,9,"Copa"),
    3: carta = new Copa(3,10,"Copa"),
    4: carta = new Copa(4,1,"Copa"),
    5: carta = new Copa(5,2,"Copa"),
    6: carta = new Copa(6,3,"Copa"),
    7: carta = new Copa(7,4,"Copa"),
    10: carta = new Copa(10,5,"Copa"),
    11: carta = new Copa(11,6,"Copa"),
    12: carta = new Copa(12,7,"Copa")
};

const mazo = {
    0 : cartasEspada,
    1 : cartasBasto,
    2 : cartasOro,
    3 : cartasCopa
};



function seleccionarCartaAleatoriaDeMazo() {
    let numAleatorio = Math.random()*12;
    let numCarta = 0;
    let paloElegido =false;
    let paloCarta = -1;
    while(numCarta<1 || numCarta>12){
        numAleatorio = Math.floor(numAleatorio+1);
        numCarta = numAleatorio;
    }
    while(paloElegido == false){
        numAleatorio = Math.random()*4;
        numAleatorio = Math.floor(numAleatorio);
        if(numAleatorio>=0 && numAleatorio<4){
            paloCarta = numAleatorio;
            paloElegido = true;
        }

        if((buscarCarta(paloCarta,numCarta)!=null )&& ((analizarSiNoSeRepartioCarta(buscarCarta(paloCarta,numCarta)))== true)){
                return buscarCarta(paloCarta,numCarta);
        }
    }
    return  seleccionarCartaAleatoriaDeMazo();
};

function buscarCarta(palo,numero){
    
    if(mazo[palo][numero]){
        return mazo[palo][numero];
    }
};

const mano = {
    0: null,
    1: null,
    2: null
};
const mano2 = {
    0: null,
    1: null,
    2: null
};

function analizarSiNoSeRepartioCarta(carta){
    for (let index = 0; index < 3; index++) {
        const element = mano[index];
        const element2 = mano2[index];
        if(element == carta){
            return false;
        }
        if(element2 == carta){
            return false;
        }
        
    }
    return true;
};

function generarMano(){
    let contador=0;
    let auxiliar = null;
    
    while(contador<3){
      switch(contador){
          case 0: 
              
             
                 auxiliar = seleccionarCartaAleatoriaDeMazo();
                
                
                 mano[0] = auxiliar;
                
                 auxiliar = seleccionarCartaAleatoriaDeMazo();
                
                 mano2[0] = auxiliar;
                 contador++;
                break;
          case 1: 
         
                auxiliar = seleccionarCartaAleatoriaDeMazo();
              
            
                mano[1] = auxiliar;
        
                auxiliar = seleccionarCartaAleatoriaDeMazo();
   
                mano2[1] = auxiliar;
                contador++;
                break;
          case 2:
          
               auxiliar = seleccionarCartaAleatoriaDeMazo();
                
               
                mano[2] = auxiliar;
             
                auxiliar = seleccionarCartaAleatoriaDeMazo();
               
                mano2[2] = auxiliar;
                contador++;
                break;
      }
     
    }
}


const imagenesCartasBasto = {
    1 : "img/cartas/basto/1basto.png",
    2: "img/cartas/basto/2basto.png",
    3: "img/cartas/basto/3basto.png",
    4: "img/cartas/basto/4basto.png",
    5: "img/cartas/basto/5basto.png",
    6: "img/cartas/basto/6basto.png",
    7: "img/cartas/basto/7basto.png",
    10: "img/cartas/basto/10basto.png",
    11: "img/cartas/basto/11basto.png",
    12: "img/cartas/basto/12basto.png"
}
const imagenesCartasEspada = {
    1 : "img/cartas/espada/1espada.png",
    2: "img/cartas/espada/2espada.png",
    3: "img/cartas/espada/3espada.png",
    4: "img/cartas/espada/4espada.png",
    5: "img/cartas/espada/5espada.png",
    6: "img/cartas/espada/6espada.png",
    7: "img/cartas/espada/7espada.png",
    10: "img/cartas/espada/10espada.png",
    11: "img/cartas/espada/11espada.png",
    12: "img/cartas/espada/12espada.png"
}
const imagenesCartasOro = {
    1 : "img/cartas/oro/1oro.png",
    2: "img/cartas/oro/2oro.png",
    3: "img/cartas/oro/3oro.png",
    4: "img/cartas/oro/4oro.png",
    5: "img/cartas/oro/5oro.png",
    6: "img/cartas/oro/6oro.png",
    7: "img/cartas/oro/7oro.png",
    10: "img/cartas/oro/10oro.png",
    11: "img/cartas/oro/11oro.png",
    12: "img/cartas/oro/12oro.png"
}
const imagenesCartasCopa = {
    1 : "img/cartas/copa/1copa.png",
    2: "img/cartas/copa/2copa.png",
    3: "img/cartas/copa/3copa.png",
    4: "img/cartas/copa/4copa.png",
    5: "img/cartas/copa/5copa.png",
    6: "img/cartas/copa/6copa.png",
    7: "img/cartas/copa/7copa.png",
    10: "img/cartas/copa/10copa.png",
    11: "img/cartas/copa/11copa.png",
    12: "img/cartas/copa/12copa.png"
}



function cambiarCartas(){
   let nombre1 = "primera";
   let nombre2 = "cuarta";
   let contador = 0;

   while(contador<3){
      
    if(mano[contador] instanceof Basto){
        document.getElementById(nombre1).src= imagenesCartasBasto[mano[contador].numero];    
    }
    if(mano[contador] instanceof Espada){
        document.getElementById(nombre1).src= imagenesCartasEspada[mano[contador].numero];        
    }
    if(mano[contador] instanceof Copa){
        document.getElementById(nombre1).src= imagenesCartasCopa[mano[contador].numero];    
    }
    if(mano[contador] instanceof Oro){
        document.getElementById(nombre1).src= imagenesCartasOro[mano[contador].numero];     
    }
    if(mano2[contador] instanceof Basto){
        document.getElementById(nombre2).src= imagenesCartasBasto[mano2[contador].numero];    
     }
    if(mano2[contador] instanceof Espada){
        document.getElementById(nombre2).src= imagenesCartasEspada[mano2[contador].numero];        
        }
    if(mano2[contador] instanceof Copa){
        document.getElementById(nombre2).src= imagenesCartasCopa[mano2[contador].numero];    
        }
    if(mano2[contador] instanceof Oro){
        document.getElementById(nombre2).src= imagenesCartasOro[mano2[contador].numero];     
        }
        
    if(contador == 0){
        nombre1 = "segunda";
        nombre2= "quinta";
    }
    if(contador ==1 ){
        nombre1 = "tercera";
        nombre2 = "sexta";
    }
    contador++;
}
/*
    document.getElementById("segunda").src=imagenesCartasBasto[mano[1].numero];
    document.getElementById("tercera").src=imagenesCartasBasto[mano[2].numero];
    document.getElementById("quinta").src=imagenesCartasBasto[mano2[1].numero];
    document.getElementById("sexta").src=imagenesCartasBasto[mano2[2].numero];*/

}

let primerCarta = false;
let segundaCarta = false;
let tercerCarta = false;
let contadorCarta =0;
function colocarCarta(b) {

    contadorCarta++;

  switch(b.id){
      case "primera2":
        document.getElementById("primera2").style.position = "relative" ;
        document.getElementById("primera2").style.top = "10em";
        document.getElementById("primera2").style.left="6.2em";
        if(contadorCarta===1||contadorCarta===2){
            primerCarta=true;
        }
        else if(contadorCarta===3||contadorCarta===4){
                segundaCarta = true;
        }
        else if(contadorCarta===5||contadorCarta===6){
            tercerCarta=true;
        }
        if(primerCarta){
            document.getElementById("primera2").style.zIndex="0";
        }else if(segundaCarta){
            document.getElementById("primera2").style.zIndex="1";
        }else if(tercerCarta){
            document.getElementById("primera2").style.zIndex="2";
        }
          break;

      case "segunda2":
        document.getElementById("segunda2").style.position = "relative" ;
        document.getElementById("segunda2").style.top = "10em";
        if(contadorCarta===1||contadorCarta===2){
            primerCarta=true;
        }
        else if(contadorCarta===3||contadorCarta===4){
                segundaCarta = true;
        }
        else if(contadorCarta===5||contadorCarta===6){
            tercerCarta=true;
        }
        if(primerCarta){
            document.getElementById("segunda2").style.zIndex="0";
        }else if(segundaCarta){
            document.getElementById("segunda2").style.zIndex="1";
        }else if(tercerCarta){
            document.getElementById("segunda2").style.zIndex="2";
        }
          break;

      case "tercera2":
        document.getElementById("tercera2").style.position = "relative" ;
        document.getElementById("tercera2").style.top = "10em";
        document.getElementById("tercera2").style.right="6.2em";
        if(contadorCarta===1||contadorCarta===2){
            primerCarta=true;
        }
        else if(contadorCarta===3||contadorCarta===4){
                segundaCarta = true;
        }
        else if(contadorCarta===5||contadorCarta===6){
            tercerCarta=true;
        }
        if(primerCarta){
            document.getElementById("tercera2").style.zIndex=0;
        }else if(segundaCarta){
            document.getElementById("tercera2").style.zIndex=1;
        }else if(tercerCarta){
            document.getElementById("tercera2").style.zIndex=2;
        }
          break;

      case "cuarta2":
        document.getElementById("cuarta2").style.position = "relative" ;
        document.getElementById("cuarta2").style.bottom = "10em";
        document.getElementById("cuarta2").style.left="6.2em";
        if(contadorCarta===1||contadorCarta===2){
            primerCarta=true;
        }
        else if(contadorCarta===3||contadorCarta===4){
                segundaCarta = true;
        }
        else if(contadorCarta===5||contadorCarta===6){
            tercerCarta=true;
        }
        if(primerCarta){
            document.getElementById("cuarta2").style.zIndex=0;
        }else if(segundaCarta){
            document.getElementById("cuarta2").style.zIndex=1;
        }else if(tercerCarta){
            document.getElementById("cuarta2").style.zIndex=2;
        }
          break;

      case "quinta2":
        document.getElementById("quinta2").style.position = "relative";
        document.getElementById("quinta2").style.bottom = "10em";
        if(contadorCarta===1||contadorCarta===2){
            primerCarta=true;
        }
        else if(contadorCarta===3||contadorCarta===4){
                segundaCarta = true;
        }
        else if(contadorCarta===5||contadorCarta===6){
            tercerCarta=true;
        }
        if(primerCarta){
            document.getElementById("quinta2").style.zIndex=0;
        }else if(segundaCarta){
            document.getElementById("quinta2").style.zIndex=1;
        }else if(tercerCarta){
            document.getElementById("quinta2").style.zIndex=2;
        }
          break;

      case "sexta2":
        document.getElementById("sexta2").style.position = "relative";
        document.getElementById("sexta2").style.bottom = "10em";
        document.getElementById("sexta2").style.right="6.2em";
        if(contadorCarta===1||contadorCarta===2){
            primerCarta=true;
        }
        else if(contadorCarta===3||contadorCarta===4){
                segundaCarta = true;
        }
        else if(contadorCarta===5||contadorCarta===6){
            tercerCarta=true;
        }
        if(primerCarta){
            document.getElementById("sexta2").style.zIndex=0;
        }else if(segundaCarta){
            document.getElementById("sexta2").style.zIndex=1;
        }else if(tercerCarta){
            document.getElementById("sexta2").style.zIndex=2;
        }
          break;
  }
  primerCarta = false;
  segundaCarta= false;
  tercerCarta=false;
  if(contadorCarta===6){
      repartir();
  }
}





console.log(mazo);
/*var contador = 0;
var numeroFinal = 1300;
while(contador<numeroFinal){
console.log(seleccionarCartaAleatoriaDeMazo());
contador++;
}*/


console.log(mano);
console.log(mano2);

function backThePosition(){
   
        document.getElementById("primera2").style.position ="relative";
        document.getElementById("primera2").style.top = "0em";
        document.getElementById("primera2").style.left="0em";

        document.getElementById("segunda2").style.position = "relative" ;
        document.getElementById("segunda2").style.top = "0em";

        document.getElementById("tercera2").style.position = "relative" ;
        document.getElementById("tercera2").style.top = "0em";
        document.getElementById("tercera2").style.right="0em";

        document.getElementById("cuarta2").style.position = "relative";
        document.getElementById("cuarta2").style.bottom = "0em";
        document.getElementById("cuarta2").style.left="0em";

        document.getElementById("quinta2").style.position = "relative";
        document.getElementById("quinta2").style.bottom = "0em";

        document.getElementById("sexta2").style.position = "relative";
        document.getElementById("sexta2").style.bottom = "0em";
        document.getElementById("sexta2").style.right="0em";
        
}
function repartir() {
    backThePosition();
    generarMano();
    cambiarCartas();
    contadorCarta=0;
    /*document.getElementById("botonRepartir").style.display = "none";
    return false;*/
    return true;
}

repartir();

