document.addEventListener("DOMContentLoaded", function () {

  var lastOpenTrayID = null;

  var btnHome = document.querySelector('[data-id="btn-home"]');
  var btnControls = document.querySelector('[data-id="btn-controls"]');

  btnHome.addEventListener('click', function (e) {
    var delayMS = closeTray(lastOpenTrayID) || 0;

    if (lastOpenTrayID == "tray-home") {
      lastOpenTrayID = null;
      return;
    }

    openTray("tray-home", delayMS);
    lastOpenTrayID = "tray-home";
  });

  btnControls.addEventListener('click', function (e) {
    var delayMS = closeTray(lastOpenTrayID) || 0;

    if (lastOpenTrayID == "tray-controls") {
      lastOpenTrayID = null;
      return;
    }

    openTray("tray-controls", delayMS);
    lastOpenTrayID = "tray-controls";
  });
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