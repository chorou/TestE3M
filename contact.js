function contact_formulaire()
{
 if(document.formulaire.nom.value == "")  {
   alert("Veuillez entrer votre nom!");
   document.formulaire.nom.focus();
   return false;
  }
 if(document.formulaire.tele.value == "") {
   alert("Veuillez entrer votre numéro de téléphone!");
   document.formulaire.tele.focus();
   return false;
  }
 if(document.formulaire.email.value == "") {
   alert("Veuillez mettre l'@!");
   document.formulair.email.focus();
   return false;
  }
 if(document.formulaire.email.value.indexOf('@') == -1) {
   alert("Veuillez mettre l'@!");
   document.email.focus();
   return false;
  }
}


$envoyer = $("#envoyer");
$err = $("#err");

$envoyer.click(function(){
  $nom = $("nom").val();
  $tele = $("tele").val();
  $email = $("email").val();


  $.ajax({
    url : "https://reqres.in/page=?",
    type : "GET" ,
    dataType : "json",
    success: function(result, statut){
      if(result == -1){
        $err.css("visibility", "visible");
      }else{
        window.location.replace("pageAcceuil.html");
      }
    } ,
    error: function(request, status, error) {
      console.log(error);
    }
  });
});
