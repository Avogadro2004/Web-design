<?php
session_start();
include("db_connect.php");
$login = $_POST['login'];
$pass = $_POST['pass'];
$md5_pass = md5($pass);
$query = mysqli_query($db, "SELECT * FROM `users` WHERE `login`='{$login}' AND `pass`='{$md5_pass}'");
if (mysqli_num_rows($query) == 1) {
    header("Location: Restaurant/index.html");
} else {
    echo("Ошибка: Данный логин или пароль неправильны.");
}
?>