<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package essential-blocks
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function parallax_slider_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'parallax-slider/index.js';
	wp_register_script(
		'parallax-slider-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-editor',
			'wp-block-editor',
		),
		filemtime( $dir . "/" . $index_js)
	);

	/* Common Styles */
	wp_register_style(
		'parallax-slider-block-style',
		ESSENTIAL_BLOCKS_ADMIN_URL . 'blocks/parallax-slider/style.css',
		array(),
		ESSENTIAL_BLOCKS_VERSION
	);

	/* Frontend Script */
	wp_register_script(
		'essential-blocks-parallax-slider-frontend',
		ESSENTIAL_BLOCKS_ADMIN_URL . 'blocks/parallax-slider/frontend/index.js',
		array( "jquery","wp-editor"),
		ESSENTIAL_BLOCKS_VERSION,
		true
	);

	register_block_type( 'essential-blocks/parallax-slider', array(
		'editor_script' 	=> 'parallax-slider-block-editor',
		'editor_style'    	=> 'parallax-slider-block-style',
		'render_callback' => function( $attributes, $content ) {
			if( !is_admin() ) {
				wp_enqueue_script('essential-blocks-parallax-slider-frontend');
				wp_enqueue_style('parallax-slider-block-style');
			}
		  	return $content;
	  	}
	) );
}
add_action( 'init', 'parallax_slider_block_init' );
