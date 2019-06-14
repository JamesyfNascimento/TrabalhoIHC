$(function(){
	//inicialisa lista de usuario
    tdAnimais = localStorage.getItem("tdAnimais");// Recupera os animais armazenado
    var listaAnimaisHtml = "<div class='row'>";

    $.each(JSON.parse(tdAnimais), function(index, value) {
		listaAnimaisHtml += "<div class='col-md-4'>" +
                            "<div class='card mb-4 box-shadow'>"+
                                "<img class='card-img-top' src='../Assets/img/dog.jpg' alt='Card image cap'>"+
                                "<div class='card-body'>"+
                                    "<h1>" + value.Nome + "</h1>"+
                                    "<p class='card-text'>" + value.Descricao.substr(0, 55) + "...</p>"+
                                    "<div class='d-flex justify-content-between align-items-center'>"+
                                        "<div class='btn-group'>"+
                                                "<a href='../Animal/index.php?id=" +index + "' class='btn btn-sm btn-outline-secondary'>Ver Detalhes</a>"+
                                                "<button type='button' class='btn btn-sm btn-outline-danger' data-toggle='modal' data-target='#exampleModalLong'>Agendar Visíta</button>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>"
      });
      listaAnimaisHtml += "</div>"
      $(".containerListagemAnimais").html(listaAnimaisHtml);
      


    
});