function shareOpen() {}
function shareClose() {}

(function ($, D) {
  D.behaviors.agidShare = {
    attach: function (context, settings) {
      var $share_trigger_icon = $('.agid-share__trigger__icon');
      var $share_trigger_text = $('.agid-share__trigger__text');
      var $share_links_container = $('.agid-share__links-container');

      // Handle icon click
      $share_trigger_icon.click(function (evt) {
        $(this).toggleClass('Icon-close');
        $share_trigger_text.toggle();
        $share_links_container.toggle();
      })
    }
  };
})(jQuery, Drupal);