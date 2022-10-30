//lista domande e risposte
function listadom(n) {
  let domande = [
    "Cosa cerchi?",
    "Sei introverso o estroverso?",
    "Cerchi persone con quali interessi?",
  ];
  let nrisp = [3, 2, 4];
  let risp = ["amicizia", "amore", "gruppi studio", "introverso", "estroverso","sport","cultura","viaggi","nerd"];
  let res = ["f", "l", "s", "i", "e","q","c","v","n"];
  return [domande, nrisp, risp, res];
}

//richiama elemento
function elemento(e) {
  return document.getElementById(e);
}

//compila quiz
function domanda(num) {

  //richiama lista
  let lista = listadom(num);

  //scrive domanda
  elemento("domanda1").innerText = lista[0][num];

  //recupera numero risposte passate

  //scrive risposte
  let risposta = "";
  let somma = Number();
  for (let index = 0; index < num; index++) {
    somma += Number(lista[1][index]);
  }
  
  for (let index = 0; index < lista[1][num]; index++) {
    risposta +=
      '<div piastrella="block 1" class="aligner"><div piastrella="block 1" class="risposta" onclick="clicked(' +
      num +
      ",\'" +
      lista[3][Number(index) + Number(somma)] +
      '\')">' +
      lista[2][Number(index) + Number(somma)] +
      "</div></div>";
  }

  elemento("rispo").innerHTML = risposta;
}

//carica js all'avvio
window.addEventListener("load", (event) => {
    //inizializza variabile
    code ="";
    //chiama funzione
    domanda(0);
    avanzamento(0);
});

function clicked(pos,val) {
    let totdom = listadom()[0].length-1;
    code += val;
    if(pos>=totdom){
        
    }else{
        domanda(pos+1);
    }
    
   avanzamento(pos+1)
   
}

function avanzamento(pos) {
    let totdom = listadom()[0].length;
     elemento("avanza").innerHTML =
     '<div class="res" style="width:' + (pos / totdom) * 100 + '%"></div>';
     if(listadom()[0].length-1<pos){
      calcolo(code)
     }
}

function calcolo(code) {
  console.log(code)
}