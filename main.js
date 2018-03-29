var nb = null;
function nb_aleatoire(min, max)
{
    var min = parseInt(min);
    var max = parseInt(max);
     var nb = min + (max-min+1)*Math.random();
     return Math.floor(nb);
     
}

btn.addEventListener("click", function(event) {
    event.preventDefault();
    var min=document.getElementById("min").value;
    var max=document.getElementById("max").value;
    if(document.getElementById("min").value !="" & document.getElementById("max").value !=""){
       nb = nb_aleatoire(min, max); 
       console.log(nb);
    } 
})
var cpt = 0;    // nb de coups
var msg = document.getElementById("result");
ok.addEventListener("click", function(event){
    var min=document.getElementById("min").value;
    var max=document.getElementById("max").value;
    console.log(nb);
    event.preventDefault();
    var saisie=document.getElementById("userNum").value;
       cpt++;
         //  message a afficher au prochain tour :
          if(saisie> nb){ 
            msg.innerHTML = "C'est moins";
             }
         if (saisie < nb ){ 
             msg.innerHTML= "C'est plus";
          }
          if (saisie == nb){
              msg.innerHTML="Bravo, tu as gagne en " + cpt + " coups !";
          }
          console.log(min,max);
    })
