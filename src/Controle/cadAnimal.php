<?php 
	  include_once("../Persistence/Conection.php");
	  include_once("../Persistence/ClienteDAO.php");
	
	$nome= $_POST['inputNome'];
	$especie= $_POST['inputEspecie'];
	$sexo= $_POST['inputSexo'];
	$descricao= $_POST['inputDescricao'];
	
	$con = new Conection("localhost","root","aluno","secretshop");
	$con->conectar();
	
	cadastrar($nome,$especie,$sexo,$descricao,$con->getLink());
	
	
	
	function cadastrar($nomev,$especiev,$sexov,$descricaov,$link){
	
		$insert ="INSERT INTO animal(Nome,Sexo,Especie,Descricao)";
		$values = "VALUES ('".$nomev."','".$especiev."','".$sexov."','".$descricaov."');";
		$query = $insert.$values;
	
		if(!mysqli_query($link,$query)){
			die ("nao foi possivel salvar".mysqli_error($link));
		}
		echo "salvo com sucesso";
	}
?>
