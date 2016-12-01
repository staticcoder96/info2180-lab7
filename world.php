<?php

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';
$coun = $_GET['country'];

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password); //connect to host

$stmt = $conn->query("SELECT * FROM countries");
$want = $conn->query("SELECT * FROM countries WHERE name LIKE '%$coun%' ");//from your connection get information (query)


$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$show = $want->fetchAll(PDO::FETCH_ASSOC);//gets information

echo '<ul>';
foreach ($results as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
echo '</ul>';

//Shows only jamaica
/*echo '<ul>';
foreach ($show as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
echo '</ul>';*/


?>