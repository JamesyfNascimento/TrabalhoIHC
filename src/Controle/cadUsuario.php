<?php 
	  include_once("../Persistence/Conection.php");
	  include_once("../Persistence/ClienteDAO.php");
	
	$nome= $_POST['inputNome'];
	$email= $_POST['inputEmail'];
	$senha= $_POST['inputPassword'];
	
	
	$con = new Conection("localhost","root","aluno","secretshop");
	$con->conectar();
	
	cadastrar($nome,$email,$senha,$con->getLink());
	
	
	
	function cadastrar($nomev,$emailv,$senhav,$link){
	
		$insert ="INSERT INTO Usuario(Nome,Email,Senha)";
		$values = "VALUES ('".$nomev."','".$emailv."','".$senhav."');";
		$query = $insert.$values;
	
		if(!mysqli_query($link,$query)){
			die ("nao foi possivel salvar".mysqli_error($link));
		}
		echo "salvo com sucesso";
	}
?>
