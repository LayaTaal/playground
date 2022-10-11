<?php
/**
 * Plugin Name: First Block
 */
add_action( 'init', 'register_block' );
function register_block() {
	register_block_type( __DIR__, array(
		'render_callback' => 'my_first_block_render_callback'
	) );
}

function my_first_block_render_callback( $attributes, $content, $block ) {
	// var_dump( $block );
	return sprintf( '<p dataset-posts="%s">%s</p>',
		$attributes[ 'numberOfPosts' ] ?: '',
		'Hello World 2!'
	);
}
