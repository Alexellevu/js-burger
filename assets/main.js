/* Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti. */

//nome, prezzo

//creare lista ingredienti ed assegnare prezzo a ciascuno
counter = 0;
function renderInput(list, el){
  while(counter < list.length){

    el.insertAdjacentHTML('afterbegin',
    `
      <div class="form-group">
        <label for="${list[counter][0]}">${list[counter][0]}</label>
        <input type="checkbox" name="${list[counter][0]}" id="${list[counter][0]}" data-price="${list[counter][1]}">
      </div>
    `
    )

    counter++
  }
}

var ingredients = [
  ['cheese', '1'],
  ['eggs', '2'],
  ['mustard', '0.5'],
  ['tomato', '1'],
  ['lattuce', '1'],
  ['ketchup', '0.5'],
]

var ingElement = document.querySelector('.ingredients');
renderInput(ingredients, ingElement);

//Ascoltiamo per il click sul pulsante calculate
document.querySelector('button').addEventListener('click', function(){
   
    //definisci il prezzo del panino
     var price = 10.00;
     /* console.log(price); */



//incrementiamo il prezzo del panino quando un ingrediente viene selezionato
var checks = document.querySelectorAll("input[type = 'checkbox']");
/* console.log(checks); */
var sumIngredients = null;
  for (var i =0;  i < checks.length; i++){
    var element = checks[i];
      if(element.checked){
         sumIngredients  += Number(element.getAttribute('data-price'))
         
      }
  }

 /*  console.log(sumIngredients); */
  var total_price = price + sumIngredients;
  console.log(total_price);



//definire codici sconto per il prezzo finale
var couponsList = [
        'a1', 'a2', 'a3', 'a4'
];

//ascoltiamo il click sul pulsante generate

});


