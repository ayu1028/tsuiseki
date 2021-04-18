(() => {
  const $pointer = document.getElementById('pointer');
  const $button = document.getElementById('button');
  const $star = document.getElementById('star');
  const pointArray = [
    $pointer,
    $star
  ];

  window.addEventListener('mousemove', (e) => {
    const $Xposition = e.clientX;
    const $Yposition = e.clientY;
    for (let i = 0; i < pointArray.length; i ++) {
      pointArray[i].style.left = `${$Xposition}px`;
      pointArray[i].style.top = `${$Yposition}px`;
    };
  });

  window.addEventListener('mousedown', (e) => {
    $star.style.opacity = 1;
    $pointer.style.opacity = 0;
  });

  window.addEventListener('mouseup', (e) => {
    $star.style.opacity = 0;
    $pointer.style.opacity = 1;
  });
})();
