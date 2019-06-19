ListaDeAnimais = "";
$(function(){
    
    listagemAnimal();
});

/*window.onload = function() {
	var url = window.location.href;
	console.log("tatata");
  if(url.searchParams.get("") == "sim"){
	  console.log("teste");
	  $("#logInOut").html("Sair");
  }
};*/

function listagemAnimal(){
    //inicialisa lista de usuario
    ListaDeAnimais = localStorage.getItem("ListaDeAnimais");// Recupera os animais armazenado
    ListaDeAnimais = JSON.parse(ListaDeAnimais);
    if(ListaDeAnimais == null) // Caso não haja conteúdo, iniciamos um vetor vazio
            ListaDeAnimais = [];
    var listaAnimaisHtml = "<div class='row'>";
    $.each(ListaDeAnimais, function(index, value) {
		listaAnimaisHtml += "<div class='col-md-4'>" +
                            "<div class='card mb-4 box-shadow'>"+
                                "<img class='card-img-top' src='../Assets/img/dog.jpg' alt='Card image cap'>"+
                                "<div class='card-body'>"+
                                    "<h1>" + value.Nome + "</h1>"+
                                    "<p class='card-text'>" + value.Descricao.substr(0, 55) + "...</p>"+
                                    "<div class='d-flex justify-content-between align-items-center'>"+
                                        "<div class='btn-group'>"+
                                                "<button type='button' data-id='"+ index +"' id='btnPerfilAnimal' class='btn btn-sm btn-outline-secondary'>Ver Detalhes</button>"+
                                                "<button type='button' class='btn btn-sm btn-outline-danger' data-toggle='modal' data-target='#exampleModalLong'>Agendar Visíta</button>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>"
      });
      listaAnimaisHtml += "</div>"
      $(".containerListagemAnimais").html(listaAnimaisHtml);
}

$(document).on("click", "#btnPerfilAnimal", function(){
   var id = $(this).attr('data-id');
   var animal =  getAnimalPorID(id);
   perfilAnimal(animal);
});

function getAnimalPorID(id){
    var animal = "";
    $.each(ListaDeAnimais, function(index, value) {
		if(index == id){
            animal = value;
        }
    });
    return animal;
}

function perfilAnimal(animal){
    var htmlPerfilAnimal = "<div class='row'>" +
                                "<div class='col-12'>" +
                                    "<div class='card mb-4 box-shadow'>"+
                                        "<img class='card-img-top' src='../Assets/img/dog.jpg' alt='Card image cap'>"+
                                        "<div class='card-body'>"+
                                            "<h1>" + animal.Nome + "</h1>"+
                                            "<p class='card-text'>Especie: " + animal.Especie + "</p>"+
                                            "<p class='card-text'>Sexo: " + animal.Sexo + "</p>"+
                                            "<p class='card-text'>Descrição: " + animal.Descricao + "</p>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"+
                            "<a href='../Views/home.html' class='btn btn-sm btn-outline-secondary'>Voltar para listagem</a>";
    $(".containerListagemAnimais").html(htmlPerfilAnimal);
    
}

$(document).on("click", "#btnAddAnimal", function(){
    var formCadAnimal = "<form id='form-cad-animal' class='mt-lg mb-lg' method='Post'>" +
    "<div class='form-group row'>" +
        "<label for='nome' class='col-3 col-form-label col-form-label'>Nome:</label>"+
        "<div class='col-9'>"+
            "<input class='form-control' type='text' id='nome' name='nome' placeholder='Nome' required/>"+
        "</div>"+
    "</div>"+
    "<div class='form-group row'>" +
        "<label for='especie' class='col-3 col-form-label col-form-label'>Especie:</label>"+
        "<div class='col-9'>"+
            "<input class='form-control' type='text' id='especie' name='especie' placeholder='Especie' required/>"+
        "</div>"+
    "</div>"+
    "<div class='form-group row'>" +
        "<label for='sexo' class='col-3 col-form-label col-form-label'>Sexo:</label>"+
        "<div class='col-9'>"+
            "<input class='form-control' type='text' id='sexo' name='sexo' placeholder='Sexo' required/>"+
        "</div>"+
    "</div>"+
    "<div class='form-group row'>" +
        "<label for='descricao' class='col-3 col-form-label col-form-label'>Descrição:</label>"+
        "<div class='col-9'>"+
            "<input class='form-control' type='text' id='descricao' name='descricao' placeholder='Descrição' required/>"+
        "</div>"+
    "</div>"+
    "<button class='btn btn-dark float-right mt-lg' type='submit'>Adicionar</button>"+
    "</form>";
    $("#collapseMenu").collapse("hide");
    $(".containerListagemAnimais").html(formCadAnimal);

 });

 $(document).on("submit", "#form-cad-animal", function(e){
     e.preventDefault();
    var animal = [{
        Nome   : $("#nome").val(),
        Especie  : $("#nome").val(),
        Sexo : $("#especie").val(),
        Descricao : $("#descricao").val()
    }];

    //inicialisa lista de usuario
    ListaDeAnimais = localStorage.getItem("ListaDeAnimais");// Recupera os animais armazenado
    ListaDeAnimais = JSON.parse(ListaDeAnimais);
    ListaDeAnimais = ListaDeAnimais.concat(animal);

    localStorage.setItem("ListaDeAnimais", JSON.stringify(ListaDeAnimais));
    
    $(".alert").css("display","block");
    setTimeout(function(){ 
        $(".alert").css("display","none");
    }, 3000);

    listagemAnimal();


 });
