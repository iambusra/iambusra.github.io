// Dark mode icon
function switch_dark_mode_icon(darkmode, id) {
  darkmode.toggle();
  render_dark_mode_icon(darkmode, id);
}

function render_dark_mode_icon(darkmode, id) {
  var icon = document.getElementById(id);
  if (darkmode.isActivated()) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}

// Modal link
$(document).ready(function() {
    $(window.location.hash).modal('show');
});
