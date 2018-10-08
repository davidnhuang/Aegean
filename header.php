<html <?php language_attributes(); ?>>
  <head>
      <meta charset="<?php bloginfo('charset'); ?>">
      <meta name="viewport" content="width=device-width">
      <title><?php bloginfo('name'); ?></title>
      <?php wp_head(); ?>
      <link
        rel="stylesheet"
        href="<?php bloginfo('stylesheet_url'); echo '?' . filemtime( get_stylesheet_directory() . '/style.css'); ?>"
        type="text/css"
        media="screen, projection"
      />
  </head>
  <body>
