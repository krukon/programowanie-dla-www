$(document).ready (function() {
  height = Math.max($("#menu").height(), $("#content").height());

  $("#menu").css({height: height});
  $("#content").css({height: height});
});
