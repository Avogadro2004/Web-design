<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php wp_head()?>
    <!-- <link rel="stylesheet" href="css/style.css"> -->
    <title>Tree</title>
</head>
<body>
    <!-- header -->
    <header class="header open">
        <div class="header_wrapper">
            <a class="header_logo" href="<?php bloginfo('url'); ?>">
                <img src="<?php bloginfo('template_url'); ?>/assets/img/header_logo.svg" alt="" class="logo_img">
                <p class="logo_name"> <?php bloginfo('name'); ?> </p>

            </a>
            <nav class="header_nav">
                <a href="#costs" class="header_nav-item">Цена</a>
                <a href="#steps" class="header_nav-item">Как мы работаем</a>
                <a href="#line-info" class="header_nav-item">Контакты</a>
            </nav>
            
            <div class="header_call">
                <a href="tel:+79038809185" class="header_call-number call-number">
                    +7 (903) 880-91-85
                </a>
                <a class="header_call-text call-text">
                    Перезвоните мне
                </a>
            </div>
            <button class="header_burger" id="header_burger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>
    <!-- /header -->