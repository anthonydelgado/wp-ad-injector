<?php
/**
 * @package Ads_Ad_Injector
 * @version 1
 */
/*
Plugin Name: Ad Injector Plug-in for WordPress
Plugin URI: http://anthonydelgado.me/
Description: This plug-in ads advertisements to your wordpress blog via widgets, below every post and / or on every page.
Author: Anthony Delgado
Version: 1.0
Author URI: http://anthonydelgado.me/
*/


add_action('wp_head', 'header_ads_js');


function header_ads_js() {
	/** This is the JS to be added to the header */
	$the_header_ads_js = '<script type="text/javascript" src="' . plugins_url() . 'showcase.js"></script>
	<!-- wp-ad-injector Plug-in by Anthony Delgado -->';
	echo $the_header_ads_js;

}




/** Step 2 (from text above). */
add_action( 'admin_menu', 'gogo_ad_Injector_plugin_menu' );

/** Step 1. */
function gogo_ad_Injector_plugin_menu() {
	add_options_page( 'FA Ads Options', 'Ad Injector Ads', 'manage_options', 'my-CraniumFitteds-ads-optionspage', 'gogo_ad_Injector_options' );
}

/** Step 3. */
function gogo_ad_Injector_options() {
	if ( !current_user_can( 'manage_options' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	}
	echo '<div class="wrap">
<div id="icon-themes" class="icon32"><br /></div><h2>Ad Injector Banner Ad Settings</h2>

<div class="fileedit-sub">
<div class="alignleft">

<p>
Generate Dynamic Rotating Banner Ads so that we can display various different ads through-out the network. 
<br /><br />You can add the ads via an <a href="widgets.php">Official Wordpress Widget</a> or ... <br />
Just add one of the following where you want your ad to show up : <br /></p>  
<strong> 
<div>';
echo '<br /><div>&lt;script type="text/javascript"&gt;</div>'; 
echo "<div>show_banners('160x600');</div>
<div>&lt;/script&gt;</div>";
echo '<br /><div>&lt;script type="text/javascript"&gt;</div>'; 
echo "<div>show_banners('300x250');</div>
<div>&lt;/script&gt;</div>";
echo '<br /><div>&lt;script type="text/javascript"&gt;</div>'; 
echo "<div>show_banners('728x90');</div>
<div>&lt;/script&gt;</div>";
echo '<br /><div>&lt;script type="text/javascript"&gt;</div>'; 
echo "<div>show_banners('468x60');</div>
<div>&lt;/script&gt;</div>
&nbsp;
</strong>
</div>
</div>
</div>
<div></div>";
}






/**
 * Adds CraniumFitteds_Ad_Widget widget.
 */
class CraniumFitteds_Ad_Widget extends WP_Widget {

	/**
	 * Register widget with WordPress.
	 */
	function __construct() {
		parent::__construct(
			'CraniumFitteds_Ad_Widget', // Base ID
			'300x250 Ad Injector Ad', // Name
			array( 'description' => __( 'Ad Injector 300x250 Ad Widget', 'Ad_Injector_domain' ), ) // Args
		);
	}

	/**
	 * Front-end display of widget.
	 *
	 * @see WP_Widget::widget()
	 *
	 * @param array $args     Widget arguments.
	 * @param array $instance Saved values from database.
	 */
	public function widget( $args, $instance ) {
		$title = apply_filters( 'widget_title', $instance['title'] );

		echo $args['before_widget'];
		if ( ! empty( $title ) )
			echo $args['before_title'] . $title . $args['after_title'];
		echo __( '<script type="text/javascript">
show_banners("300x250");
</script>', 'text_domain' ); 
		echo $args['after_widget'];
	}

	/**
	 * Back-end widget form.
	 *
	 * @see WP_Widget::form()
	 *
	 * @param array $instance Previously saved values from database.
	 */
	public function form( $instance ) {
		if ( isset( $instance[ 'title' ] ) ) {
			$title = $instance[ 'title' ];
		}
		else {
			$title = __( 'Sponsored', 'text_domain' );
		}
		?>
		<p>
		<label for="<?php echo $this->get_field_name( 'title' ); ?>"><?php _e( 'Title:' ); ?></label> 
		<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
		</p>
		<?php 
	}

	/**
	 * Sanitize widget form values as they are saved.
	 *
	 * @see WP_Widget::update()
	 *
	 * @param array $new_instance Values just sent to be saved.
	 * @param array $old_instance Previously saved values from database.
	 *
	 * @return array Updated safe values to be saved.
	 */
	public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';

		return $instance;
	}

} // class CraniumFitteds_Ad_Widget


// register CraniumFitteds_Ad_Widget widget
function register_CraniumFitteds_Ad_Widget() {
    register_widget( 'CraniumFitteds_Ad_Widget' );
}
add_action( 'widgets_init', 'register_CraniumFitteds_Ad_Widget' );











/**
 * Adds CraniumFitteds_Ad_Widget160 widget.
 */
class CraniumFitteds_Ad_Widget160 extends WP_Widget {

	/**
	 * Register widget with WordPress.
	 */
	function __construct() {
		parent::__construct(
			'CraniumFitteds_Ad_Widget160', // Base ID
			'160x600 Ad Injector Ad', // Name
			array( 'description' => __( 'Ad Injector 300x250 Ad Widget', 'Ad_Injector_domain' ), ) // Args
		);
	}

	/**
	 * Front-end display of widget.
	 *
	 * @see WP_Widget::widget()
	 *
	 * @param array $args     Widget arguments.
	 * @param array $instance Saved values from database.
	 */
	public function widget( $args, $instance ) {
		$title = apply_filters( 'widget_title', $instance['title'] );

		echo $args['before_widget'];
		if ( ! empty( $title ) )
			echo $args['before_title'] . $title . $args['after_title'];
		echo __( '<script type="text/javascript">
show_banners("160x600");
</script>', 'text_domain' );
		echo $args['after_widget'];
	}

	/**
	 * Back-end widget form.
	 *
	 * @see WP_Widget::form()
	 *
	 * @param array $instance Previously saved values from database.
	 */
	public function form( $instance ) {
		if ( isset( $instance[ 'title' ] ) ) {
			$title = $instance[ 'title' ];
		}
		else {
			$title = __( 'Shop.CraniumFitteds.com!', 'text_domain' );
		}
		?>
		<p>
		<label for="<?php echo $this->get_field_name( 'title' ); ?>"><?php _e( 'Title:' ); ?></label> 
		<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
		</p>
		<?php 
	}

	/**
	 * Sanitize widget form values as they are saved.
	 *
	 * @see WP_Widget::update()
	 *
	 * @param array $new_instance Values just sent to be saved.
	 * @param array $old_instance Previously saved values from database.
	 *
	 * @return array Updated safe values to be saved.
	 */
	public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';

		return $instance;
	}

} // class CraniumFitteds_Ad_Widget160


// register CraniumFitteds_Ad_Widget160 widget
function register_CraniumFitteds_Ad_Widget160() {
    register_widget( 'CraniumFitteds_Ad_Widget160' );
}
add_action( 'widgets_init', 'register_CraniumFitteds_Ad_Widget160' );

// Add Ads to the bottom of each page


function new_default_content($content) {
global $post;
  



$content .= '<script type="text/javascript">
show_banners("468x60");
</script>';

    return $content;
    }


add_filter( 'the_content', 'new_default_content', 1 );




?>
