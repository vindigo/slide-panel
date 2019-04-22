document.addEventListener("DOMContentLoaded", function () {

  var btnHome = document.querySelector('[data-id="btn-home"]');
  var btnControls = document.querySelector('[data-id="btn-controls"]');

  allTrays = document.querySelectorAll('.tray')
  var trayHome = document.querySelector('[data-id="tray-home"]');
  var trayControls = document.querySelector('[data-id="tray-controls"]');
  // var controlBar = document.querySelector('nav');

  // controlBar.addEventListener('click', function () {
  //   toggleTray(trayContent1);
  // });
  btnHome.addEventListener('click', function () {
    alert("home");
    // toggleTray(trayContent1);
  });

  btnControls.addEventListener('click', function () {
    alert("controls");
    // toggleTray(trayContent2);
  });

});

function toggleTray(tray) {
  if (tray.classList.contains('hidden')) {
    openTray(tray);
  } else {
    closeTray(tray);
  }
}

function openTray(tray) {
  // allTrays.forEach(function (item) {
  //   if (!item.hasClass('hidden')) {
  //     closeTray(item);
  //   }

  // });
  tray.classList.remove('hidden');
  tray.classList.add('slideInUp');
}

function closeTray(tray) {
  tray.classList.remove('slideInUp');
  tray.classList.add('slideOutDown');
  setTimeout(function () {
    tray.classList.add('hidden');
    tray.classList.remove('slideOutDown');
  }, 1000);
}