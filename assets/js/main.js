document.addEventListener("DOMContentLoaded", function () {
  var lastOpenTrayID = null;
  var mainApp = document.querySelector('#main-app');

  mainApp.addEventListener('click', function (e) {
    var targetElem = e.target;
    var targetID = targetElem.getAttribute('data-id');
    var targetType = targetElem.getAttribute('data-type');

    if (!targetID) { return; }
    if (!targetType) { return; }

    processTypes(targetID, targetType);

  });

  var processTypes = function (targetID, targetType) {
    switch (targetType) {
      case 'nav-button': handleNavControl('tray-' + targetID); break;
    }
  }

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

var openTray = function (trayID, delayMS) {
  if (!trayID) { return };

  var trayElem = document.querySelector('[data-id="' + trayID + '"]');

  if (!trayElem) { return };

  setTimeout(function () {
    trayElem.classList.remove('hidden');
    trayElem.classList.add('slideInUp');
  }, delayMS);
}

var closeTray = function (trayID) {
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