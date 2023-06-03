// js deliver link:
// <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>



function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'es', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
  }

  function triggerHtmlEvent(element, eventName) {
    var event;
    if (document.createEvent) {
      event = document.createEvent('HTMLEvents');
      event.initEvent(eventName, true, true);
      element.dispatchEvent(event);
    } else {
      event = document.createEventObject();
      event.eventType = eventName;
      element.fireEvent('on' + event.eventType, event);
    }
  }

  jQuery('.lang-select').click(function() {
    var theLang = jQuery(this).attr('data-lang');
    jQuery('.goog-te-combo').val(theLang);

    //alert(jQuery(this).attr('href'));
    window.location = jQuery(this).attr('href');
    location.reload();

  });