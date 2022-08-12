jQuery(document).ready(function () {
    var curHeight = jQuery('.course-content-wrap').height();
    if (curHeight <= 1150)
      jQuery('#readmore').show(1000);
    else
      jQuery('#readmore').hide(1000);
  });

  function changeheight() {
    var readmore = jQuery('#showmore');
    if (readmore.text().trim() == 'Show More') {
      jQuery('#showmore1').hide();
      jQuery('.course-content-wrap').toggleClass("heightAuto");
    }
    else {
      readmore.html("Show More <i class='fa fa-arrow-circle-down' style='color: white;'></i>");
      jQuery('.course-content-wrap').toggleClass("heightAuto");

      jQuery('html, body').animate({
        scrollTop: jQuery("#showmore").offset().top
      }, 2000);
    } style = "text-align: center;"
  };