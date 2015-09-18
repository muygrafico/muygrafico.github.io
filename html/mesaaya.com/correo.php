<?php 
			$nombre = $_POST['nombre'];
			$correo  = $_POST['correo'];
			$mensaje   = $_POST['mensaje'];
			
					 // envio el correo
				    //$email= Correo al que se envia
				    $email="contacto@mesaaya.com";
					$header="From:  paginaweb@mesaaya.com";
					$fecha= date("d/m/Y h:i");
					$asunto="mensaje desde página";
					$msg="
				
			Nombre: $nombre
					
			Correo: $correo
					
			mensase del contacto:
					
			$mensaje
					
			fecha de envio:$fecha";
			mail($email,$asunto,$msg,$header);
			echo($email);
		
		?>

