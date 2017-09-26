<?php
//Busca Horario Serviço
$horarioInicial = explode(':', '8:20');
$horarioFinal = explode(':', '12:00');

//Transforma horario em minutos
$horarioEmMinutosMin = ($horarioFinal[0] - $horarioInicial[0])*60;
$horarioEmMinutosMin += ($horarioFinal[1] - $horarioInicial[1]);
//Busca duração do maior serviço
$duracao = '30';
//Descobre quantos horarios vai ter
$quantidade = floor($horarioEmMinutosMin / $duracao);
//Busca horarios marcados
$horariosMarcados = [
		'08:50', '10:50'

];
for ($i = 0; $i < $quantidade; $i++) {
		$horaAdicional = floor(($duracao * $i) / 60);
		$minutosAdicionais = ($duracao * $i) % 60;
		$horario = date('H:i', mktime(
					$horarioInicial[0] + $horaAdicional,
					$horarioInicial[1] + $minutosAdicionais,
					0,
					date('m'),
					date('d'),
					date('Y')
				));

		$horario2 = date('H:i', mktime(
					$horarioInicial[0] + $horaAdicional,
					$horarioInicial[1] + $minutosAdicionais + $duracao,
					0,
					date('m'),
					date('d'),
					date('Y')
				));

		if (in_array($horario, $horariosMarcados))
				echo "<strike>Inicio " . $horario . "| Fim" . $horario2 . "<br/></strike>";
		else
			echo "Inicio " . $horario . "| Fim" . $horario2 . "<br/>";
}