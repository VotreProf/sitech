const scriptURL = 'https://script.google.com/macros/s/AKfycbz9X5FHrJMi1FGcDyoijkK1mpJal42V5WQkiZznPIxidXFBbPp_dRb2T0csJOq6fEUh/exec'
          const form = document.forms['google-sheet']
          
          form.addEventListener('submit', e => {
            e.preventDefault()
            let email = document.getElementById('email');
            let number = document.getElementById('number');
            let span = document.getElementsByTagName('span');
            let valid = document.getElementById('valid');
            let invalid = document.getElementById('invalid');
            let valid1 = document.getElementById('valid1');
            let invalid1 = document.getElementById('invalid1');  
            let bouton = document.getElementById('bouton');
            let lien = document.getElementById('lien');
            const regex = /^([\.\_a-zA Z0-9]+)@([a-zA-A]+)\.([a-zA-Z]){2,8}$/;
            const regexo = /^([\.\_a-zA Z0-9]+)@([a-zA-A]+)\.([a-zA-Z]){2,3}$\.[a-zA-Z]{1,3}$/;
            const regexn = /^[0-9]{11}$/;
            if(regexn.test(number.value)){
                document.getElementById('valid').style.display = 'block';
                document.getElementById('invalid').style.display = 'none';
                document.getElementById('bouton').style.display = 'block';

            }else{
                document.getElementById('invalid').style.display = 'block';
                document.getElementById('valid').style.display = 'none';
                document.getElementById('bouton').style.display = 'none';
            }
            
            if (regex.test(email.value) || regexo.test(email.value)){
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact message sent successfully.</div>"))
              .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message not sent.</div>"))
              document.getElementById('invalid1').style.display = 'none';
              document.getElementById('valid1').style.display = 'block';
              document.getElementById('bouton').style.display = 'block';
              location = lien;
              document.getElementById("form-data").style.display = "none";
            }else{
                document.getElementById('invalid1').style.display = 'block';
                document.getElementById('valid1').style.display = 'none';
                
            }
        })
        document.getElementById('bouton').style.display = 'none';
        email.onkeydown = function(){
            const regex = /^([\.\_a-zA Z0-9]+)@([a-zA-A]+)\.([a-zA-Z]){2,8}$/;
            const regexo = /^([\.\_a-zA Z0-9]+)@([a-zA-A]+)\.([a-zA-Z]){2,3}$\.[a-zA-Z]{1,3}$/;
            if(regex.test(email.value) || regexo.test(email.value)){
              
              // span[0].innerText = "Email valid";
              // span[0].style.color = "lime";
              document.getElementById('valid1').style.display = 'block';
              document.getElementById('invalid1').style.display = 'none';
              document.getElementById('bouton').style.display = 'block';
            } else{
              // span[0].innerText = "Email invalid";
              // span[0].style.color = "red";
              document.getElementById('invalid1').style.display = 'block';
              document.getElementById('valid1').style.display = 'none';
              document.getElementById('bouton').style.display = 'none';
            }
          }




          function openForm() {
            document.getElementById("form-data").style.display = "block";
          }
          
          function closeForm() {
            document.getElementById("form-data").style.display = "none";
          }