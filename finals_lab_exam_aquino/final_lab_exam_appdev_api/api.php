<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include "db_config.php";

$method = $_SERVER['REQUEST_METHOD'];

switch($method){

case "GET":

$sql = "SELECT * FROM students ORDER BY id DESC";
$result = $conn->query($sql);

$data = [];

while($row = $result->fetch_assoc()){
    $data[] = $row;
}

echo json_encode($data);

break;

case "POST":

$input = json_decode(file_get_contents("php://input"), true);

$name = $input['name'];
$course = $input['course'];
$year = $input['year_level'];

$sql = "INSERT INTO students(name,course,year_level)
VALUES('$name','$course','$year')";

if($conn->query($sql)){
    echo json_encode(["message"=>"Student Added"]);
}

break;

case "PUT":

$id = $_GET['id'];

$input = json_decode(file_get_contents("php://input"), true);

$name = $input['name'];
$course = $input['course'];
$year = $input['year_level'];

$sql = "UPDATE students
SET
name='$name',
course='$course',
year_level='$year'
WHERE id='$id'";

if($conn->query($sql)){
    echo json_encode(["message"=>"Updated"]);
}

break;

case "DELETE":

$id = $_GET['id'];

$sql = "DELETE FROM students WHERE id='$id'";

if($conn->query($sql)){
    echo json_encode(["message"=>"Deleted"]);
}

break;

}

$conn->close();

?>