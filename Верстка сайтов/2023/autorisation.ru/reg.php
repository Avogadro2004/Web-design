<?php
session_start();
include("db_connect.php");
$login = $_POST['login'];
$pass = $_POST['pass'];
$md5_pass = md5($pass);
$query = mysqli_query($db, "SELECT * FROM `users` WHERE `login`='{$login}' ");
if (mysqli_num_rows($query) == 0){
    mysqli_query($db, "INSERT INTO `users`(`login`, `pass`) VALUES('{$login}', '{$md5_pass}')"); 
    header("Location: Restaurant/index.html");
}else{
   echo("Ошибка: Данный логин занят другим пользователем");
}
?>