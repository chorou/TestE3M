function verif_formulaire()
{
 if(document.formulaire.num.value == "")  {
   alert("Veuillez entrer votre numéro!");
   document.formulaire.num.focus();
   return false;
  }
 if(document.formulaire.pwd.value == "") {
   alert("Veuillez entrer votre mot de passe!");
   document.formulaire.pwd.focus();
   return false;
  }
 
 if(document.formulaire.adresse.value == "") {
   alert("Veuillez entrer votre adresse!");
   document.formulaire.adresse.focus();
   return false;
  }

}

$envoyer = $("#envoyer");
$err = $("#err");

$envoyer.click(function(){
	$num = $("num").val();
	$pwd = $("pwd").val();
	$adresse = $("adresse").val();


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

function ini_Autocompletion(id) 
{
  var adresse = document.getElementById(id);
  if (adresse) 
  {
    var autocompletion = new google.maps.places.Autocomplete(adresse, { types: ['geocode'] });
    google.maps.event.addListener(autocompletion, 'place_changed', ini_Adresse);
  }
}

function ini_Adresse() 
{
  var place = this.getPlace();
   console.log(place);
  for (var i in place.address_components) 
  {
    var component = place.address_components[i];
    for (var j in component.types) 
	{
      var type_adresse = document.getElementById(component.types[j]);
      if (type_adresse) 
	  {
        type_adresse.value = component.long_name;
      }
    }
  }
}

google.maps.event.addDomListener(window, 'load', function() 
{
  ini_Autocompletion('id_Input_Adresse');
});