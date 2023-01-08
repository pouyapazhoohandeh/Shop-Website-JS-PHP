<?php
function Connect(){
  $SererName="localhost";
  $Username = "root";
  $password = "";
  $DatabaseName="php";
  try {
      $conn = new PDO("mysql:host=$SererName;dbname=$DatabaseName", $Username, $password);
      // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $conn->exec("SET NAMES utf8");
      return $conn;
    } catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
      return null;
    }
  }
?>