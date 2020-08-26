<?php
/**
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package krone
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="comments-area">

	<?php if ( have_comments() ) : ?>
		<h2 class="comments-title">
			<?php $krone_comment_count = get_comments_number();
				if ( '1' === $krone_comment_count ) {
					echo __('Én kommentar på', 'krone'). ' ' .get_the_title();
				} else {
					echo $krone_comment_count. ' ' .__('kommentarer', 'krone'); 
				} 
			?>
		</h2>

		<?php the_comments_navigation(); ?>

		<ol class="comment-list">
			<?php
			wp_list_comments( array(
				'style'      => 'ol',
				'short_ping' => true,
			) );
			?>
		</ol>

		<?php
		the_comments_navigation();

		// If comments are closed and there are comments, let's leave a little note, shall we?
		if ( ! comments_open() ) : ?>
			<p class="no-comments"><?php echo __( 'Kommentarfeltet er stengt.', 'krone' ); ?></p>
		<?php endif;

	endif; // Check for have_comments().

	comment_form(); ?>

</div><!-- #comments -->
