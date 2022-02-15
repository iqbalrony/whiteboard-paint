(function () {
  "use strict";
  const canvas = document.querySelector("#canvas-board");
  const colorpicker = document.querySelector("#colorpicker");

  const ctx = canvas.getContext("2d");
  const lineWidth = 4;

  canvas.width = parseInt((document.documentElement.clientWidth / 100) * 80);
  canvas.height = parseInt((document.documentElement.clientHeight / 100) * 70);

  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = lineWidth;

  let drag = false;

  function drawPaint(e) {
    if (!drag) {
      return;
    }

    var rect = canvas.getBoundingClientRect();

    var x = e.clientX - rect.left - 20;
    var y = e.clientY - rect.top - 20;

    ctx.lineTo(x, y);
    ctx.stroke();
  }

  function cbfMouseDown(e) {
    drag = true;

    var rect = canvas.getBoundingClientRect();

    var x = e.clientX - rect.left - 20;
    var y = e.clientY - rect.top - 20;

    ctx.beginPath();
    ctx.moveTo(x, y);
  }
  function cbfMouseup() {
    drag = false;
  }
  canvas.addEventListener("mousedown", cbfMouseDown);
  canvas.addEventListener("mousemove", drawPaint);
  canvas.addEventListener("mouseup", cbfMouseup);

  colorpicker.addEventListener("change", function () {
    ctx.strokeStyle = this.value;
  });

  window.addEventListener("resize", function () {
    canvas.width = parseInt((document.documentElement.clientWidth / 100) * 80);
    canvas.height = parseInt(
      (document.documentElement.clientHeight / 100) * 70
    );
  });
})();
