tdUsuario = "";
$(function(){
	tdUsuario = localStorage.getItem("tdUsuario");// Recupera os dados armazenados
    tdUsuario = JSON.parse(tdUsuario); // Converte string para objeto
    if(tdUsuario == null) // Caso não haja conteúdo, iniciamos um vetor vazio
		tdUsuario = [];
});

// formulario de login
$("#formLogin").on("submit", function (e){
	e.preventDefault();
	var login = {
		Email  : $("#inputEmail").val(),
		Senha : $("#inputPassword").val()
	};
    var logado = false;
	$.each(tdUsuario, function(index, value) {
		var loginBD = JSON.parse(value);
		if(loginBD.Email == login.Email && loginBD.Senha == login.Senha){
			logado = true;
			$(".alert").css("display","block");
			setTimeout(function(){ 
				$(".alert").css("display","none");
			}, 5000);
			window.location.href = '../Views/home.html';	
		}
	  });

	  if(!logado){
		$(".alert-danger").css("display","block");
		setTimeout(function(){ 
			$(".alert").css("display","none");
		}, 5000);
	  }
});

// formulario para cadastrar um usuario
$("#formCadastrar").on("submit", function (e){
	e.preventDefault();
	console.log("Cadastrando");
	var usuario = JSON.stringify({
		Nome   : $("#inputNome").val(),
		Email  : $("#inputEmail").val(),
		Senha : $("#inputPassword").val()
	});
	AdicionarLogin(usuario);
});

// função auxiliar para adicionar um registro no cookie html5
function AdicionarLogin(usuario){
	tdUsuario.push(usuario);
	localStorage.setItem("tdUsuario", JSON.stringify(tdUsuario));
	$(".alert").css("display","block");
	setTimeout(function(){ 
		$(".alert").css("display","none");
	}, 5000);	
}
