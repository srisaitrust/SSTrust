/* DAILY THOUGHT IMAGES */
jQuery(document).ready(function ($)
{
  var day = getDayOfYear();
  var n = 365; // Change this to the number of images you have available
  var img_path = 'images/quotes/img_' + ((getDayOfYear() % n) + 1) + '.jpg';
  $("#my_image").attr("src", img_path);
});

function getDayOfYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
}



