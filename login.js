
	 function validate() {
            var login = document.getElementById("login").value;
            var pwd = document.getElementById("pwd").value;
            if (login == null || login == "") {
                alert("Veuillez entrer votre login.");
                return false;
            };
            if (pwd == null || pwd == "") {
                alert("Veuillez entrer votre mot de passe.");
                return false;
            };
            alert('Login successful');            
        } ;
$connexion = $("#connexion");
$err = $("#err");

$connexion.click(function(){
	$login = $("login").val();
	$pwd = $("pwd").val();

	$.ajax({
		url : "https://reqres.in/page=?&login=chorouq&pwd=123",
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
