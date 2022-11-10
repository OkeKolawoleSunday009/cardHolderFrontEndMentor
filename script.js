 // select the form when submited button is clicked
var form = document.querySelector("#submit");

  // select the input0 button each when seleccted;
  var named = document.querySelector("#name");
  var number = document.querySelector("#number");
  var month = document.querySelector("#month");
  var dated = document.querySelector("#date");
  var cvc = document.querySelector("#cvc");


  // updatind the value when the input data is filed
  document.getElementById('card_name').innerHTML = "oke kolawole ";
  document.getElementById("card_number").innerHTML ="123 456 789"; 
  document.getElementById("card_month").innerHTML = "02";
  document.getElementById("card_cvc").innerHTML ="e.g 123";


// first input
named.addEventListener("keyup", function(e){
    var dataOne = e.target.value;
    console.log(dataOne);

    // update it in the ui
    document.getElementById('card_name').innerHTML = dataOne;


});

// second  input
number.addEventListener("keyup", function(e){
  var dataTwo = e.target.value;
  console.log(dataTwo);

  // update it in the ui
  document.getElementById('card_number').innerHTML = dataTwo;


});
// third  input
month.addEventListener("keyup", function(e){
  var dataThree = e.target.value;
  console.log(dataThree);

  // update it in the ui

  document.getElementById('card_month').innerHTML = dataThree;


});

//  fifth input     
cvc.addEventListener("keyup", function(e){
  var dataFifth = e.target.value;
  console.log(dataFifth);

  // update it in the ui

  document.getElementById('card_cvc').innerHTML = dataFifth;


});

    form.addEventListener("click", function(){
    
    console.log("resdy");
  });


  

  // function to get all the input out



  
