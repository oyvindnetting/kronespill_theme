<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package sn
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#content"><?php echo __('Skip to content', 'sn'); ?></a>

		<header id="masthead" class="site-header">
		
			<a class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo('name'); ?></a>
	
			<button class="menu-toggle" aria-controls="main-navigation" aria-expanded="false" aria-haspopup="true"><?php echo __('Meny', 'sn'); ?></button>
			<?php
				wp_nav_menu( array(
					'menu_class'		=> 'menu',
					'theme_location' 	=> 'menu-1',
					'menu_id'        	=> 'primary-menu',
					'container'			=> 'nav',
					'container_class'	=> 'responsive-menu',
				) );
			?>
		
		</header>

	<main>
