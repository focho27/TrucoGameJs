let contadorDeManos = 0;
let mesaFinal =[];
let contadorMesaJ1 = 0;
let contadorMesaJ2 = 0;
let jugadores=[];
let ganadorPuntoAnterior = 0;
let j1; 
let j2;
let primerMano = false;
let turno = 0;
let isMano = 2;
let contadorDeJugadores = 0;
let primerCarta = false;
let segundaCarta = false;
let tercerCarta = false;
let seRepartio=false;
let contadorCarta = 0;
let ganadorDePunto=0;
let analisisCartas = {
};
let mesa;
let cantidadDeCantosEnvido=0;
let cantidadDeCantosDeTruco=0;
let puntajeEnvido=0;
let puntajeTruco=0;

class Jugador{
    nombre;
    puntaje;
    turno;
    codigo;
    puntos;
    ultimoCanto;
    constructor(nombre,codigo) {
        this.nombre = nombre;
        this.codigo=codigo;
        this.puntaje=0;
        this.turno = false;
        this.puntos = 0;
        this.ultimoCanto="";
    }
    get getNombre(){
        return this.nombre;
    }
    get getCodigo(){
        return this.codigo;
    }
    get getPuntaje(){
        return this.puntaje;
    }
    get getTurno(){
        return this.turno;
    }
    get ultimoCanto(){
        return this.ultimoCanto;
    }
    agregarCanto(s){
        this.ultimoCanto = s;
    }
    setPuntos(p){
        this.puntos = p;
    }
    reinicioPuntos(){
        this.puntos = 0;
    }
     setPuntaje(t){
        this.puntaje =this.puntaje+t;
    }
    get getPuntos(){
        return this.puntos;
    }
     aumentarPunto(){
        this.puntos++;
    }
    
}
class Truco{
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    get getNombre(){
        return this.nombre;
    }
}

class Carta{
    static contadorCarta;
     numero;
     valor;
     nombre;
    constructor(numero, valor, nombre){
        this.numero = numero;
        this.valor = valor;
        this.nombre = nombre;
        this.contadorCarta = 0;
    }
    setAumentarContadorCarta(){
        this.contadorCarta++;
    }
    get getContadorCarta(){
       return this.contadorCarta;
    }
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
        const lista  = `Carta ${this.getNumero} || ${this.getNombre} \n`;
        return lista;
    } 

}

class Oro extends Carta{
    constructor(numero,valor,nombre){
        super(numero,valor,nombre);
    }
    
    toString(){
        const lista  = `Carta ${this.getNumero} || ${this.getNombre} \n`;
        return lista;
    } 
}

class Espada extends Carta{
    constructor(numero,valor,nombre){
        super(numero,valor,nombre);
    }
    
    toString(){
        const lista  = `Carta ${this.getNumero} || ${this.getNombre} \n`;
        return lista;
    } 
}

class Basto extends Carta{
    constructor(numero,valor,nombre){
        super(numero,valor,nombre);
    }
    toString(){
        const lista  = `Carta ${this.getNumero} || ${this.getNombre} \n`;
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
/*   Colocar cartas ya se crean y se cambian    */


function colocarCarta(b) {
console.log("se ejecutoooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
if(seRepartio===true){
    contadorCarta=0;
    seRepartio = false;
}
      if(b.id === "primera2"){
       
        document.getElementById("primera2").style.position = "relative" ;
        document.getElementById("primera2").style.top = "14em";
        document.getElementById("primera2").style.left="6.2em";
        
        if(contadorCarta===0||contadorCarta===1){
            primerCarta=true;
        }
        else if(contadorCarta===2||contadorCarta===3){
                segundaCarta = true;
        }
        else if(contadorCarta===4||contadorCarta===5){
            tercerCarta=true;
        }
        if(primerCarta){
            document.getElementById("primera2").style.zIndex="0";
        }else if(segundaCarta){
            document.getElementById("primera2").style.zIndex="1";
        }else if(tercerCarta){
            document.getElementById("primera2").style.zIndex="2";
        }
        analisisCartas[contadorCarta]=true;
        
         anadirMesaJ1(mano[0]);
         primerCarta = false;
         segundaCarta= false;
         tercerCarta=false;
         console.log(`"el contador de Carta es " ${contadorCarta}`);
         analizamosAfuera(contadorCarta);
      
      
    }
     
          
     
        if(b.id === "segunda2"){
       
        document.getElementById("segunda2").style.position = "relative" ;
        document.getElementById("segunda2").style.top = "14em";
        if(contadorCarta===0||contadorCarta===1){
            primerCarta=true;
        }
        else if(contadorCarta===2||contadorCarta===3){
                segundaCarta = true;
        }
        else if(contadorCarta===4||contadorCarta===5){
            tercerCarta=true;
        }
        if(primerCarta){
            document.getElementById("segunda2").style.zIndex="0";
        }else if(segundaCarta){
            document.getElementById("segunda2").style.zIndex="1";
        }else if(tercerCarta){
            document.getElementById("segunda2").style.zIndex="2";
        }
      
        analisisCartas[contadorCarta]=true;
        
       
         anadirMesaJ1(mano[1]);
         primerCarta = false;
         segundaCarta= false;
         tercerCarta=false;
         console.log(`"el contador de Carta es " ${contadorCarta}`);
         analizamosAfuera(contadorCarta);
         
    }
     
    if(b.id === "tercera2"){
        document.getElementById("tercera2").style.position = "relative" ;
        document.getElementById("tercera2").style.top = "14em";
        document.getElementById("tercera2").style.right="6.2em";
        if(contadorCarta===0||contadorCarta===1){
            primerCarta=true;
        }
        else if(contadorCarta===2||contadorCarta===3){
                segundaCarta = true;
        }
        else if(contadorCarta===4||contadorCarta===5){
            tercerCarta=true;
        }
        if(primerCarta){
            document.getElementById("tercera2").style.zIndex=0;
        }else if(segundaCarta){
            document.getElementById("tercera2").style.zIndex=1;
        }else if(tercerCarta){
            document.getElementById("tercera2").style.zIndex=2;
        }
          
        analisisCartas[contadorCarta]=true;
     
        
      
         anadirMesaJ1(mano[2]);
         primerCarta = false;
         segundaCarta= false;
         tercerCarta=false;
         console.log(`"el contador de Carta es " ${contadorCarta}`);
         analizamosAfuera(contadorCarta);
         
    }

     if(b.id === "cuarta2"){
        document.getElementById("cuarta2").style.position = "relative" ;
        document.getElementById("cuarta2").style.bottom = "14em";
        document.getElementById("cuarta2").style.left="6.2em";
        if(contadorCarta===0||contadorCarta===1){
            primerCarta=true;
        }
        else if(contadorCarta===2||contadorCarta===3){
                segundaCarta = true;
        }
        else if(contadorCarta===4||contadorCarta===5){
            tercerCarta=true;
        }
        if(primerCarta){
            document.getElementById("cuarta2").style.zIndex=0;
        }else if(segundaCarta){
            document.getElementById("cuarta2").style.zIndex=1;
        }else if(tercerCarta){
            document.getElementById("cuarta2").style.zIndex=2;
        }
       
        analisisCartas[contadorCarta]=true;
        console.log(analisisCartas);
         anadirMesaJ2(mano2[0]);
         primerCarta = false;
         segundaCarta= false;
      
         tercerCarta=false;
         console.log(`"el contador de Carta es " ${contadorCarta}`);
         analizamosAfuera(contadorCarta);
        
      }

     if(b.id === "quinta2"){
        
        document.getElementById("quinta2").style.position = "relative";
        document.getElementById("quinta2").style.bottom = "14em";
        if(contadorCarta===0||contadorCarta===1){
            primerCarta=true;
        }
        else if(contadorCarta===2||contadorCarta===3){
                segundaCarta = true;
        }
        else if(contadorCarta===4||contadorCarta===5){
            tercerCarta=true;
        }
        if(primerCarta){
            document.getElementById("quinta2").style.zIndex=0;
        }else if(segundaCarta){
            document.getElementById("quinta2").style.zIndex=1;
        }else if(tercerCarta){
            document.getElementById("quinta2").style.zIndex=2;
        }
        analisisCartas[contadorCarta]=true;
        console.log(analisisCartas);
         anadirMesaJ2(mano2[1]);
         primerCarta = false;
         segundaCarta= false;
         tercerCarta=false;
         console.log(`"el contador de Carta es " ${contadorCarta}`);
         analizamosAfuera(contadorCarta);
        
     }

     
     if(b.id === "sexta2"){
         console.log("PASE POR ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        document.getElementById("sexta2").style.position = "relative";
        document.getElementById("sexta2").style.bottom = "14em";
        document.getElementById("sexta2").style.right="6.2em";
        if(contadorCarta===0||contadorCarta===1){
            primerCarta=true;
        }
        else if(contadorCarta===2||contadorCarta===3){
                segundaCarta = true;
        }
        else if(contadorCarta===4||contadorCarta===5){
            tercerCarta=true;
        }
        if(primerCarta){
            document.getElementById("sexta2").style.zIndex=0;
        }else if(segundaCarta){
            document.getElementById("sexta2").style.zIndex=1;
        }else if(tercerCarta){
            document.getElementById("sexta2").style.zIndex=2;
        }
        analisisCartas[contadorCarta]=true;
       console.log(analisisCartas);
         anadirMesaJ2(mano2[2]);
         primerCarta = false;
         segundaCarta= false;
         tercerCarta=false;
         console.log(`"el contador de Carta es " ${contadorCarta}`);
         analizamosAfuera(contadorCarta);
      
         
        }
      
       
          
  
 
        contadorCarta++;
    if(contadorCarta===6){
    console.log(mesaFinal[0][0]);
    console.log(mesaFinal[0][1]);
    console.log(mesaFinal[0][2]);

    console.log(mesaFinal[1][0]);
    console.log(mesaFinal[1][1]);
    console.log(mesaFinal[1][2]);
    
   
    console.log(mesaFinal);
    contadorCarta=0;
    repartir();
     
  }

}





/* analizamos para ver si se reparte bien en consola  */
console.log(mazo);

/*var contador = 0;
var numeroFinal = 1300;
while(contador<numeroFinal){
console.log(seleccionarCartaAleatoriaDeMazo());
contador++;
}*/


console.log(mano);
console.log(mano2);
/*  volvemos a su posicion las cartas a final del turno */
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

function crearJugador(n){
    
        jugador = new Jugador(n,++contadorDeJugadores);
    
        return jugador;
}


function agregarJugadores(){
    contador=0;
    
    document.getElementById("nameJ1Id").innerHTML=`${j1.getNombre}`;
    document.getElementById("nameJ2Id").innerHTML=`${j2.getNombre}`;
    jugadores[contador++]=j1;
    jugadores[contador++]=j2;
}



function activarEnvidoJ1(){
    contJ1BotEnvido= document.getElementsByClassName('botonEnvidoJ1')[0];
    contJ1BotEnvido.style.pointerEvents = "auto";
    contJ1BotRealEnvido= document.getElementsByClassName('botonRealEnvidoJ1')[0];
    contJ1BotRealEnvido.style.pointerEvents = "auto";
    contJ1BotFaltaEnvido= document.getElementsByClassName('botonFaltaEnvidoJ1')[0];
    contJ1BotFaltaEnvido.style.pointerEvents = "auto";
}
function activarEnvidoJ2(){
    contJ1BotEnvido= document.getElementsByClassName('botonEnvido')[0];
    contJ1BotEnvido.style.pointerEvents = "auto";
    contJ1BotRealEnvido= document.getElementsByClassName('botonRealEnvido')[0];
    contJ1BotRealEnvido.style.pointerEvents = "auto";
    contJ1BotFaltaEnvido= document.getElementsByClassName('botonFaltaEnvido')[0];
    contJ1BotFaltaEnvido.style.pointerEvents = "auto";
}
function desactivarEnvidoJ1(){
    contJ1BotEnvido= document.getElementsByClassName('botonEnvidoJ1')[0];
    contJ1BotEnvido.style.pointerEvents = "none";
    contJ1BotRealEnvido= document.getElementsByClassName('botonRealEnvidoJ1')[0];
    contJ1BotRealEnvido.style.pointerEvents = "none";
    contJ1BotFaltaEnvido= document.getElementsByClassName('botonFaltaEnvidoJ1')[0];
    contJ1BotFaltaEnvido.style.pointerEvents = "none";
}
function desactivarEnvidoJ2(){
    contJ1BotEnvido= document.getElementsByClassName('botonEnvido')[0];
    contJ1BotEnvido.style.pointerEvents = "none";
    contJ1BotRealEnvido= document.getElementsByClassName('botonRealEnvido')[0];
    contJ1BotRealEnvido.style.pointerEvents = "none";
    contJ1BotFaltaEnvido= document.getElementsByClassName('botonFaltaEnvido')[0];
    contJ1BotFaltaEnvido.style.pointerEvents = "none";
}

function activarManoJ1(){
    contJ1card1 =document.getElementsByClassName('first-top')[0];
    contJ1card1.style.pointerEvents = "auto";
    contJ1card2 =document.getElementsByClassName('second-top')[0];
    contJ1card2.style.pointerEvents = "auto";
    contJ1card3 =document.getElementsByClassName('third-top')[0];
    contJ1card3.style.pointerEvents = "auto";
    contJ1BotEnvido= document.getElementsByClassName('botonEnvidoJ1')[0];
    contJ1BotEnvido.style.pointerEvents = "auto";
    contJ1BotRealEnvido= document.getElementsByClassName('botonRealEnvidoJ1')[0];
    contJ1BotRealEnvido.style.pointerEvents = "auto";
    contJ1BotFaltaEnvido= document.getElementsByClassName('botonFaltaEnvidoJ1')[0];
    contJ1BotFaltaEnvido.style.pointerEvents = "auto";
    contJ1BotTruco= document.getElementsByClassName('botonTrucoJ1')[0];
    contJ1BotTruco.style.pointerEvents = "auto";
   

}

function activarManoJ2(){
    contJ2card1 =document.getElementsByClassName('first-down')[0];
    contJ2card1.style.pointerEvents = "auto";
    contJ2card2 =document.getElementsByClassName('second-down')[0];
    contJ2card2.style.pointerEvents = "auto";
    contJ2card3 =document.getElementsByClassName('third-down')[0];
    contJ2card3.style.pointerEvents = "auto";
    contJ1BotEnvido= document.getElementsByClassName('botonEnvido')[0];
    contJ1BotEnvido.style.pointerEvents = "auto";
    contJ1BotRealEnvido= document.getElementsByClassName('botonRealEnvido')[0];
    contJ1BotRealEnvido.style.pointerEvents = "auto";
    contJ1BotFaltaEnvido= document.getElementsByClassName('botonFaltaEnvido')[0];
    contJ1BotFaltaEnvido.style.pointerEvents = "auto";
    contJ1BotTruco= document.getElementsByClassName('botonTruco')[0];
    contJ1BotTruco.style.pointerEvents = "auto";
   

}

function desactivarManoJ1(){
    contJ1card1 =document.getElementsByClassName('first-top')[0];
    contJ1card1.style.pointerEvents = "none";
    contJ1card2 =document.getElementsByClassName('second-top')[0];
    contJ1card2.style.pointerEvents = "none";
    contJ1card3 =document.getElementsByClassName('third-top')[0];
    contJ1card3.style.pointerEvents = "none";
    contJ1BotEnvido= document.getElementsByClassName('botonEnvidoJ1')[0];
    contJ1BotEnvido.style.pointerEvents = "none";
    contJ1BotRealEnvido= document.getElementsByClassName('botonRealEnvidoJ1')[0];
    contJ1BotRealEnvido.style.pointerEvents = "none";
    contJ1BotFaltaEnvido= document.getElementsByClassName('botonFaltaEnvidoJ1')[0];
    contJ1BotFaltaEnvido.style.pointerEvents = "none";
    contJ1BotTruco= document.getElementsByClassName('botonTrucoJ1')[0];
    contJ1BotTruco.style.pointerEvents = "none";
 
 

   
    
}
function desactivarManoJ2(){
    contJ2card1 =document.getElementsByClassName('first-down')[0];
    contJ2card1.style.pointerEvents = "none";
    contJ2card2 =document.getElementsByClassName('second-down')[0];
    contJ2card2.style.pointerEvents = "none";
    contJ2card3 =document.getElementsByClassName('third-down')[0];
    contJ2card3.style.pointerEvents = "none";
   
    contJ1BotEnvido= document.getElementsByClassName('botonEnvido')[0];
    contJ1BotEnvido.style.pointerEvents = "none";
    contJ1BotRealEnvido= document.getElementsByClassName('botonRealEnvido')[0];
    contJ1BotRealEnvido.style.pointerEvents = "none";
    contJ1BotFaltaEnvido= document.getElementsByClassName('botonFaltaEnvido')[0];
    contJ1BotFaltaEnvido.style.pointerEvents = "none";
    contJ1BotTruco= document.getElementsByClassName('botonTruco')[0];
    contJ1BotTruco.style.pointerEvents = "none";
   


}

/* repartimos cartas y ejecutamos las distintas acciones */
console.log(j1);
console.log(j2);
console.log(jugadores);



function repartir() {

    console.log("PUNTAJE J1: "+ j1.getPuntaje + "\n" + "PUNTAJE J2: " + j2.getPuntaje);

    j1.agregarCanto("");
    j2.agregarCanto("");
    document.getElementById("paqueteTrucoJ1").style.display="flex";
    document.getElementById("paqueteTrucoJ2").style.display="flex";
    document.getElementById("trucoJ1Boton").style.display="flex";
    document.getElementById("trucoJ2Boton").style.display="flex";
    document.getElementById("reTrucoJ1Boton").style.display="none";
    document.getElementById("reTrucoJ2Boton").style.display="none";
    document.getElementById("valeCuatroJ1Boton").style.display="none";
    document.getElementById("valeCuatroJ2Boton").style.display="none";


    document.getElementById("paqueteEnvidoJ1").style.display="flex";
    document.getElementById("paqueteEnvidoJ2").style.display="flex";
    document.getElementById("realEnvidoJ1Boton").style.display="flex";
    document.getElementById("realEnvidoJ2Boton").style.display="flex";
    document.getElementById("envidoJ2Boton").style.display="flex";
    document.getElementById("envidoJ1Boton").style.display="flex";

    
    
 

    document.getElementById("botonQuieroJ2").style.display="none";
    document.getElementById("botonNoQuieroJ2").style.display="none";

    document.getElementById("botonQuieroJ1").style.display="none";
    document.getElementById("botonNoQuieroJ1").style.display="none";
    
    cantidadDeCantosEnvido=0;
    j1.reinicioPuntos();
    j2.reinicioPuntos();
    seRepartio=true;
    desactivarManoJ2();
    desactivarManoJ1();
    console.log("numero carta antes" + contadorCarta);
    ganadorDePunto=0;
    contadorCarta = 0;
    primerCarta = false;
    segundaCarta = false;
    tercerCarta = false;
    turno =0;

    cantidadDeCantosDeTruco = 0;
    puntajeTruco =0;
    puntajeEnvido = 0;
    mesaFinal=[];
    contadorMesaJ1=0;
    contadorMesaJ2=0;
 
    crearArray();
    

    /*document.getElementById("nameJ1").innerHTML = j1;*/
  
    generarMano();
    cambiarCartas();
    backThePosition();
    console.log(mano);
    console.log(mano2);
    /*document.getElementById("botonRepartir").style.display = "none";
    return false;*/
   
          
    if(isMano==1){
        isMano=2;
        desactivarManoJ1();
        activarManoJ2();
        console.log("numero carta despues" + contadorCarta);
        return true;
    }else if(isMano==2){
        isMano =1;
        desactivarManoJ2();
        activarManoJ1();
        console.log("numero carta despues" + contadorCarta);
         return true;
        
    }

    
}



console.log(analisisCartas);

function analizarQueSeRepartieronCartas(){
        contadorAnalisis=0;
        for (let index = 1; index < 6; index++) {
            const element = analisisCartas[index];
            if(element == true){
                contadorAnalisis += 1;
            }
            
        }
        return contadorAnalisis;
}


/*function vemosQueOnda(num){
 numeroAnalizado = num;
 console.log(numeroAnalizado + " ANALIZAMOS NUMERO");
return analizamosAfuera(numeroAnalizado);
}*/




function analizamosAfuera(numeroAnalizado){
    
    console.log("Es mano: " + isMano);
    if(numeroAnalizado === 0){
   
    if(isMano===1 ){
        desactivarManoJ1();
        activarManoJ2();
        
        }else if(isMano===2){
            desactivarManoJ2();
            activarManoJ1();
        
        }
       
    }else if(numeroAnalizado === 1){
   
            console.log(turno);
            console.log("vemos MAZO completoooooooooooooo  " + mesaFinal[0][turno] + "||" + mesaFinal[1][turno] + "||||||||"+ mesaFinal);
            ganadorDePunto = ganadorDelPunto();
            console.log(ganadorDePunto);
            if (ganadorDePunto==1){
            desactivarManoJ2();
            activarManoJ1();
            ganadorPuntoAnterior =1;
            }
            if(ganadorDePunto==2){
                desactivarManoJ1();
                activarManoJ2();
                ganadorPuntoAnterior =2;
            }
            if(ganadorDePunto==5){
                if(isMano==1){
                    desactivarManoJ2();
                    activarManoJ1();
                    ganadorPuntoAnterior=0;
                }
                if(isMano==2){
                    desactivarManoJ1();
                    activarManoJ2();
                    ganadorPuntoAnterior=0;
                }
            }
            document.getElementById("paqueteEnvidoJ1").style.display="none";
            document.getElementById("paqueteEnvidoJ2").style.display="none";
        } else if(numeroAnalizado ===2){
            turno =1;   
            if(ganadorPuntoAnterior==1){
                desactivarManoJ1();
                activarManoJ2();
            }
            if(ganadorPuntoAnterior==2){
                desactivarManoJ2();
                activarManoJ1();
            }
            // son iguales las cartas
            if(ganadorPuntoAnterior==0){
                if(isMano===1){
                    desactivarManoJ1();
                    activarManoJ2();
                   
                }
                if(isMano===2){
                    desactivarManoJ2();
                    activarManoJ1();
                
                }
            }
           
        }else if(numeroAnalizado ===3){
            ganadorDePunto =ganadorDelPunto();

            if(ganadorDePunto==1){
            desactivarManoJ2();
            activarManoJ1();
       
           
        }
        if(ganadorDePunto==2){
            desactivarManoJ1();
            activarManoJ2();
      
           
        }
        console.log(j1.getPuntos+"VEMOS PUNTOS ");
        console.log(j2.getPuntos+"VEMOS PUNTOS ");
        if(j1.getPuntos===2){
            sumaPuntajeTruco(1);
            console.log(j1.getPuntaje+" "+j1.getPuntaje);
            console.log(j2.getPuntaje+" "+j2.getPuntaje);
            repartir();
        }else if(j2.getPuntos===2){
            sumaPuntajeTruco(2);
            console.log(j1.getPuntaje+" "+j1.getPuntaje);
            console.log(j2.getPuntaje+" "+j2.getPuntaje);
            repartir();
        }
        if(ganadorDePunto ===5 &&( j1.getPuntos ===0 && j2.getPuntos===0)){
            if(isMano===1){
                desactivarManoJ2();
                activarManoJ1();
               
            }
            if(isMano===2){
                desactivarManoJ1();
                activarManoJ2();
            
            }
        }else if(ganadorDePunto ===5 && (j1.getPuntos===1|| j2.getPuntos===1)){
            if(j1.getPuntos===1){
                sumaPuntajeTruco(1);
            }else{
                sumaPuntajeTruco(2);
            }
            repartir();
        }else if(ganadorPuntoAnterior===0 && (j1.getPuntos===1 || j2.getPuntos===1)){
            if(j1.getPuntos===1){
                sumaPuntajeTruco(1);
            }else{
                sumaPuntajeTruco(2);
            }
            repartir();
        }


        }else if(numeroAnalizado ===4){
            turno =2;
            if(ganadorDePunto ===1){
                desactivarManoJ1();
                activarManoJ2();
            }else if(ganadorDePunto==2){
                desactivarManoJ2();
                activarManoJ1();
            }else if(ganadorDePunto ===5){
                if(isMano===1){
                    desactivarManoJ1();
                    activarManoJ2();
                   
                }
                if(isMano===2){
                    desactivarManoJ2();
                    activarManoJ1();
                
                }
            }
            
          
           
          
        }else if(numeroAnalizado ===5){
            ganadorDePunto =ganadorDelPunto();
            if(ganadorDePunto==1){
                sumaPuntajeTruco(1);
             
            }
            if(ganadorDePunto==2){
                sumaPuntajeTruco(2);
              
            }
            
                repartir();
          
        }
    }


function sumaPuntajeTruco(nJ){
    if(nJ===1){
            if(cantidadDeCantosDeTruco===0){
                j1.setPuntaje(1);
                
            }
            if(cantidadDeCantosDeTruco ===1){
                j1.setPuntaje(2);
             
            }else if(cantidadDeCantosDeTruco === 2){
                j1.setPuntaje(3);
                
            }
            else if(cantidadDeCantosDeTruco === 3){
                j1.setPuntaje(4);    
          
            }
            document.getElementById("puntuacionJ1").innerHTML=`${j1.getPuntaje}`;
    }else if(nJ ===2){
        if(cantidadDeCantosDeTruco===0){
            j2.setPuntaje(1);
        }
        if(cantidadDeCantosDeTruco ===1){
            j2.setPuntaje(2);
        }else if(cantidadDeCantosDeTruco === 2){
            j2.setPuntaje(3);
        }
        else if(cantidadDeCantosDeTruco === 3){
            j2.setPuntaje(4);    
        }
        document.getElementById("puntuacionJ2").innerHTML=`${j2.getPuntaje}`;
    }
}
function vaciarArray(){
   
        mesaFinal=[];
        contadorMesaJ1=0;
        contadorMesaJ2=0;
}
function crearArray(){
for (let index = 0; index < 3; index++) {
    mesaFinal[index] = new Array(2);
    
}
}


function anadirMesaJ1(c){
    
        mesaFinal[0][contadorMesaJ1]=c;
        contadorMesaJ1++;
}
function anadirMesaJ2(c){

    mesaFinal[1][contadorMesaJ2]=c;
    contadorMesaJ2++;
}


    

   


function ganadorDelPunto(){
        if((mesaFinal[0][turno]!=null && mesaFinal[1][turno]!=null) && (mesaFinal[0][turno].getValor!=mesaFinal[1][turno].getValor)){
                if(mesaFinal[0][turno].getValor>mesaFinal[1][turno].getValor){
                    console.log(`La carta ${mesaFinal[0][turno]} es la mas alta bro`);
                    j1.aumentarPunto();

                    return 1;
                }else if(mesaFinal[1][turno].getValor>mesaFinal[0][turno].getValor) {
                    console.log(`La carta ${mesaFinal[1][turno]} es la mas alta`);
                    j2.aumentarPunto();
                    return 2;
                }
        }
        if((mesaFinal[0][turno]!=null && mesaFinal[1][turno]!=null) && (mesaFinal[0][turno].getValor!=mesaFinal[1][turno].getValor)){
            if(mesaFinal[0][turno].getValor>mesaFinal[1][turno].getValor){
                console.log(`La carta ${mesaFinal[0][turno]} es la mas alta bro`);
                j1.aumentarPunto();
                return 1;
            }else if(mesaFinal[1][turno].getValor>mesaFinal[0][turno].getValor) {
                console.log(`La carta ${mesaFinal[1][turno]} es la mas alta`);
                j2.aumentarPunto();
                return 2;
            }
    }
    if((mesaFinal[0][turno]!=null && mesaFinal[1][turno]!=null) && ( mesaFinal[0][turno].getValor==mesaFinal[1][turno].getValor)){
        if(mesaFinal[0][turno].getValor==mesaFinal[1][turno].getValor){
            console.log(`Las cartas ${mesaFinal[0][turno]} y ${mesaFinal[1][turno]} son iguales`);
            
            console.log("CARTAS IGUALES!!!!!!!!!!!");
            return 5;
        }
    }
    
}


function cantarEnvido(J){
    if(J.id==="cantaEnvidoJ2"){
        activarEnvidoJ1();
        document.getElementById("paqueteEnvidoJ2").style.display="none";
        document.getElementById("paqueteTrucoJ2").style.display="none";
        document.getElementById("botonQuieroJ1").style.display="flex";
        document.getElementById("botonNoQuieroJ1").style.display="flex";
        document.getElementById("paqueteTrucoJ1").style.display="none";
        
       
        console.log("Envido");
        cantidadDeCantosEnvido++;
        console.log(j2.getUltimoCanto);
        console.log(cantidadDeCantosEnvido);
        if(j1.ultimoCanto==="ENVIDO"){
            j2.agregarCanto("ENVIDO");
            document.getElementById("botonQuieroJ2").style.display="none";
            document.getElementById("botonNoQuieroJ2").style.display="none";
            document.getElementById("botonQuieroJ1").style.display="flex";
            document.getElementById("botonNoQuieroJ1").style.display="flex";
            document.getElementById("paqueteEnvidoJ1").style.display="flex";
            document.getElementById("envidoJ2Boton").style.display="none";
            document.getElementById("envidoJ1Boton").style.display="none";


        }else if(j1.ultimoCanto===""){
            j2.agregarCanto("ENVIDO");
            document.getElementById("botonQuieroJ2").style.display="none";
            document.getElementById("botonNoQuieroJ2").style.display="none";
            document.getElementById("botonQuieroJ1").style.display="flex";
            document.getElementById("botonNoQuieroJ1").style.display="flex";
            document.getElementById("paqueteEnvidoJ1").style.display="flex";
            document.getElementById("envidoJ2Boton").style.display="flex";
            document.getElementById("envidoJ1Boton").style.display="flex";
        }
    }else if(J.id==="cantaEnvidoJ1"){
        activarEnvidoJ2();
  
        document.getElementById("paqueteEnvidoJ1").style.display="none";
        document.getElementById("paqueteTrucoJ1").style.display="none";
        document.getElementById("botonQuieroJ2").style.display="flex";
        document.getElementById("botonNoQuieroJ2").style.display="flex";
        document.getElementById("paqueteTrucoJ2").style.display="none";
     
        console.log(j1.getUltimoCanto);
        cantidadDeCantosEnvido++;
        console.log("Envido");
        console.log(cantidadDeCantosEnvido);
        if(j2.ultimoCanto==="ENVIDO"){
            j1.agregarCanto("ENVIDO");
            document.getElementById("botonQuieroJ1").style.display="none";
            document.getElementById("botonNoQuieroJ1").style.display="none";
            document.getElementById("botonQuieroJ2").style.display="flex";
            document.getElementById("botonNoQuieroJ2").style.display="flex";
            document.getElementById("paqueteEnvidoJ2").style.display="flex";
            document.getElementById("envidoJ2Boton").style.display="none";
            document.getElementById("envidoJ1Boton").style.display="none";

        }else if(j2.ultimoCanto === ""){
            j1.agregarCanto("ENVIDO");
            document.getElementById("botonQuieroJ1").style.display="none";
            document.getElementById("botonNoQuieroJ1").style.display="none";
            document.getElementById("botonQuieroJ2").style.display="flex";
            document.getElementById("botonNoQuieroJ2").style.display="flex";
            document.getElementById("paqueteEnvidoJ2").style.display="flex";
            document.getElementById("envidoJ2Boton").style.display="flex";
            document.getElementById("envidoJ1Boton").style.display="flex";
        }
        
    }
}

function cantarRealEnvido(J){
 
    if(J.id==="cantaRealEnvidoJ2"){
        
        cantidadDeCantosEnvido++;
        console.log("Real envido");
        /*que hayan cantado los dos realEnvido*/ 
        /* PUNTAJE ESPECIAL */
        document.getElementById("botonQuieroJ2").style.display="none";
        document.getElementById("botonNoQuieroJ2").style.display="none";
        document.getElementById("paqueteTrucoJ1").style.display="none";
            document.getElementById("paqueteTrucoJ2").style.display="none";
            document.getElementById("paqueteEnvidoJ2").style.display="none";    
             document.getElementById("botonQuieroJ1").style.display="flex";
            document.getElementById("botonNoQuieroJ1").style.display="flex";
        if(j1.ultimoCanto==="ENVIDO" && j2.ultimoCanto==="ENVIDO"){
            j2.agregarCanto("REALENVIDO");
            document.getElementById("paqueteEnvidoJ1").style.display="flex";
            document.getElementById("paqueteEnvidoJ1").style.display="none";
            document.getElementById("realEnvidoJ1Boton").style.display="none";
           document.getElementById("faltaEnvidoJ1Boton").style.display="flex";
           document.getElementById("botonQuieroJ1").style.display="flex";
        document.getElementById("botonNoQuieroJ1").style.display="flex";
        }else if(j1.ultimoCanto==="ENVIDO" && j2.ultimoCanto===""){
            j2.agregarCanto("REALENVIDO");
            /* PUNTAJE ESPECIAL */
            document.getElementById("paqueteEnvidoJ1").style.display="flex";
           document.getElementById("paqueteEnvidoJ1").style.display="none";
           document.getElementById("realEnvidoJ1Boton").style.display="none";
            document.getElementById("faltaEnvidoJ1Boton").style.display="flex";
            document.getElementById("botonQuieroJ1").style.display="flex";
        document.getElementById("botonNoQuieroJ1").style.display="flex";
        }else if(j1.ultimoCanto==="" && j2.ultimoCanto===""){
            j2.agregarCanto("REALENVIDO");
            document.getElementById("paqueteEnvidoJ1").style.display="flex";
            document.getElementById("paqueteEnvidoJ1").style.display="none";
            document.getElementById("realEnvidoJ1Boton").style.display="none";
            document.getElementById("faltaEnvidoJ1Boton").style.display="flex";
            document.getElementById("botonQuieroJ1").style.display="flex";
        document.getElementById("botonNoQuieroJ1").style.display="flex";
        }else if(j2.ultimoCanto==="ENVIDO" && j1.ultimoCanto===""){
            j2.agregarCanto("REALENVIDO");
            document.getElementById("paqueteEnvidoJ1").style.display="flex";
            document.getElementById("paqueteEnvidoJ1").style.display="none";
            document.getElementById("realEnvidoJ1Boton").style.display="none";
             document.getElementById("faltaEnvidoJ1Boton").style.display="flex";
             document.getElementById("botonQuieroJ1").style.display="flex";
         document.getElementById("botonNoQuieroJ1").style.display="flex";
        }


    }else if(J.id==="cantaRealEnvidoJ1"){
      
        console.log("Real Envido");
        cantidadDeCantosEnvido++;
        document.getElementById("botonQuieroJ1").style.display="none";
        document.getElementById("botonNoQuieroJ1").style.display="none";
        document.getElementById("paqueteEnvidoJ1").style.display="none";
        document.getElementById("paqueteTrucoJ1").style.display="none";
            document.getElementById("paqueteTrucoJ2").style.display="none";
  
    if(j1.ultimoCanto==="ENVIDO" && j2.ultimoCanto==="ENVIDO"){
        j1.agregarCanto("REALENVIDO");
        document.getElementById("paqueteEnvidoJ2").style.display="flex";
        document.getElementById("envidoJ2Boton").style.display="none";
        document.getElementById("realEnvidoJ2Boton").style.display="none";

        document.getElementById("faltaEnvidoJ2Boton").style.display="flex";
         
        
        document.getElementById("botonQuieroJ2").style.display="flex";
        document.getElementById("botonNoQuieroJ2").style.display="flex";

    }else if(j2.ultimoCanto==="ENVIDO" && j1.ultimoCanto===""){
        j1.agregarCanto("REALENVIDO");
        /* PUNTAJE ESPECIAL */
        document.getElementById("paqueteEnvidoJ2").style.display="flex";
        document.getElementById("envidoJ2Boton").style.display="none";
        document.getElementById("realEnvidoJ2Boton").style.display="none";
        document.getElementById("faltaEnvidoJ2Boton").style.display="flex";
        document.getElementById("botonQuieroJ2").style.display="flex";
        document.getElementById("botonNoQuieroJ2").style.display="flex";
    }else if(j1.ultimoCanto==="" && j2.ultimoCanto===""){
        j1.agregarCanto("REALENVIDO");
        document.getElementById("paqueteEnvidoJ2").style.display="flex";
        document.getElementById("envidoJ2Boton").style.display="none";
        document.getElementById("realEnvidoJ2Boton").style.display="none";
        document.getElementById("faltaEnvidoJ2Boton").style.display="flex";
        document.getElementById("botonQuieroJ2").style.display="flex";
        document.getElementById("botonNoQuieroJ2").style.display="flex";
    }else if(j2.ultimoCanto==="" && j1.ultimoCanto==="ENVIDO"){
        document.getElementById("paqueteEnvidoJ2").style.display="flex";
        document.getElementById("envidoJ2Boton").style.display="none";
        document.getElementById("realEnvidoJ2Boton").style.display="none";
        document.getElementById("faltaEnvidoJ2Boton").style.display="flex";
        document.getElementById("botonQuieroJ2").style.display="flex";
        document.getElementById("botonNoQuieroJ2").style.display="flex";
    }
    }
}

function cantarFaltaEnvido(J){
    if(J.id==="cantaFaltaEnvidoJ2"){
        j2.agregarCanto("FALTAENVIDO");
        cantidadDeCantosEnvido++;
        console.log("Falta envido");
    }else if(J.id==="cantaFaltaEnvidoJ1"){
        j1.agregarCanto("FALTAENVIDO");
        cantidadDeCantosEnvido++;
        console.log("Falta Envido");
    }
}
function cantarTruco(J){
    cantidadDeCantosDeTruco++;
    if(J.id==="cantaTrucoJ2"){
        
        j2.agregarCanto("TRUCO");
        console.log("Truco!!");
        document.getElementById("paqueteEnvidoJ1").style.display="none";
        document.getElementById("paqueteEnvidoJ2").style.display="none";

        document.getElementById("reTrucoJ1Boton").style.display="flex";
        document.getElementById("trucoJ2Boton").style.display="none";
        document.getElementById("trucoJ1Boton").style.display="none";
  
        document.getElementById("botonQuieroJ1").style.display="flex";
        document.getElementById("botonNoQuieroJ1").style.display="flex";
    
        
    }else if(J.id==="cantaTrucoJ1"){
        j1.agregarCanto("TRUCO");
        console.log("Truco");
        document.getElementById("reTrucoJ2Boton").style.display="flex";
        document.getElementById("trucoJ2Boton").style.display="none";
        document.getElementById("trucoJ1Boton").style.display="none";
        document.getElementById("paqueteEnvidoJ1").style.display="none";
        document.getElementById("paqueteEnvidoJ2").style.display="none";
     

        
        document.getElementById("botonQuieroJ2").style.display="flex";
        document.getElementById("botonNoQuieroJ2").style.display="flex";
    }
}
function cantarReTruco(r){
    cantidadDeCantosDeTruco++;
    if(r.id === "cantaReTrucoJ2"){
        j2.agregarCanto("RETRUCO");
        document.getElementById("reTrucoJ2Boton").style.display="none";
        document.getElementById("reTrucoJ1Boton").style.display="none";
        document.getElementById("valeCuatroJ1Boton").style.display="flex";

        document.getElementById("botonQuieroJ1").style.display="flex";
        document.getElementById("botonNoQuieroJ1").style.display="flex";
        
        document.getElementById("botonQuieroJ2").style.display="none";
        document.getElementById("botonNoQuieroJ2").style.display="none";
    }
    else if(r.id==="cantaReTrucoJ1"){
        j1.agregarCanto("RETRUCO");
        document.getElementById("reTrucoJ2Boton").style.display="none";
        document.getElementById("reTrucoJ1Boton").style.display="none";

        document.getElementById("valeCuatroJ2Boton").style.display="flex";

        document.getElementById("botonQuieroJ1").style.display="none";
        document.getElementById("botonNoQuieroJ1").style.display="none";
        document.getElementById("botonQuieroJ2").style.display="flex";
        document.getElementById("botonNoQuieroJ2").style.display="flex";
    }
}


function cantarValeCuatro(v){
    cantidadDeCantosDeTruco++;
    if(v.id==="cantaValeCuatroJ2"){
        j2.agregarCanto("RETRUCO");
        document.getElementById("valeCuatroJ2Boton").style.display="none";
        document.getElementById("botonQuieroJ1").style.display="flex";
        document.getElementById("botonNoQuieroJ1").style.display="flex";
        document.getElementById("botonQuieroJ2").style.display="none";
        document.getElementById("botonNoQuieroJ2").style.display="none";
    }
    if(v.id==="cantaValeCuatroJ1"){
        j1.agregarCanto("RETRUCO");
        document.getElementById("valeCuatroJ1Boton").style.display="none";
        document.getElementById("botonQuieroJ1").style.display="none";
        document.getElementById("botonNoQuieroJ1").style.display="none";
        document.getElementById("botonQuieroJ2").style.display="flex";
        document.getElementById("botonNoQuieroJ2").style.display="flex";
    }
}

function irAlMazo(J){
        if(J.id==="irAlMazoJ2"){
            console.log("Me voy al mazo");
            repartir();
        }else if(J.id==="irAlMazoJ1"){
            console.log("Me voy al mazo");
            repartir();
        }
}

function analizarQuiero(a){
    console.log("cantidad de cantos de truco    "+cantidadDeCantosDeTruco);
    console.log("cantidad de cantos de envido    "+cantidadDeCantosEnvido);
    if(a.id==="cantaQuieroJ1"){

        document.getElementById("botonQuieroJ1").style.display="none";
        document.getElementById("botonNoQuieroJ1").style.display="none";

        console.log(j1.getNombre+ " quiere!!");
         
      
        if(j2.ultimoCanto === "TRUCO" || j2.ultimoCanto === "RETRUCO" || j2.ultimoCanto === "VALECUATRO"){
            document.getElementById("botonQuieroJ1").style.display="none";
            document.getElementById("botonNoQuieroJ1").style.display="none";
            if(j2.ultimoCanto ==="VALECUATRO"){
                puntajeTruco =4;
            }
            if(j2.ultimoCanto==="RETRUCO"){
                puntajeTruco=3;
            }
            if(j2.ultimoCanto==="TRUCO"){
                puntajeTruco=2;
            }

        }
        if(j2.ultimoCanto==="ENVIDO" ||j2.ultimoCanto==="REALENVIDO" || j2.ultimoCanto==="FALTAENVIDO"){
       
            document.getElementById("paqueteTrucoJ1").style.display ="flex";
            document.getElementById("paqueteTrucoJ2").style.display ="flex";

            document.getElementById("paqueteEnvidoJ1").style.display="none";
            document.getElementById("faltaEnvidoJ1Boton").style.display = "none";
            if(analizarGanadorDeEnvido()===1){
               
                if(cantidadDeCantosEnvido === 1 &&( j2.ultimoCanto === "ENVIDO" || j1.ultimoCanto ==="ENVIDO")){
                   j1.setPuntaje(2);
                }else if(cantidadDeCantosEnvido === 1 && (j2.ultimoCanto === "REALENVIDO" || j1.ultimoCanto === "REALENVIDO")){
                    j1.setPuntaje(3); 
                }else if(cantidadDeCantosEnvido === 2 && (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto === "ENVIDO")){
                    j1.setPuntaje(4);
                }
                else if(cantidadDeCantosEnvido === 2 && ((j1.ultimoCanto === "ENVIDO" && j2.ultimoCanto === "REALENVIDO") || (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto==="REALENVIDO"))){
                    j1.setPuntaje(5);         
                }   
                else if(cantidadDeCantosEnvido === 3 && ((j1.ultimoCanto === "ENVIDO" && j2.ultimoCanto === "REALENVIDO") || (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto==="REALENVIDO"))){
                    j1.setPuntaje(7);         
                }   
                document.getElementById("puntuacionJ1").innerHTML=`${j1.getPuntaje}`;
                console.log("GANO ENVIDO JUGADOR " + j1.getNombre + " con " + puntosEnvido(1)+ " el PUNTAJE DEL JUGADOR ES: " + j1.getPuntaje);

            }else {
                     
                if(cantidadDeCantosEnvido === 1 &&( j1.ultimoCanto === "ENVIDO" || j2.ultimoCanto ==="ENVIDO")){
                    j2.setPuntaje(2);
                 }else if(cantidadDeCantosEnvido === 1 && (j1.ultimoCanto === "REALENVIDO" || j2.ultimoCanto === "REALENVIDO")){
                     j2.setPuntaje(3); 
                 }else if(cantidadDeCantosEnvido === 2 &&( j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto === "ENVIDO")){
                     j2.setPuntaje(4);
                 }
                 else if(cantidadDeCantosEnvido === 2 &&((j1.ultimoCanto === "ENVIDO" && j2.ultimoCanto === "REALENVIDO") || (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto==="REALENVIDO"))){
                     j2.setPuntaje(5);         
                 }   
                 else if(cantidadDeCantosEnvido === 3 && ((j1.ultimoCanto === "ENVIDO" && j2.ultimoCanto === "REALENVIDO") || (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto==="REALENVIDO"))){
                     j2.setPuntaje(7);         
                 }   
                 document.getElementById("puntuacionJ2").innerHTML=`${j2.getPuntaje}`;
                console.log("GANO ENVIDO JUGADOR " + j2.getNombre + " con " + puntosEnvido(2) + " el PUNTAJE DEL JUGADOR ES: " + j2.getPuntaje);
            }
            
        }
        

    }else if(a.id==="cantaNoQuieroJ1"){
        console.log(j1.getNombre+" No quiere");
        document.getElementById("botonQuieroJ1").style.display="none";
        document.getElementById("botonNoQuieroJ1").style.display="none";
        if(j2.ultimoCanto === "TRUCO" || j2.ultimoCanto === "RETRUCO" || j2.ultimoCanto === "VALECUATRO"){
            if(j2.ultimoCanto ==="VALECUATRO"){
                puntajeTruco =3;
                j2.setPuntaje(3);
                document.getElementById("puntuacionJ2").innerHTML=`${j2.getPuntaje}`;
            }
            if(j2.ultimoCanto==="RETRUCO"){
                puntajeTruco=2;
                j2.setPuntaje(2);
                document.getElementById("puntuacionJ2").innerHTML=`${j2.getPuntaje}`;
            }
            if(j2.ultimoCanto==="TRUCO" && cantidadDeCantosEnvido>0){
                puntajeTruco=1;
                j2.setPuntaje(1);
                document.getElementById("puntuacionJ2").innerHTML=`${j2.getPuntaje}`;
            }
            if(j2.ultimoCanto==="TRUCO" &&  cantidadDeCantosEnvido===0 &&(mesaFinal[1][0]===null || mesaFinal[0][0]===null)){
                j2.setPuntaje(2);
                document.getElementById("puntuacionJ2").innerHTML=`${j2.getPuntaje}`;
            }else if(j2.ultimoCanto==="TRUCO" &&  cantidadDeCantosEnvido===0 && (mesaFinal[1][0]!=null && mesaFinal[0][0]!=null)){
                j2.setPuntaje(1);
                document.getElementById("puntuacionJ2").innerHTML=`${j2.getPuntaje}`;
            }
            repartir();
        }
        else if(j2.ultimoCanto==="ENVIDO" || j2.ultimoCanto === "REALENVIDO" || j2.ultimoCanto==="FALTAENVIDO"){
            document.getElementById("paqueteTrucoJ1").style.display ="flex";
            document.getElementById("paqueteTrucoJ2").style.display ="flex";
            document.getElementById("paqueteEnvidoJ1").style.display="none";
            document.getElementById("paqueteEnvidoJ2").style.display="none";
            if(cantidadDeCantosEnvido === 1 && (j2.ultimoCanto ==="ENVIDO")){
                j2.setPuntaje(1);
             }else if(cantidadDeCantosEnvido === 1 && (j2.ultimoCanto === "REALENVIDO")){
                 j2.setPuntaje(1); 
             }else if(cantidadDeCantosEnvido === 2 && (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto === "ENVIDO")){
                 j2.setPuntaje(2);
             }
             else if(cantidadDeCantosEnvido === 2 &&( (j1.ultimoCanto === "ENVIDO" && j2.ultimoCanto === "REALENVIDO") || (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto==="REALENVIDO"))){
                 j2.setPuntaje(2);         
             }   
             else if(cantidadDeCantosEnvido === 3 &&( (j1.ultimoCanto === "ENVIDO" && j2.ultimoCanto === "REALENVIDO") || (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto==="REALENVIDO"))){
                 j2.setPuntaje(4);         
             }   
             document.getElementById("puntuacionJ2").innerHTML=`${j2.getPuntaje}`;
             console.log("El otro jugador no quiso gano  " + j2.getNombre + " con " + puntosEnvido(2)+ " el PUNTAJE DEL JUGADOR ES: " + j2.getPuntaje);
        }
        }

    
    if(a.id==="cantaQuieroJ2"){
        console.log(j2.getNombre+ " quiere!!");
        document.getElementById("botonQuieroJ2").style.display="none";
        document.getElementById("botonNoQuieroJ2").style.display="none";
        if(j1.ultimoCanto === "TRUCO" || j1.ultimoCanto === "RETRUCO" || j1.ultimoCanto === "VALECUATRO"){
            if(j1.ultimoCanto ==="VALECUATRO"){
                puntajeTruco =4;
            }
            if(j1.ultimoCanto==="RETRUCO"){
                puntajeTruco=3;
            }
            if(j1.ultimoCanto==="TRUCO"){
                puntajeTruco=2;
            }
        }
        if(j1.ultimoCanto==="ENVIDO" ||j1.ultimoCanto==="REALENVIDO" || j1.ultimoCanto==="FALTAENVIDO"){
            document.getElementById("paqueteTrucoJ1").style.display ="flex";
            document.getElementById("paqueteTrucoJ2").style.display ="flex";

            document.getElementById("paqueteEnvidoJ2").style.display="none";
            document.getElementById("faltaEnvidoJ2Boton").style.display = "none";
            if(analizarGanadorDeEnvido()===1){
               
                if(cantidadDeCantosEnvido === 1 && (j2.ultimoCanto === "ENVIDO" || j1.ultimoCanto ==="ENVIDO")){
                   j1.setPuntaje(2);
                }else if(cantidadDeCantosEnvido === 1 && (j2.ultimoCanto === "REALENVIDO" || j1.ultimoCanto === "REALENVIDO")){
                    j1.setPuntaje(3); 
                }else if(cantidadDeCantosEnvido === 2 && (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto === "ENVIDO")){
                    j1.setPuntaje(4);
                }
                else if(cantidadDeCantosEnvido === 2 &&( (j1.ultimoCanto === "ENVIDO" && j2.ultimoCanto === "REALENVIDO") || (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto==="REALENVIDO"))){
                    j1.setPuntaje(5);         
                }   
                else if(cantidadDeCantosEnvido === 3 && ((j1.ultimoCanto === "ENVIDO" && j2.ultimoCanto === "REALENVIDO") || (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto==="REALENVIDO"))){
                    j1.setPuntaje(7);         
                }   
                document.getElementById("puntuacionJ1").innerHTML=`${j1.getPuntaje}`;
                console.log("GANO ENVIDO JUGADOR " + j1.getNombre + " con " + puntosEnvido(1)+ " el PUNTAJE DEL JUGADOR ES: " + j1.getPuntaje);

            }else {
                     
                if(cantidadDeCantosEnvido === 1 && (j1.ultimoCanto === "ENVIDO"  || j2.ultimoCanto ==="ENVIDO")){
                    j2.setPuntaje(2);
                 }else if(cantidadDeCantosEnvido === 1 && (j1.ultimoCanto === "REALENVIDO" || j2.ultimoCanto === "REALENVIDO")){
                     j2.setPuntaje(3); 
                 }else if(cantidadDeCantosEnvido === 2 && (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto === "ENVIDO")){
                     j2.setPuntaje(4);
                 }
                 else if(cantidadDeCantosEnvido === 2 &&( (j1.ultimoCanto === "ENVIDO" && j2.ultimoCanto === "REALENVIDO") || (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto==="REALENVIDO"))){
                     j2.setPuntaje(5);         
                 }   
                 else if(cantidadDeCantosEnvido === 3 &&( (j1.ultimoCanto === "ENVIDO" && j2.ultimoCanto === "REALENVIDO") || (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto==="REALENVIDO"))){
                     j2.setPuntaje(7);         
                 }   
                 document.getElementById("puntuacionJ2").innerHTML=`${j2.getPuntaje}`;
                console.log("GANO ENVIDO JUGADOR " + j2.getNombre + " con " + puntosEnvido(2) + " el PUNTAJE DEL JUGADOR ES: " + j2.getPuntaje);
            }
            
        }
    }else if(a.id==="cantaNoQuieroJ2"){
        console.log(j2.getNombre+" No quiere");
    
        if(j1.ultimoCanto === "TRUCO" || j1.ultimoCanto === "RETRUCO" || j1.ultimoCanto === "VALECUATRO"){
            if(j1.ultimoCanto ==="VALECUATRO"){
                puntajeTruco =3;
                j1.setPuntaje(3);
                document.getElementById("puntuacionJ1").innerHTML=`${j1.getPuntaje}`;
            }
            if(j1.ultimoCanto==="RETRUCO"){
                puntajeTruco=2;
                j1.setPuntaje(2);
                document.getElementById("puntuacionJ1").innerHTML=`${j1.getPuntaje}`;
            }
            if(j1.ultimoCanto==="TRUCO"  && cantidadDeCantosEnvido>0){
                puntajeTruco=1;
                j1.setPuntaje(1);
                document.getElementById("puntuacionJ1").innerHTML=`${j1.getPuntaje}`;
            }
            if(j1.ultimoCanto==="TRUCO" &&  cantidadDeCantosEnvido===0 && (mesaFinal[1][0]===null || mesaFinal[0][0]===null)){
                j1.setPuntaje(2);
                document.getElementById("puntuacionJ1").innerHTML=`${j1.getPuntaje}`;
            }else if(j1.ultimoCanto==="TRUCO" &&  cantidadDeCantosEnvido===0 &&  (mesaFinal[1][0]!=null && mesaFinal[0][0]!=null)){
                j1.setPuntaje(1);
                document.getElementById("puntuacionJ1").innerHTML=`${j1.getPuntaje}`;
            }
            repartir();
        }
            else if(j1.ultimoCanto==="ENVIDO" || j1.ultimoCanto === "REALENVIDO" || j1.ultimoCanto==="FALTAENVIDO"){
                document.getElementById("paqueteTrucoJ1").style.display ="flex";
                document.getElementById("paqueteTrucoJ2").style.display ="flex";
                document.getElementById("botonQuieroJ2").style.display="none";
                document.getElementById("botonNoQuieroJ2").style.display="none";
                document.getElementById("paqueteEnvidoJ1").style.display="none";
                document.getElementById("paqueteEnvidoJ2").style.display="none";
                
               
                    if(cantidadDeCantosEnvido === 1 && (j1.ultimoCanto ==="ENVIDO")){
                       j1.setPuntaje(1);
                    }else if(cantidadDeCantosEnvido === 1 && (j1.ultimoCanto === "REALENVIDO")){
                        j1.setPuntaje(1); 
                    }else if(cantidadDeCantosEnvido === 2 && (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto === "ENVIDO")){
                        j1.setPuntaje(2);
                    }
                    else if(cantidadDeCantosEnvido === 2 &&( (j1.ultimoCanto === "ENVIDO" && j2.ultimoCanto === "REALENVIDO") || (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto==="REALENVIDO"))){
                        j1.setPuntaje(2);         
                    }   
                    else if(cantidadDeCantosEnvido === 3 && ((j1.ultimoCanto === "ENVIDO" && j2.ultimoCanto === "REALENVIDO") || (j2.ultimoCanto === "ENVIDO" && j1.ultimoCanto==="REALENVIDO"))){
                        j1.setPuntaje(4);         
                    }   
                    document.getElementById("puntuacionJ1").innerHTML=`${j1.getPuntaje}`;
                    console.log("El otro jugador no quiso gano  " + j1.getNombre + " con " + puntosEnvido(1)+ " el PUNTAJE DEL JUGADOR ES: " + j1.getPuntaje);
    
              
                         
                   
                
            
            }
    
    }
}

function puntosEnvido(numJugador){
    resultadoEnvido =0;
    resultadoEnvido2 =0;
    resultadoAnteriorEnvido=0;
    envido = false;
    if(numJugador === 1){
    if(mano[0].getNombre===mano[1].getNombre){
        envido = true;
        if(mano[0].getNumero<=7&&mano[1].getNumero<=7){
            resultadoEnvido = parseInt(mano[0].getNumero)+ parseInt(mano[1].getNumero) + 20;
            resultadoAnteriorEnvido = resultadoEnvido;
            
        }
        if((mano[0].getNumero<=12 && mano[0].getNumero>=10) && mano[1].getNumero<=7){
            resultadoEnvido = mano[1].getNumero + 20;
            resultadoAnteriorEnvido = resultadoEnvido;
          
        }
        if(mano[0].getNumero<=7 && (mano[1].getNumero<=12 && mano[1].getNumero>=10)){
            resultadoEnvido = mano[0].getNumero + 20;
            resultadoAnteriorEnvido = resultadoEnvido;
        
        }
        if((mano[0].getNumero >= 10 && mano[0].getNumero <=12) && (mano[1].getNumero<=12 && mano[1].getNumero>=10)){
            resultadoEnvido = 20;
            resultadoAnteriorEnvido = resultadoEnvido;
         
        }
    }

    if(mano[1].getNombre===mano[2].getNombre){
        envido = true;
        if(mano[1].getNumero<=7 && mano[2].getNumero<=7){
         
            resultadoEnvido = mano[1].getNumero + mano[2].getNumero + 20;
            if(resultadoEnvido>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido;
            }else {
                resultadoEnvido = resultadoAnteriorEnvido;
            }
        }
        if((mano[1].getNumero<=12 && mano[1].getNumero>=10) && mano[2].getNumero<=7){
            resultadoEnvido = mano[2].getNumero + 20;
       
            if(resultadoEnvido>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido;
            }else {
                resultadoEnvido = resultadoAnteriorEnvido;
            }
        }
        if(mano[1].getNumero<=7 && (mano[2].getNumero<=12 && mano[2].getNumero>=10)){
            resultadoEnvido = mano[1].getNumero + 20;
         
            if(resultadoEnvido>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido;
            }else {
                resultadoEnvido = resultadoAnteriorEnvido;
            }
        }
        if((mano[1].getNumero >= 10 && mano[1].getNumero <=12) && (mano[2].getNumero<=12 && mano[2].getNumero>=10)){
            resultadoEnvido = 20;
         
            if(resultadoEnvido>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido;
            }else {
                resultadoEnvido = resultadoAnteriorEnvido;
            }
        }
       
    }

    if(mano[0].getNombre===mano[2].getNombre){
        envido = true;
        if(mano[0].getNumero<=7 && mano[2].getNumero<=7){
       
            resultadoEnvido = mano[0].getNumero + mano[2].getNumero + 20;
            if(resultadoEnvido>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido;
            }else {
                resultadoEnvido = resultadoAnteriorEnvido;
            }
        }
        if((mano[0].getNumero<=12 && mano[0].getNumero>=10) && mano[2].getNumero<=7){
            resultadoEnvido = mano[2].getNumero + 20;
        
            if(resultadoEnvido>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido;
            }else {
                resultadoEnvido = resultadoAnteriorEnvido;
            }
        }
        if(mano[0].getNumero<=7 && (mano[2].getNumero<=12 && mano[2].getNumero>=10)){
            resultadoEnvido = mano[0].getNumero + 20;
   
            if(resultadoEnvido>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido;
            }else {
                resultadoEnvido = resultadoAnteriorEnvido;
            }
        }
        if((mano[0].getNumero >= 10 && mano[0].getNumero <=12) && (mano[2].getNumero<=12 && mano[2].getNumero>=10)){
            resultadoEnvido = 20;

            if(resultadoEnvido>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido;
            }else {
                resultadoEnvido = resultadoAnteriorEnvido;
            }
        }
       
    }
    if(!envido){
        for (let index = 0; index < 3; index++) {
            const element = mano[index];
            if((element.getNumero>resultadoEnvido )&& (element.getNumero<=7)){
                resultadoEnvido = element.getNumero;
            }
        }
        return resultadoEnvido;
    }
    return resultadoEnvido;
    }
    envido = false;
    resultadoAnteriorEnvido = 0;
    if(numJugador === 2){
    if(mano2[0].getNombre===mano2[1].getNombre){
        envido = true;
        if(mano2[0].getNumero<=7&&mano2[1].getNumero<=7){

            resultadoEnvido2 = parseInt(mano2[0].getNumero)+ parseInt(mano2[1].getNumero) + 20;
            resultadoAnteriorEnvido = resultadoEnvido2;
        }
        if((mano2[0].getNumero<=12 && mano2[0].getNumero>=10) && mano2[1].getNumero<=7){
     
            resultadoEnvido2 = mano2[1].getNumero + 20;
            resultadoAnteriorEnvido = resultadoEnvido2;
        }
        if(mano2[0].getNumero<=7 && (mano2[1].getNumero<=12 && mano2[1].getNumero>=10)){
  
            resultadoEnvido2 = mano2[0].getNumero + 20;
            resultadoAnteriorEnvido = resultadoEnvido2;
        }
        if((mano2[0].getNumero >= 10 && mano2[0].getNumero <=12) && (mano2[1].getNumero<=12 && mano2[1].getNumero>=10)){
         
            resultadoEnvido2 = 20;
            resultadoAnteriorEnvido = resultadoEnvido2;
        }
    }

    if(mano2[1].getNombre===mano2[2].getNombre){
        envido = true;
        if(mano2[1].getNumero<=7 && mano2[2].getNumero<=7){
   
            resultadoEnvido2 = mano2[1].getNumero + mano2[2].getNumero + 20;
            if(resultadoEnvido2>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido2;
            }else {
                resultadoEnvido2 = resultadoAnteriorEnvido;
            }
        }
        if((mano2[1].getNumero<=12 && mano2[1].getNumero>=10) && mano2[2].getNumero<=7){
    
            resultadoEnvido2 = mano2[2].getNumero + 20;
            if(resultadoEnvido2>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido2;
            }else {
                resultadoEnvido2 = resultadoAnteriorEnvido;
            }
        }
        if(mano2[1].getNumero<=7 && (mano2[2].getNumero<=12 && mano2[2].getNumero>=10)){
      
            resultadoEnvido2 = mano2[1].getNumero + 20;
            if(resultadoEnvido2>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido2;
            }else {
                resultadoEnvido2 = resultadoAnteriorEnvido;
            }
        }
        if((mano2[1].getNumero >= 10 && mano2[1].getNumero <=12) && (mano2[2].getNumero<=12 && mano2[2].getNumero>=10)){
         
            resultadoEnvido2 = 20;
            if(resultadoEnvido2>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido2;
            }else {
                resultadoEnvido2 = resultadoAnteriorEnvido;
            }
        }
       
    }

    if(mano2[0].getNombre===mano2[2].getNombre){
        envido = true;
        if(mano2[0].getNumero<=7 && mano2[2].getNumero<=7){
         
            resultadoEnvido2 = mano2[0].getNumero + mano2[2].getNumero + 20;
            if(resultadoEnvido2>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido2;
            }else {
                resultadoEnvido2 = resultadoAnteriorEnvido;
            }
        }
        if((mano2[0].getNumero<=12 && mano2[0].getNumero>=10) && mano2[2].getNumero<=7){
         
            resultadoEnvido2 = mano2[2].getNumero + 20;
            if(resultadoEnvido2>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido2;
            }else {
                resultadoEnvido2 = resultadoAnteriorEnvido;
            }
        }
        if(mano2[0].getNumero<=7 && (mano2[2].getNumero<=12 && mano2[2].getNumero>=10)){
            resultadoEnvido2 = mano2[0].getNumero + 20;
            if(resultadoEnvido2>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido2;
            }else {
                resultadoEnvido2 = resultadoAnteriorEnvido;
            }
        }
        if((mano2[0].getNumero >= 10 && mano2[0].getNumero <=12) && (mano2[2].getNumero<=12 && mano2[2].getNumero>=10)){
            resultadoEnvido2 = 20;
            if(resultadoEnvido2>resultadoAnteriorEnvido){
                resultadoAnteriorEnvido = resultadoEnvido2;
            }else {
                resultadoEnvido2 = resultadoAnteriorEnvido;
            }
        }
       
    }
    if(!envido){
        for (let index = 0; index <3; index++) {
                const element = mano2[index];
            if(element.getNumero>resultadoEnvido2 && element.getNumero<=7){
                resultadoEnvido2 = element.getNumero;
            }
        }
        return resultadoEnvido2;
    }

   return resultadoEnvido2;
}
    


}


function analizarGanadorDeEnvido(){
    puntosJugadorUno = 0;
    puntosJugadorDos = 0;

    puntosJugadorUno = puntosEnvido(1);
    puntosJugadorDos = puntosEnvido(2);

    if(puntosJugadorUno > puntosJugadorDos){
        return 1;
        
    }
    else if(puntosJugadorUno<puntosJugadorDos){
        return 2;
    }
    if(puntosJugadorUno === puntosJugadorDos){
        if(isMano === 1){
            return 1;
        }else {
            return 2;
        }
    }
    

}


j1= crearJugador("Batman");
j2 = crearJugador("Mike");
agregarJugadores();
repartir();
if(isMano===1){
        
    desactivarManoJ2();
    activarManoJ1();
    }else if(isMano===2){
  
    desactivarManoJ1();
    activarManoJ2();
    }
