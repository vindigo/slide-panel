document.addEventListener("DOMContentLoaded", function () {
  console.log("ready");



  var btnTray1 = document.querySelector('.btn-1');
  var btnTray2 = document.querySelector('.btn-2');

  var allTrays = document.querySelectorAll('.tray')
  var trayContent1 = document.querySelector('.tray-1');
  var trayContent2 = document.querySelector('.tray-2');
  btnTray1.addEventListener('click', function () {
    toggleTray(trayContent1);
  });

  btnTray2.addEventListener('click', function () {
    toggleTray(trayContent2);
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
  console.log(tray);
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