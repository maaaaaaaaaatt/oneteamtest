//Replace Text function		
 $(function () {
     count = 0;
     wordsArray = ["CREATES OPPORTUNITIES", "MAKES MOMENTS HAPPEN", "CHANGES THE GAME"];
     setInterval(function () {
         count++;
         $("#word").fadeOut(1250, function () {
             $(this).text(wordsArray[count % wordsArray.length]).fadeIn(1000);
         });
     }, 3000);
 });
 //End Replace Text function


 //Form Validation
   const constraints = {
       name: {
           presence: { allowEmpty: false }
       },
       email: {
           presence: { allowEmpty: false },
           email: true
       },
       message: {
           presence: { allowEmpty: false }
       }
   };

   const form = document.getElementById('contact-form');

   form.addEventListener('submit', function (event) {
     const formValues = {
         name: form.elements.name.value,
         email: form.elements.email.value,
         message: form.elements.message.value
     };

     const errors = validate(formValues, constraints);

     if (errors) {
       event.preventDefault();
       const errorMessage = Object
           .values(errors)
           .map(function (fieldValues) { return fieldValues.join(', ')})
           .join("\n");

       alert(errorMessage);
     }
   }, false);
 //End Form Validation