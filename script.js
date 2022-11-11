

 // select the form when submited button is clicked
var form = document.querySelector("#submit");

  // select the input0 button each when seleccted;
  var named = document.querySelector("#name");
  var number = document.querySelector("#number");
  var month = document.querySelector("#month");
  var dated = document.querySelector("#date");
  var cvc = document.querySelector("#cvc");


  // updatind the value when the input data is filed
   var cardName =  document.getElementById('card_name');
   var cardNumber = document.getElementById("card_number");
   var cardMonth = document.getElementById("card_month");
   var cardCvc = document.getElementById("card_cvc");



  // function visible (op, p2){
  //   if(op.value != ""){
  //     console.log("Not empty");
  //     // form.style.opacity ="initial";
  //     op.style.cssText= 'outline:2px solid green';
      
  //   }else{
  //     named.style.cssText= 'outline:2px solid red';

  //   }
    
  // } 

// first input https://www.makeuseof.com/regular-expressions-form-validation-html-javascript/

changeDisplay(named, cardName);
changeDisplay(number, cardNumber);
changeDisplay(month, cardMonth);
changeDisplay(dated, cardCvc);

function changeDisplay(para1, para2){
  para1.addEventListener("keyup", function(e){
    var dataValue = e.target.value;
    var  UpperCase =  dataValue.toUpperCase();   
    para2.innerHTML = UpperCase;                                                                                                                    
  });

}

// named.addEventListener("keyup", function(e){
//     var dataOne = e.target.value;
//     console.log(dataOne);
//     var nameRGEX = /^[a-zA-Z]+$/;
//     var nameResult = nameRGEX.test(dataOne);
//     if (nameResult){
//       console.log(dataOne);
//     }else{

//       named.style.cssText= 'outline:2px solid red';
//     }
   
//     // update it in the ui
//     document.getElementById('card_name').innerHTML = dataOne;


// });



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



  
