<?php /* Template Name: GamePage */ ?>
<?php
/**
 * The template for displaying the game page
 *

 *
 * @package sn
 */

get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<header>
			<h1><?php the_title(); ?></h1>
			<div id="content"></div>
		</header>
	
		<?php the_content(); ?>	
	</article>

	<?php // If comments are open or we have at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) :
		comments_template();
	endif;

endwhile; // End of the loop.
?>	

<?php
get_footer();
