document.addEventListener("DOMContentLoaded", function () {
  var lastOpenTrayID = null;
  var btnHome = document.querySelector('[data-id="btn-home"]');
  var btnControls = document.querySelector('[data-id="btn-controls"]');
  var mainApp = document.querySelector('#main-app');

  mainApp.addEventListener('click', function (e) {
    var targetElem = e.target;
    var targetID = targetElem.getAttribute('data-id');
    var targetType = targetElem.getAttribute('data-type');

    if (!targetID) { return; }
    if (!targetType) { return; }
    if (targetType == "nav-button") {
      var trayID = 'tray-' + targetID;
      handleNavControl(trayID);
    }

  });

  var handleNavControl = function (targetID) {
    var TRAY_NAME = targetID;
    var delayMS = closeTray(lastOpenTrayID) || 0;

    if (lastOpenTrayID == TRAY_NAME) {
      lastOpenTrayID = null;
      return;
    }

    openTray(TRAY_NAME, delayMS);
    lastOpenTrayID = TRAY_NAME;
  };

});

function openTray(trayID, delayMS) {
  if (!trayID) { return };

  var trayElem = document.querySelector('[data-id="' + trayID + '"]');

  if (!trayElem) { return };

  setTimeout(function () {
    trayElem.classList.remove('hidden');
    trayElem.classList.add('slideInUp');
  }, delayMS);
}

function closeTray(trayID) {
  var DELAY_MS = 1100;
  if (!trayID) { return };

  var trayElem = document.querySelector('[data-id="' + trayID + '"]');

  if (!trayElem) { return };

  setTimeout(function () {
    trayElem.classList.remove('slideInUp');
    trayElem.classList.add('slideOutDown');
  }, 0);

  setTimeout(function () {
    trayElem.classList.add('hidden');
    trayElem.classList.remove('slideOutDown');
  }, DELAY_MS);

  return DELAY_MS;
}