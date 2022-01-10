var codeV, lnameV, pnameV, emailV, numberV, dateV, sexeV, refV;
function send() {
     nameV = document.getElementById('name').value;
     pnameV = document.getElementById('pname').value;
     emailV = document.getElementById('email').value;
     numberV = document.getElementById('number').value;
     dateV = document.getElementById('date').value;
     refV = document.getElementById('ref').value;
     sexeV = document.getElementById('sexe').value;
     nivV = document.getElementById('niveau').value;
     matV = document.getElementById('mat').value;
     if(nameV == ""){
      document.getElementById('msg').innerHTML = 'Entrer votre nom';
    }else if (pnameV == ""){
      document.getElementById('msg').innerHTML = 'Entrer votre prénom';
    }else if (emailV == ""){
      document.getElementById('msg').innerHTML = 'Entrer votre Email';
    }else if (numberV == ""){
      document.getElementById('msg').innerHTML = 'Entrer votre numero';
    }else if (dateV == ""){
      document.getElementById('msg').innerHTML = 'La date de votre inscription';
    }else if (refV == ""){
      document.getElementById('msg').innerHTML = 'Si vous n"avez pas de reference enter <Persone>';
    }else if (sexeV == ""){
      document.getElementById('msg').innerHTML = 'Selectionnner votre sexe';
    }else if (nivV == ""){
      document.getElementById('msg').innerHTML = 'Votre niveau en informatique';
    }else if (matV == ""){
      document.getElementById('msg').innerHTML = 'Que materiel que vous utiliser pour travailler?';
    }else{
    firebase.database().ref('Formation html&css/' + nameV).set({
      ANAME: nameV + pnameV,
      Email: emailV,
      NUMBER: numberV,
      DATE: dateV,
      REFERENCE: refV,
      SEXE: sexeV,
      NIVEAU: nivV,
      MATERIELS: matV,
  });
  document.getElementById('message').style.display = 'block';
  document.getElementById('signup').style.display = 'none';
  document.getElementById('name').value = '';
  document.getElementById('pname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('number').value = '';
  document.getElementById('ref').value = '';
}
  }