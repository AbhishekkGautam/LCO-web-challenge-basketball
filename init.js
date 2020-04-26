$(document).ready(function () {
  $(".modal").modal({
    onCloseStart: function () {
      // func to close video
      $(".iframe-video").each(function () {
        $(this).attr("src", $(this).attr("src"));
        return false;
      });
    },
  });
  $(".sidenav").sidenav();
  $(".slider").slider({
    full_width: true,
    indicators: 50,
    height: 470,
    transition: 500,
    interval: 6000,
  });
  $(".parallax").parallax();
  $(".myteam").carousel({
    numVisible: 5,
    shift: 50,
    padding: 55,
  });

  setInterval(function () {
    $(".myteam").carousel("next");
  }, 2000);
  $(".dropdown-trigger").dropdown({ hover: true });
  $(".scrollspy").scrollSpy();
});

function toggleSignIn() {
  var instance = M.Modal.getInstance($("#modal4"));
  instance.open();
}
function toggleSignUp() {
  var instance = M.Modal.getInstance($("#modal5"));
  instance.open();
}
