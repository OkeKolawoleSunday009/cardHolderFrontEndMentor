

 // select the form when submited button is clicked
var form = document.querySelector("#submit");

  // select the input0 button each when seleccted;
  var named = document.querySelector("#name");
  var number = document.querySelector("#number");
  var month = document.querySelector("#month");
  var years = document.querySelector("#year");
  var cvc = document.querySelector("#cvc");


  // updatind the value when the input data is filed
   var cardName =  document.getElementById('card_name');
   var cardNumber = document.getElementById("card_number");
   var cardMonth = document.getElementById("card_month");
   var cardYear = document.getElementById("card_year");
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
 7
// changeDisplay(named, cardName);
// changeDisplay(number, cardNumber);
changeDisplay(month, cardMonth);
changeDisplay(years, cardYear);
changeDisplay(cvc, cardCvc);

function changeDisplay(para1, para2){
  para1.addEventListener("keyup", function(e){
    var dataValue = e.target.value;
    var checkRGEX = /^[0-9]+$/;
    var checkResult = checkRGEX.test(dataValue);
    if(checkResult && dataValue != " " ){
      
     this.style.cssText = 'initial';
    }else{
      this.style.cssText= 'outline: 2px solid red';
    }
    para2.innerHTML = dataValue;
    


                                                                                                                    
  });

};

named.addEventListener("keyup", function(e){
  var dataValue = e.target.value;
//     console.log(dataOne);
   var nameRGEX = /^[a-zA-Z ]+$/;
   var nameResult = nameRGEX.test(dataValue);
   if (nameResult || nameResult == 25){
    named.style.cssText= 'initial';
    
  }else{

    named.style.cssText= 'outline:2px solid red';
  }

// update it in the ui   /\B(?<!\.\d*)(?=(\d{3})+.(?!\d))/g, ' '
cardName.innerHTML = dataValue.toUpperCase(); ;



});

number.addEventListener("keyup", function(e){
      var dataValueNumber = e.target.value;
//     console.log(dataOne);
       var numberRGEX = /^[0-9]/gi;
       var numberResult = numberRGEX.test(dataValueNumber);
       if (numberResult ){
      
          console.log(numberResult);
          this.style.cssText= 'initial';          
          var newValue = dataValueNumber.replace( /(\d{4})(\d{4})(\d{4})(\d{4})/,  "$1 $2 $3 $4" );

      }else{
        this.style.cssText= 'outline:2px solid red';
      }
   
    // update it in the ui
    cardNumber.innerHTML = newValue; 


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



  
