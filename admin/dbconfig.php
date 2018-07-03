<?php
//The code below demonstrates a PDO connection to a database and a try catch block that will display errors about the connection if an exception is thrown. You will need to add your own database name, user and password for this PDO to work on your own project.


    $dsn = 'mysql:host=127.0.0.1;dbname=bigwinadmin';
    $username = 'root';
    $password = '';

    try {
        $db = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        $error_message = $e->getMessage();
     
        exit();
    }
?>