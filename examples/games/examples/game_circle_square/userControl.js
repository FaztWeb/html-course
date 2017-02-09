function userControl(event) {
  var keyCode;

  if (window.event) {
    keyCode = event.keyCode;
  }
  else if (event.which){
    keyCode = event.which;
  }

  let width   = gEngine.Core.mWidth;
  let height  = gEngine.Core.mHeight;
  let context = gEngine.Core.mContext;

  // create a rectangle if the f key is pressed
  if (keyCode === 70) {
    context.strokeRect(
        Math.random() * width * 0.8 //  x position center
      , Math.random() * height * 0.8 // y position center
      , Math.random() * 30 + 10 // width rectangle
      , Math.random() * 30 + 10 // height rectangle
    );
  }
  // create a new circle if the g key is pressed
  if (keyCode === 71) {
    context.beginPath();
    context.arc(
        Math.random() * width * 0.8 //x position
      , Math.random() * height * 0.8 //y position
      , Math.random() * 30 + 10
      , 0
      , Math.PI * 2
      , true
    );
    context.closePath();
    context.stroke();
  }
}
