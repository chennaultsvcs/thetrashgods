<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'thetwhna_wp252' );

/** MySQL database username */
define( 'DB_USER', 'thetwhna_wp252' );

/** MySQL database password */
define( 'DB_PASSWORD', 'S@!dp18Y]Ji.7F' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'j1wtoherujwc10gumwhhajowwsy9k8cnvts8ab3webgfqlpnum5zujevlntlnieh' );
define( 'SECURE_AUTH_KEY',  'sq1krj5fq5sxuiidgyuwesfweiqeevabgitak30rpgngkxhblemhoesv9pcc41ud' );
define( 'LOGGED_IN_KEY',    '1usrk3zldf2gd5tpsvstfyp76fiz7s1gfwshdaz66eflb2gbe8cu8jcl7jdjnf4s' );
define( 'NONCE_KEY',        'r296hmuq0nxmdvun4xedrp4cvx6fqqy5k5nlrusoeaj1xtolhxgktfvqcau0jzls' );
define( 'AUTH_SALT',        '9b1hkuwgsujzsk7sz8jl6vrosgg3gn2bog0swworveuxwummdl8ykgsi92fsloou' );
define( 'SECURE_AUTH_SALT', 'm54jx0mzkn28xkvwrkfbnch4cbn1hb9gupo2klziah1zlc1temlnrmcpb8a6eykf' );
define( 'LOGGED_IN_SALT',   'hfptokz2yohj7sbuzus53husm3ecigo0phf9pqiiisck7udd6tdbrjirazyewiig' );
define( 'NONCE_SALT',       'kdaxdxxicrx6pxey83p0wubq4onrht9bexutfilowi2y1zdg8wryynvjb3vq2q49' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wppx_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
