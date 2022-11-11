const { ResetTv } = require("@mui/icons-material");

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



  function visible (op, p2){
    if(op.value != ""){
      console.log("Not empty");
      // form.style.opacity ="initial";
      op.style.cssText= 'outline:2px solid green';
      
    }else{
      named.style.cssText= 'outline:2px solid red';

    }
    
  } 

// first input https://www.makeuseof.com/regular-expressions-form-validation-html-javascript/
named.addEventListener("keyup", function(e){
    var dataOne = e.target.value;
    console.log(dataOne);
    var nameRGEX = /^[a-zA-Z]+$/;
    var nameResult = nameRGEX.test(dataOne);
    if (nameResult){
      console.log(dataOne);
    }else{

      named.style.cssText= 'outline:2px solid red';
    }
   
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


    // function validate()
// {
  // var phoneNumber = document.getElementById('phone-number').value;
  // var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  // var phoneResult = phoneRGEX.test(phoneNumber);
  // alert("phone:"+phoneResult );
// }
    
    // console.log("resdy");
  });


  

  // function to get all the input out



  
