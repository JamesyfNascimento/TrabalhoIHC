tdUsuario = "";
ListaDeAnimais = "";
$(function(){
	//inicialisa lista de usuario
	tdUsuario = localStorage.getItem("tdUsuario");// Recupera os usuarios armazenados
    tdUsuario = JSON.parse(tdUsuario); // Converte string para objeto
    if(tdUsuario == null) // Caso não haja conteúdo, iniciamos um vetor vazio
			tdUsuario = [];

	ListaDeAnimais = localStorage.getItem("ListaDeAnimais");// Recupera os animais armazenados
	ListaDeAnimais = JSON.parse(ListaDeAnimais); // Converte string para objeto
	if(ListaDeAnimais == null) // Caso não haja conteúdo, iniciamos um vetor vazio
		ListaDeAnimais = [];




	registrosAnimaisSimulacao();
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
			$(".alert-danger").css("display","none");
			$(".alert-success").css("display","block");
			setTimeout(function(){ 
				$(".alert").css("display","none");
				$(".alert-success").css("display","none");
			}, 7000);
			window.location.href = '../Views/home.html';	
		}
	  });

	  if(!logado){
			$(".alert").css("display","block");
			$(".alert-success").css("display","none");
			$(".alert-danger").css("display","block");
			setTimeout(function(){ 
				$(".alert").css("display","none");
				$(".alert-danger").css("display","none");
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

function registrosAnimaisSimulacao(){
	var animais = [
		{
			Nome   : 'Aragorn',
			Especie  : 'Canina',
			Sexo : 'Macho',
			Descricao : 'Aragorn II, filho de Arathorn é uma personagem fictícia criada pelo professor e filólogo britânico J. R. R. Tolkien na sua obra O Senhor dos Anéis, onde é um dos protagonistas. Aragorn era um Guardião do Norte, introduzido pela primeira vez com o nome Strider em Bree, como os hobbits continuaram a chamá-lo ao longo de O Senhor dos Anéis. Acabou sendo descoberto como herdeiro de Isildur e pretendente legítimo aos tronos de Arnor e Gondor. Também era um confidente de Gandalf e parte integrante da missão para destruir o Um Anel e derrotar o Senhor das Trevas Sauron.'
		},
		{
			Nome   : 'Gandalf',
			Especie  : 'Canina',
			Sexo : 'Macho',
			Descricao : 'Gandalf, por vezes Gandalf, o Cinzento ou Gandalf, o Branco é um personagem fictício das obras do autor, professor e filólogo britânico J. R. R. Tolkien. Gandalf é um Mago Istari, pertencente à raça dos Maiar, espírito angelical do mundo tolkienano, e costumava andar com Nienna com quem aprendeu a paciência e a compaixão (Silmarillion), mas diz-se que era conselheiro de Irmo Lórien.'
		},
		{
			Nome   : 'Elros',
			Especie  : 'Canina',
			Sexo : 'Macho',
			Descricao : 'Númenor é um lugar fictício das obras de J. R. R. Tolkien. Foi uma grande ilha ou continente situada nos Grandes Mares a oeste da Terra Média, o principal cenário dos escritos do autor, e era conhecida por ser o maior reino dos Homens. No entanto, a interrupção dos serviços de Eru Ilúvatar e rebelião contra os Valar de seus habitantes levaram à queda da ilha e morte da maioria de sua população.'
		},
		{
			Nome   : 'Gollum',
			Especie  : 'Canina',
			Sexo : 'Macho',
			Descricao : 'Gollum é um personagem fictício das obras do filólogo e professor britânico J. R. R. Tolkien. Ele foi introduzido na obra de fantasia O Hobbit de 1937, e se tornou um importante personagem na sequência O Senhor dos Anéis.'
		}
	];

	localStorage.setItem("ListaDeAnimais", JSON.stringify(animais));
}
