document.addEventListener("DOMContentLoaded", function () {

  var lastOpenTrayID = null;

  var btnHome = document.querySelector('[data-id="btn-home"]');
  var btnControls = document.querySelector('[data-id="btn-controls"]');
  // var trayControls = document.querySelector('[data-id="tray-controls"]');

  btnHome.addEventListener('click', function () {
    closeTray(lastOpenTrayID);
    openTray("tray-home");
    lastOpenTrayID = "tray-home";
  });

  btnControls.addEventListener('click', function () {
    closeTray(lastOpenTrayID);
    openTray("tray-controls");
    lastOpenTrayID = "tray-controls";
  });

});

function openTray(trayID) {
  if (!trayID) { return };

  var trayElem = document.querySelector('[data-id="' + trayID + '"]');

  if (!trayElem) { return };

  trayElem.classList.remove('hidden');
  trayElem.classList.add('slideInUp');
}

function closeTray(trayID) {
  if (!trayID) { return };

  var trayElem = document.querySelector('[data-id="' + trayID + '"]');

  if (!trayElem) { return };

  trayElem.classList.remove('slideInUp');
  trayElem.classList.add('slideOutDown');

  setTimeout(function () {
    trayElem.classList.add('hidden');
    trayElem.classList.remove('slideOutDown');
  }, 1100);
}