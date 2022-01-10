

function searchFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('myinput');
  filter = input.value.toUpperCase();
  ul = document.getElementById('wrapper');
  li = ul.getElementsByTagName('li');

  for(i=0 ; i< li.length; i++){
      a = li[i].getElementsByTagName('a')[0];
      if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
          li[i].style.display = "";
      }

      else{
          li[i].style.display = 'none';
          
      }
  }
  }


  function a(){
    var h = document.getElementById('home');
    var aa = document.getElementById('aa');
   
    if(aa.style.display === "none"){
      h.style.display = "none";
      aa.style.display = "block";
    } else{
      h.style.display = "none";
      aa.style.display = "block";
    }
  }

  const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent--;
  }
});


      // Your web app's Firebase configuration

      var countV;

      function like__btn() {
        var countV = document.getElementById('count');
          firebase.database().ref('Abonnez ftechplus').set({
              NUMBER: countV + 1,
          });
       }
