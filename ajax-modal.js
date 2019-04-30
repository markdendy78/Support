// Assumes that you're using jQuery and Bootstrap
// The `ajaxurl` variable, should be declared in 
// header.php like so:
// ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
jQuery(document).ready(function() {
var $button = jQuery('.quickview_button');
var $modal = jQuery('#modal');
var $modal_target = jQuery('#modal_target');

$button.click(function(e) {
        e.preventDefault();
        
  var thisEl = jQuery(this);
  var product_id = jQuery(this).data('id');
  jQuery(this).addClass('loading-quickview');

  jQuery.ajax({
    url: quickview_ajax_object.ajax_url,
    type: 'POST',
    data: {
      'action' : 'teeselection_view_product_modal',
      'product' : product_id
      },
    success:function(data) {
      jQuery('.quickview_button').removeClass('loading-quickview');
      $modal_target.html(data);
      $modal.modal('show');
    }
  });
  });
});