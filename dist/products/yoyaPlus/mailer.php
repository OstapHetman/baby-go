<?php 
$name = stripslashes(htmlspecialchars($_POST['name']));
$phone = stripslashes(htmlspecialchars($_POST['phone']));
$comment = stripslashes(htmlspecialchars($_POST['comment']));
$product = stripslashes(htmlspecialchars($_POST['product-name']));
$select = stripslashes(htmlspecialchars($_POST['select-input']));


if(empty($name) || empty($phone)){
echo '<h1 style="color:red;">Пожалуйста заполните все поля</h1>';
echo '<meta http-equiv="refresh" content="2; url=http://'.$_SERVER['SERVER_NAME'].'">';
}
else{
    $subject = 'Заказать товар - Baby Go - Детские коляски';
    $addressat = "babygo1@gmail.com";
    $success_url = 'thank-you.php';
    $message = "
    Имя: {$name}\nКонтактный телефон: {$phone}\nВыбранный товар: {$product}\nКомментарий:{$comment}\nВыберите раму: {$select}";
    $verify = mail($addressat,$subject,$message,"Content-type:text/plain;charset=utf-8\r\n");
    if ($verify == 'true'){
        header('Location: '.$success_url);
        exit;
    } else 
        {
        echo '<h1 style="color:red;">EROR</h1>';
        }
}
?>
