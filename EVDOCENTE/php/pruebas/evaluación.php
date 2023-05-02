<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formularios";

$data = json_decode(file_get_contents('evaluacion.js'), true);

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO `evaluacion_docente`(`id`, `pregunta`, `opcion1`, `opcion2`, `opcion3`, `opcion4`, `comentarios`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]') "  );