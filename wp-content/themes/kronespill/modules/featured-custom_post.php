<?php
/**
 * Template part for displaying a featured post
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package krone
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header>
		<h2><a href="<?php the_permalink();?>"><?php the_title(); ?></a></h2>
		<?php
			krone_posted_on();
			krone_posted_by();
		?>	
	</header>

	<div>
		<?php the_excerpt(); ?>
	</div>

	<footer>
		<?php krone_entry_footer(); ?>
	</footer>	
</article>

